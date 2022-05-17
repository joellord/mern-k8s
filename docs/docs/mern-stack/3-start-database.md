---
sidebar_position: 3
---
# Start a local database

The recommended way to run MongoDB nowadays is by using MongoDB Atlas, the cloud offering by MongoDB. It is much easier to manage clusters through Atlas. However, in some cases, developers like to have a local instance of MongoDB running as part of their environment. This can be easier to avoid data corruption, or to enable fully offline development environments.

In this section, you will see how you can easily start a database using the MongoDB image maintained by Docker.

## Create the container image

No need to perform a local installation of MongoDB to try it out locally. You can use a Docker container to run it. This has the benefit of cleaning up the database once you shut it down.

To start the container, use the `docker` command line.

```bash
docker run --name mongodb --rm -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=pass mongo
```

This command will create a new, non-persisted, database. The root username and password will be `user` and `pass`.

:::tip
You can explore your running database with [mongosh](https://www.mongodb.com/docs/mongodb-shell/), the MongoDB Shell tool by running:

```bash
mongosh mongodb://user:pass@127.0.0.1:27017
```

Once the shell is started, you can write and read from a test collection.
```js
db.myNewCollection.insertOne({hello: "world"});
db.myNewCollection.findOne({});
```
:::

You now have a running local MongoDB instance. If you run

```bash
docker ps
```

You should see a similar output:
```
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                           NAMES
25edc7acf2b3   mongo     "docker-entrypoint.s…"   3 minutes ago   Up 2 minutes   0.0.0.0:27017->27017/tcp, :::27017->27017/tcp   mongodb
```