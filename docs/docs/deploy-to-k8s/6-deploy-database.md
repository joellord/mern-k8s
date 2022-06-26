---
sidebar_position: 6
---
# Deploying the database on Kubernetes

Deploying a database on Kubernetes is no simple task. You will need to add persistence, as well as ensuring that you have redundancy. And as your application grows, you might need to add sharding and more replication. Perhaps you will need to move data to specific geolocated servers to comply with GDPR policies.

All of these are highly complex tasks. 

On the other hand, you already have all of this in MongoDB Atlas as it is right now. But there is a gap between MongoDB Atlas and your Kubernetes cluster.

In the next section, you will be introduced to the MongoDB Atlas Operator, which will take care of filling this gap for you.

