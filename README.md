npx create-react-app front
cd front
rm -rf ./.git
npm start

Open new terminal on project root
mkdir back && cd back
npm init -y
touch index.js
npm install express
npm install dotenv

In index.js
```
const express = require("express");
require("dotenv").config()

const PORT = process.env.PORT;

let app = express();

app.get("/healthz", (req, res) => {
  res.send({status: "Ok"}).status(200);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```
nodemon .
Test with browser at http://localhost:5000/healthz

Connect to a DB
Using Atlas: Create account, create cluster, save connection string to back/.env
CONN_STR=...

Using Docker: 
docker run --name mongodb --rm -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user MONGO_INITDB_ROOT_PASSWORD=pass mongo
CONN_STR=mongodb+srv://user:pass@localhost:27017/myFirstDatabase

npm install mongodb

```
const express = require("express");
require("dotenv").config()

const PORT = process.env.PORT;
const CONN_STR = process.env.CONN_STR;

let DB_CONNECTED = false;

const getMongoDB = async () => {
  const MongoClient = require('mongodb').MongoClient;

  const client = await MongoClient.connect(CONN_STR, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = await client.db("mern-k8s");
  DB_CONNECTED = true;
  return db;
}
let db;
getMongoDB().then(_db => db = _db);

let app = express();

app.get("/healthz", (req, res) => {
  res.send({status: "Ok", dbConnected: DB_CONNECTED}).status(200);
});

app.get("/items", async (req, res) => {
  let collection = await db.collection("items")
  let items = await collection.find({}).toArray();
  res.send(items).status(200);
});

app.get("/populate", async (req, res) => {
  let collection = await db.collection("items");
  let result = await collection.insertOne({name: "Joel"});
  res.send(result).status(200);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

Add CORS 
npm install cors
const cors = require("cors");
app.use(cors())

Connect front-end in App.js
```
import { useState } from "react";
import './App.css';

function App() {

  let [result, setResult] = useState({});

  const fetchData = async () => {
    let items = await fetch("http://localhost:5000/items").then(r => r.json());
    setResult(items);
  }

  return (
    <div className="App">
      <h1>Fetch data from MongoDB</h1>
      <p>
        <button onClick={fetchData}>Fetch Data</button>
        <code>
          <pre style={{textAlign: "left", marginLeft: "5em", marginRight: "5em"}}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </code>
      </p>
    </div>
  );
}

export default App;
```

Add "homepage": "." to package.json

Change front-end to use env variable
Add front/src/config.json
{
  "BASE_URL": "http://localhost:5000"
}
App.js:
import config from "./config.json";
... fetch(`${config.BASE_URL}/items`);

Create Dockerfile for backend
cp ./dockerfiles/Dockerfile.back ./back/Dockerfile
cd back
docker build -t joellord/mern-k8s-back .
docker push joellord/mern-k8s-back
docker run -d --rm --name mern-k8s-back -p 5000:5000 -e PORT=5000 -e CONN_STR="mongodb+srv://user:pass@cluster0.2grje.mongodb.net/myFirstDatabase" joellord/mern-k8s-back

Create the Dockerfile for the front end
cp ./dockerfiles/Dockerfile.front ./front/Dockerfile
cp ./dockerfiles/start-nginx.sh ./front
cd front
docker build -t joellord/mern-k8s-front .
docker push joellord/mern-k8s-front
docker run -d --rm --name mern-k8s-front -p 8080:80 -e BASE_URL="http://localhost:3333" joellord/mern-k8s-front

docker stop mern-k8s-front mern-k8s-back

Everything working in containers locally. Let's move to Kubernetes

(Configure DO: https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/nginx.md)

minikube start --driver=virtualbox --host-dns-resolver=true --dns-proxy=false

Create k8s/back/deployment.yaml
Create k8s/back/service.yaml
kubectl get all
kubectl logs pod...

** Setup DO domains to redirect traffic to load balancer
* Check load balancers: kubectl get svc -n ingress-nginx

Create k8s/ingress.yaml

curl <api.domain>/healthz

Create k8s/front/deployment.yaml
Create k8s/front/service.yaml

Update ingress to use the new front service

## Install the Operator

### Community
From root:
git clone git@github.com:mongodb/mongodb-kubernetes-operator.git
cd mongodb-kubernetes-operator
kubectl apply -f config/crd/bases/mongodbcommunity.mongodb.com_mongodbcommunity.yaml

Validate CRD installation
kubectl get crd/mongodbcommunity.mongodbcommunity.mongodb.com

kubectl apply -k config/rbac/ --namespace default

Verify
kubectl get role mongodb-kubernetes-operator
kubectl get rolebinding mongodb-kubernetes-operator
kubectl get serviceaccount mongodb-kubernetes-operator

Install Operator
kubectl create -f config/manager/manager.yaml
(2+ vCPUs required)
 
Verify
kubectl get pods

Deploy database
cd k8s
kubectl apply -f ./mdb_community.yaml
k get mongodbcommunity

Get Connection String
kubectl get secret mern-k8s-db-admin-mern-k8s-user -o json | jq -r '.data | with_entries(.value |= @base64d)'

Change backend container
```
   env:
    - name: "CONNECTION_STRING"
      valueFrom:
        secretKeyRef:
          name: <metadata.name>-<auth-db>-<username>
          key: connectionString.standardSrv
```

Upgrade to MongoDB 5
```
apiVersion: mongodbcommunity.mongodb.com/v1
kind: MongoDBCommunity
metadata:
  name: mern-k8s-db
  labels:
    app: mern-k8s
    component: db
spec:
  members: 2
  type: ReplicaSet
  version: "5.0.6"
  security:
    authentication:
      modes: ["SCRAM"]
```
