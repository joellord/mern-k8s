---
sidebar_position: 4
---
# Revisit the docker compose file (optional)

If you created a Docker Compose setup earlier, and want to tweak it to use the new cloud database, you can use the following `yaml`.

```yaml
version: "3"
services:
  backend:
    image: mongodb+srv://mern-k8s:mern-k8s@cluster0.wc3ix.mongodb.net
    ports:  
    - "5000:5000" 
  client:
    image: docker.io//joellord/mern-k8s-front
    ports:
      - "8080:80"
```

This new docker compose file is much simpler as there is no need for that additional container for the database.