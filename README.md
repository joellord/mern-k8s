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
docker run --name mongodb --rm -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=blog MONGO_INITDB_ROOT_PASSWORD=blog mongo
CONN_STR=mongodb+srv://blog:blog@localhost:27017/myFirstDatabase

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
docker run -d --rm --name mern-k8s-back -p 5000:5000 -e PORT=5000 -e CONN_STR="mongodb+srv://blog:blog@cluster0.2grje.mongodb.net/myFirstDatabase" joellord/mern-k8s-back

Create the Dockerfile for the front end
cp ./dockerfiles/Dockerfile.front ./front/Dockerfile
cp ./dockerfiles/start-nginx.sh ./front
cd front
docker build -t joellord/mern-k8s-front .
docker push joellord/mern-k8s-front
docker run -d --rm --name mern-k8s-front -p 8080:80 -e BASE_URL="http://localhost:3333" joellord/mern-k8s-front

docker stop mern-k8s-front mern-k8s-back

Everything working in containers locally. Let's move to Kubernetes
minikube start --driver=virtualbox --host-dns-resolver=true --dns-proxy=false

Create k8s/back/deployment.yaml
Create k8s/back/service.yaml
kubectl get all
kubectl logs pod...
Create k8s/ingress.yaml