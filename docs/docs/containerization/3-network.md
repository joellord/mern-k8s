---
sidebar_position: 3
---
# Create a network
In order for the containers to find each other, you will need to create a Docker network. Understanding how networking work in the containers land is out of the scope of this specific workshop. However, let's see how we can get our backend to connect to the MongoDB container.

## Stop existing containers
Make sure that you stop existing containers with the `docker stop` command.

```bash
docker stop mongodb
docker stop mern-k8s-back
```

## Create a Docker Network
Creating a Docker network requires a single command.

```
docker network create mern-k8s
```

You will now be able to restart your containers, and use this newly created network with the `--network` flag.

## Restart the database container
Restart your database container, but with the network flag this time. Now, this container will be reachable by the name provided with the `--name` flag. 

```bash
docker run --name mongodb --rm -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=pass --network mern-k8s mongo
```

## Restart the backend
Restart the backend container. This time, specify the `--network` flag, and change the connection string to use the `mongodb` container rather than `127.0.0.1`.

```bash
docker run -d --rm --name mern-k8s-back -p 5000:5000 -e PORT=5000 -e CONN_STR="mongodb://user:pass@mongodb:27017" --network mern-k8s $DOCKER_HUB_USERNAME/mern-k8s-back
```

## Test out the backend
Try reaching your backend again.

```bash
curl localhost:5000/healthz
```

This time, you should see that the server is up and running, and that the database is connected.