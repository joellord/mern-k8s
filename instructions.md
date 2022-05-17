Open new terminal on project root
mkdir back && cd back
npm init -y
npm install express dotenv cors mongodb
nodemon .

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

Create .env file
```
PORT=5000
```

Test with browser at http://localhost:5000/healthz

Connect to a DB
Using Atlas: Create account, create cluster, save connection string to back/.env
CONN_STR=...

Using Docker: 
docker run --name mongodb --rm -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=pass mongo

mongosh mongodb://user:pass@127.0.0.1:27017

Add to .env
CONN_STR=mongodb://user:pass@localhost:27017

```
const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");

require("dotenv").config();

const PORT = process.env.PORT;
const CONN_STR = process.env.CONN_STR;

let app = express();
app.use(cors());
app.use(express.json());

let DB_CONNECTED = false;

const getMongoDB = async () => {
  const MongoClient = require("mongodb").MongoClient
  const client = await MongoClient.connect(CONN_STR, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = await client.db("mern-k8s");
  DB_CONNECTED = true;
  return db;
}
let db = getMongoDB().then(_db => db = _db);

app.get("/healthz", (req, res) => {
  res.send({status: "Ok", dbConnected: DB_CONNECTED}).status(200);
});

app.get("/entries", async (req, res) => {
  let entries = await db.collection("entries").find({}).toArray();
  res.send(entries).status(200);
});

app.post("/entry", async (req, res) => {
  let entry = req.body;
  let result = await db.collection("entries").insertOne(entry);
  res.send(result).status(201);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

Test out the server
curl -d '{"name": "Anonymous", "message": "So much wow!"}' -H "Content-Type: application/json" -X POST http://localhost:5000/entry
curl localhost:5000/entries

npx create-react-app front
cd front
rm -rf ./.git
npm start
Add "homepage": "." to package.json
touch index.js

Connect front-end in App.js
```
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my</h1>
      <h2>Guestbook</h2>

      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message"></textarea>
        </div>
        <div>
          <button id="submitBtn" type="button">Submit</button>
          <button id="clearBtn" type="button">Clear</button>
        </div>
      </form>

    </div>
  );
}

export default App;
```

Create component for guestbook entries
```
import React from "react";

export default function GuestBookEntry(props) {
  return (
    <div className="gb-entry">
      <hr className="divider" />
      <div className="gb-name">
        <span className="label">Name:</span> {props.name}
      </div>
      <div className="gb-message">
        <span className="label">Message:</span> {props.message}
      </div>
    </div>
  )
}
```

Test out with fake entities
```
  let [entries, setEntries] = useState([{name: "Joel", message: "Cool web site!"}]);

  ...
        {entries.map(e => <GuestBookEntry {...e} />)}
```

Add CSS styling


Fetch from database
```
import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:5000";

