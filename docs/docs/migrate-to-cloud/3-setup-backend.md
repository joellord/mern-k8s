---
sidebar_position: 3
---
# Set up the backend to use Atlas

Now's the time to change your application to use the cloud database rather than the local container version. The process is fairly straightforward since the application uses an environment variable to specify the connection string.

## Stop existing containers
First, stop any existing containers. You won't need the database container anymore, and the other two will be restarted in the next steps.

```bash
docker stop mern-k8s-back mern-k8s-front mongodb
```

## Restart the back and front containers
Let's restart the frontend container. For this container, there are no changes as the database migration should not affect the frontend.

```bash
docker run -d --rm --name mern-k8s-front -p 8080:80 -e BASE_URL="http://localhost:5000" $DOCKER_HUB_USERNAME/mern-k8s-front
```

You can also restart the backend server. This time, you will use the Atlas connection string rather than connecting to the local container.

```bash
docker run -d --rm --name mern-k8s-back -p 5000:5000 -e PORT=5000 -e CONN_STR=$ATLAS_CONNECTION_STRING --network mern-k8s $DOCKER_HUB_USERNAME/mern-k8s-back
```

## Test the application
Once again, open up your browser to [localhost:5000](http://localhost:5000) to test out the application. Because you migrated to the cloud database, you won't see the data you had earlier. However, this data is now persisted. Even if you restart your containers, you can still access the data from the Atlas cluster.