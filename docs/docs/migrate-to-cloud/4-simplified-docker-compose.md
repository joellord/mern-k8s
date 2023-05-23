---
sidebar_position: 4
---
# Revisit the docker compose file (optional)

If you created a Docker Compose setup earlier, and want to tweak it to use the new cloud database, you can use the following `yaml`.

```yaml
version: "3"
services:
  backend:
    image: docker.io/joellord/mern-k8s-back
    container_name: mern-k8s-back
    environment:
      CONN_STR: "mongodb+srv://mern-k8s:<password>@cluster0.wc3ix.mongodb.net/"
      PORT: "5000"
    ports:
    - "5000:5000"
  client:
    image: docker.io/joellord/mern-k8s-front
    container_name: mern-k8s-front
    environment:
      BASE_URL: "http://localhost:5000"
    ports:
      - "8080:80"
```

This new docker compose file is much simpler as there is no need for that additional container for the database.
