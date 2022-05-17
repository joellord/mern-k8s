---
sidebar_position: 5
---
# Package with Docker Compose (optional)

While using `docker-compose` is not required for this workshop, it's interesting to see how a Docker Compose setup could be used to share this application. As this is not the focus of this workshop, here is the `yaml` file to run it, and the associated commands.

## Creating a docker-compose file
From the root of the project, create a `docker-compose.yaml` file with the following content.

```yaml
version: "3"
services:
  mongo:
    image: mongo
    ports:
    - "27017:27017"
  backend:
    image: docker.io/joellord/mern-k8s-back
    depends_on:
    - mongo 
    ports:  
    - "5000:5000" 
  client:
    image: docker.io//joellord/mern-k8s-front
    ports:
      - "8080:80"
```

## Start the application
Now that you are using Docker Compose, you can share this single file. Docker Compose will take care of downloading all the images and creating the network. The only command someone needs to start this three tier application is.

```bash
docker-compose up
```

To shutdown the application, the `down` command is used.

```bash
docker-compose down
```
