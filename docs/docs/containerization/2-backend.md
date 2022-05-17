---
sidebar_position: 2
---
# Containerize the backend

It's now time to create your first container. Packaging a Node.js application is one of the simplest container you can create, so it's a good place to start. 

Let's look how to do this.

## Create a Dockerfile

First, make sure you are in the `back` folder from the cloned repository. In there, create a new file called `Dockerfile`.

```bash
cd back
touch Dockerfile
```

In this file, you will list the steps that Docker will need to follow to create the image. The first step is to specify a base image. Each container builds on top of an existing image, and this one is not different. Here, we will use the `node` image, version 16. This image includes the Node.js runtime, along with `npm`.

```docker
FROM node:16
```

Now that it has a base image, you can change the working directory to /opt/app. This is where the express server will live. You can then copy the `package.json` file to the container.

```docker
WORKDIR /opt/app
COPY ./package.json .
```

With the `package.json` file in place, npm will be able to install all the dependencies. Using the `RUN` command, you can specify a command to be executed during the build phase for this container.

```docker
RUN npm install
```

All of the dependencies are now installed. You can copy over the source code of your application, which in the case of this specific app, is a single JavaScript file.

```docker
COPY ./index.js .
```

:::tip
It is a good practice to copy the source code after you installed the dependencies. This is because dependencies change much less often that the source code, and can leverage the previous stages that are cached. 
:::

Finally, you need to specify the command that should be executed when the container is started. You will use the same command you used locally here.

```docker
CMD node .
```

Your final `Dockerfile` will look like this.

```docker
FROM node:16
WORKDIR /opt/app
COPY ./package.json .
RUN npm install

COPY ./index.js .
CMD node .
```

## Build the backend image

With this new `Dockerfile`, you will be able to build your own image to be shared with the world. This image will contain the source code, along with all the required dependencies and runtimes needed to run the application. 

The main benefit of creating such an image, is that anyone running this image will have the exact same environment. The versions are always the same, and the runtimes are identical, no matter where this container runs. 

This can be useful to share the container with your team mates, or to deploy to a production server.

To build the container, you will use the `docker build` command.

```bash 
docker build -t $DOCKER_HUB_USERNAME/mern-k8s-back .
```

You can then push this new image to your docker hub account. Make sure that you are logged in first.

```bash
docker login
docker push $DOCKER_HUB_USERNAME/mern-k8s-back
```

## Start the container
You can now run this new container on your local machine. First, make sure that any existing version of the backend that were running locally. Then, you can start the container by using the following command.

```bash
docker run -d --rm --name mern-k8s-back -p 5000:5000 -e PORT=5000 -e CONN_STR="mongodb://user:pass@127.0.0.1:27017" $DOCKER_HUB_USERNAME/mern-k8s-back
```

You can verify that the application is running with the `docker ps` command. This command will list any active containers.

```bash
CONTAINER ID   IMAGE                    COMMAND                  CREATED         STATUS         PORTS                                           NAMES
4b32f116bf64   joellord/mern-k8s-back   "docker-entrypoint.s…"   3 seconds ago   Up 2 seconds   0.0.0.0:5000->5000/tcp, :::5000->5000/tcp       mern-k8s-back
25edc7acf2b3   mongo                    "docker-entrypoint.s…"   4 hours ago     Up 4 hours     0.0.0.0:27017->27017/tcp, :::27017->27017/tcp   mongodb
```

If you try to `curl` this new backend on the `/healthz` route again, you might see an issue. 

```js
{"status":"Ok","dbConnected":false}
```

It looks like the database is not connected anymore. This makes sense because as far as the container goes, there is no running MongoDB instance inside the container. That instance resides on your local machine and currently can be reached by the container.