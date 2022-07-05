---
sidebar_position: 4
---
# Containerize the frontend
The backend is now running inside its own container. It's now time to build a container for the frontend.

The frontend container is slightly  more complex than the backend one. It uses a multi stage build approach to start by building the application with Node.js, and then copy the resulting files to an Nginx server. This second stage with the server and the build files will constitute the actual container, and the previous stages won't be part of that final image.

## Create a Dockerfile
Just as you did for the backend, you will need to create a `Dockerfile` to tell Docker how to build this new image. Make sure that you are in the `front` folder this time.

```
cd front
touch Dockerfile
```

With your favourite IDE, write the following to your file. First, start by telling Docker to use `node` as the base image. Let's use version 16 again.

```docker
FROM node:16
```

Next, we will need to use `jq`, a CLI tool to manipulate JSON from the command line. With this tool, we will be able to change values in the `config.json` file to use values set in the environment variables.

```docker
ENV JQ_VERSION=1.6
RUN wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64
RUN cp /tmp/jq-linux64 /usr/bin/jq
RUN chmod +x /usr/bin/jq
```

With the image read, you can change the working directory and copy over all the files from the `front` folder into the `/opt/app` folder of the container.

```docker
WORKDIR /opt/app
COPY . .
```

Now's the time to use `jq` to change the values of the `config.json` file. For now, it will change each value to `$key`. For your current file, this means that it will `"BASE_URL": "http://localhost:5000"` to `"BASE_URL": "$BASE_URL"`. The command for your Dockerfile is as follows.

```docker
RUN jq 'to_entries | map_values({ (.key) : ("$" + .key) }) | reduce .[] as $item ({}; . + $item)' ./src/config.json > ./src/config.tmp.json && mv ./src/config.tmp.json ./src/config.json
```

Finally, you can install the dependencies, and run the build command to create your HTML, CSS, and JavaScript files.

```docker
RUN npm install && npm run build
```

We now have an image with the three files on it, but ultimately, we want to copy those over to an Nginx server. To the existing file, add the new stage. Using a new `FROM` command tells Docker that this is a second stage, and that the first stage won't be part of the final container.

```docker
FROM nginx:1.17
```

Now, you will need to specify the folder in which your JavaScript files will reside. This environment variable will be used by the `start-nginx.sh` script that will be added to the container. This script goes through each of the JavaScript files, and overwrites and `$ENV_VAR` with the value of the environment variable. In this specific case, the `$BASE_URL` in the `config.json` file will be changed to the actual value from the server. Make sure that this script has execute permissions.

```docker
ENV JSFOLDER=/usr/share/nginx/html/static/js/*.js
COPY ./start-nginx.sh /usr/bin/start-nginx.sh
RUN chmod +x /usr/bin/start-nginx.sh
```

:::info
We won't go through the details of this `start-nginx.sh` file in here, but know that this file can be used with virtually any JavaScript framework. Here is the actual content of the script if you are curious about it.

```bash
#!/usr/bin/env bash
export EXISTING_VARS=$(printenv | awk -F= '{print $1}' | sed 's/^/\$/g' | paste -sd,); 
for file in $JSFOLDER;
do
  cat $file | envsubst $EXISTING_VARS > tmpfile.js
  mv tmpfile.js $file
done
nginx -g 'daemon off;'
```
:::

You're almost done with the Dockerfile. You only need to change the working directory to the default folder from which Nginx serves files, and copy the files from the first stage. Finally, change the `ENTRYPOINT` to this file. This new `start-nginx.sh` script is the script that will be used to start the server now.

```docker
WORKDIR /usr/share/nginx/html
COPY --from=0 /opt/app/build .
ENTRYPOINT [ "start-nginx.sh" ]
```

Your final `Dockerfile` should look like the following.

```docker
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

## Build the frontend image
With this new `Dockerfile`, you will be able to build and share your frontend image too.

Just like you did for the backend, use `docker build` to create this new image, and then push it to your registry. Run `docker login` if you had not previously logged in to your account.

```bash 
docker build -t $DOCKER_HUB_USERNAME/mern-k8s-front .
docker push $DOCKER_HUB_USERNAME/mern-k8s-front
```

## Start the container
You can now start this new container. In this case, it won't need to connect to the network. This is because the client application is making a request to `localhost:5000`, and your current localhost has an open port to connect to the backend service.

```bash
docker run -d --rm --name mern-k8s-front -p 8080:80 -e BASE_URL="http://localhost:5000" $DOCKER_HUB_USERNAME/mern-k8s-front
```

You can verify that the application is running by opening [http://localhost:8080](localhost:8080) in your browser. You should see the application up and running again. 

:::note
You might notice that all the data your entered previously is now lost. This is because the database container was restarted in a previous step, so it was reinitialized to its initial state.
:::