function App() {
  let [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    let entriesFromDB = await fetch(`${BASE_URL}/entries`).then(r => r.json());
    setEntries(entriesFromDB);
  }

  useEffect(() => {
    fetchEntries();
  }, []);
```

Test it out

Add code to submit new entries
```
  let [name, setName] = useState("");
  let [message, setMessage] = useState("");

  const handleSubmit = async () => {
    let result = fetch(`${BASE_URL}/entry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, message})
    }).then(r => r.json());

    clearForm();
    fetchEntries();
    console.log(result);
  }

  const clearForm = () => {
    setName("");
    setMessage("");
  }
```

Connect the form
```
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" value={name} id="name" onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        </div>
        <div>
          <button id="submitBtn" onClick={handleSubmit} type="button">Submit</button>
          <button id="clearBtn" type="button" onClick={clearForm}>Clear</button>
        </div>
      </form>
```

Back to slides

Moving to the cloud
Create Atlas account + Cluster

Create Dockerfile for backend
```
FROM node:16
WORKDIR /opt/app
COPY ./package.json .
RUN npm install

COPY ./index.js .
CMD node .
```
docker build -t joellord/mern-k8s-back .
docker push joellord/mern-k8s-back

Use the new MongoDB Atlas connection string
docker run -d --rm --name mern-k8s-back -p 5000:5000 -e PORT=5000 -e CONN_STR="mongodb+srv://user:pass@cluster0.2grje.mongodb.net/myFirstDatabase" joellord/mern-k8s-back


Change front-end to use env variable
Add front/src/config.json
{
  "BASE_URL": "http://localhost:5000"
}
App.js:
```
import config from "./config.json";
const BASE_URL = config.BASE_URL;
```

Create the Dockerfile for the front end
```
FROM node:16

ENV JQ_VERSION=1.6
RUN wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64
RUN cp /tmp/jq-linux64 /usr/bin/jq
RUN chmod +x /usr/bin/jq

WORKDIR /opt/app
COPY . .
RUN jq 'to_entries | map_values({ (.key) : ("$" + .key) }) | reduce .[] as $item ({}; . + $item)' ./src/config.json > ./src/config.tmp.json && mv ./src/config.tmp.json ./src/config.json
RUN npm install && npm run build

FROM nginx:1.17
ENV JSFOLDER=/usr/share/nginx/html/static/js/*.js
COPY ./start-nginx.sh /usr/bin/start-nginx.sh
RUN chmod +x /usr/bin/start-nginx.sh
WORKDIR /usr/share/nginx/html
COPY --from=0 /opt/app/build .
ENTRYPOINT [ "start-nginx.sh" ]
```

Add a start-nginx.sh file for the env var hack
```
#!/usr/bin/env bash
export EXISTING_VARS=$(printenv | awk -F= '{print $1}' | sed 's/^/\$/g' | paste -sd,); 
for file in $JSFOLDER;
do
  cat $file | envsubst $EXISTING_VARS > tmpfile.js
  mv tmpfile.js $file
done
nginx -g 'daemon off;'
```

docker build -t joellord/mern-k8s-front .
docker push joellord/mern-k8s-front
docker run -d --rm --name mern-k8s-front -p 8080:80 -e BASE_URL="http://localhost:3333" joellord/mern-k8s-front

docker stop mern-k8s-front mern-k8s-back

Everything working in containers locally. Let's move to Kubernetes

(Configure DO: https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/nginx.md)

minikube start --driver=virtualbox 

Create k8s/back/deployment.yaml
Create k8s/back/service.yaml

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mern-k8s-back
  labels:
    app: mern-k8s
    component: back
spec:
  replicas: 1
  selector: 
    matchLabels:
      component: back
  template:
    metadata: 
      labels:
        app: mern-k8s
        component: back
    spec:
      containers:
        - name: mern-k8s-back
          image: joellord/mern-k8s-back
          ports: 
            - containerPort: 5000
          env: 
            - name: PORT
              value: "5000"
            - name: CONN_STR
              value: ""
---
apiVersion: v1
kind: Service
metadata:
  name: mern-k8s-back
  labels:
    app: mern-k8s
    component: back
spec:
  selector:
    component: back
  ports:
    - port: 80
      targetPort: 5000
      protocol: TCP
      name: http
```

kubectl get all
kubectl logs pod...


## Deploy on Digital Ocean
** Setup DO domains to redirect traffic to load balancer
* Check load balancers: kubectl get svc -n ingress-nginx

Create k8s/ingress.yaml

curl <api.domain>/healthz

Create k8s/front/deployment.yaml
Create k8s/front/service.yaml

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mern-k8s-front
  labels:
    app: mern-k8s
    component: front
spec:
  replicas: 1
  selector: 
    matchLabels:
      component: front
  template:
    metadata: 
      labels:
        app: mern-k8s
        component: front
    spec:
      containers:
        - name: mern-k8s-front
          image: joellord/mern-k8s-front
          ports: 
            - containerPort: 80
          env: 
            - name: BASE_URL
              value: "http://api.mern-k8s.com"
---
apiVersion: v1
kind: Service
metadata:
  name: mern-k8s-front
  labels:
    app: mern-k8s
    component: front
spec:
  selector:
    component: front
  ports:
    - port: 80
      targetPort: 80
      protocol: TCP
      name: http
```

Update ingress to use the new front service
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: mern-k8s-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /$2
spec:
  rules:
    - http:
        paths:
          - path: /api(/|$)(.*)
            pathType: Prefix
            backend:
              service:
                name: mern-k8s-back
                port:
                  number: 80
          - path: /()(.*)
            pathType: Prefix
            backend:
              service:
                name: mern-k8s-front
                port:
                  number: 80

```

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

## Using the Atlas Operator

Install Operator
kubectl apply -f https://raw.githubusercontent.com/mongodb/mongodb-atlas-kubernetes/main/deploy/all-in-one.yaml

#Create secret
kubectl create secret generic mongodb-atlas-operator-api-key \
    --from-literal="orgId=<org>" \
    --from-literal="publicApiKey=<public>" \
    --from-literal="privateApiKey=<private>" \
    -n mongodb-atlas-system
kubectl label secret mongodb-atlas-operator-api-key atlas.mongodb.com/type=credentials -n mongodb-atlas-system

#Create user password
kubectl create secret generic atlaspassword --from-literal="password=mernk8s"
kubectl label secret atlaspassword atlas.mongodb.com/type=credentials

Apply the Atlas cluster
k apply -f ./mdb_atlas.yaml

Get Connection String
kubectl get secret mern-k8s-db-admin-mern-k8s-user -o json | jq -r '.data | with_entries(.value |= @base64d)'