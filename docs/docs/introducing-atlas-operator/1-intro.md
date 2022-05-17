---
sidebar_position: 1
---
# What is the Atlas Operator

Deploying a database in Kubernetes is a complex task. It requires a lot of expertise to ensure that your deployment is future proof. In addition to that, maintaining that database can also be complex. Upgrading to more recent versions while keeping the same data can be a big issue.

As you have already seen, all of this is already taken care of for you with MongoDB Atlas. It has a nice and easy to use UI to manage your cluster. However, you might want to be able to manage everything from within your Kubernetes cluster. This can have many benefits to your DevOps team.

This is where the Atlas Operator will come into play. 

![Kubernetes with Atlas Operator](/img/kubernetes/atlas.png#center)
_<div align="center">Kubernetes architecture with the Atlas Operator</div>_

Using the Atlas Operators gives you the full benefits of using MongoDB Atlas, while still managing everything from within your Kubernetes cluster.

## Why use the Operator

The Atlas Operator bridges the gap between Atlas, the cloud offering, and your Kubernetes cluster. By using the operator, you can use `kubectl` and your familiar tooling to manage and set up your Atlas clusters.

It's also a very easy way to make sure that your data is located where it needs to be. If you need to keep data into specific geographic regions, deploying specific pods into those servers can be tricky with Kubernetes. If everything is managed through the Atlas Operator, it gets much easier.

## Learn more

You can learn much more about the MongoDB Atlas Operator from the [documentation](https://www.mongodb.com/docs/atlas/reference/atlas-operator/ak8so-quick-start/) site.