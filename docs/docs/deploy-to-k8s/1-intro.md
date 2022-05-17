---
sidebar_position: 1
---

# What is Kubernetes?
Kubernetes is a container orchestration platform that can be used to manage containers in the cloud. It is commonly used in microservices architectures to ensure that all the containers are running at any given time, and that the network communication across various containers is taken care of. 

> Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.
_<a href="https://kubernetes.io/" target="_blank" rel="nofollower noopener noreferrer">Kubernetes documentation</a>_

## Pod, ReplicaSets, Deployments, Services, and more

Kubernetes uses a declarative syntax to describe the deployment you want to perform. Let's start by looking at what is needed for our backend service to be deployed.

![Backend service on Kubernetes](/img/kubernetes/back.png#center)
_<div align="center">The backend service</div>_

For the backend, you will deploy two pods. A pod in Kubernetes can contain one or more containers that are meant to live --and die-- together. For this application, we will run two pods with the backend application to ensure that we have redundancy, and that our guestbook page never goes down.

To deploy those two pods, we will create a deployment. The deployment will describe what the pods should look like, and how many of those pods we want at any given time.

This deployment will in turn create a replicaset. The replicaset will ensure that the pods are always running. If one of the pods was to crash, it will automatically start a new one. If you were to upgrade the backend to a newer version, it will start by creating the new pods, and then try to gracefully take down the pods with the older version.

Finally, all of these pods are created with a random name. This is where the service will come into play. The service will act as a load balancer for all of the pods managed by a deployment.

![Frontend service on Kubernetes](/img/kubernetes/front.png#center)
_<div align="center">The frontend service</div>_

For the frontend, the structure will be the same. It will have a deployment that will create two pods for our frontend.

## Exposing to the outside world

All of these services are only accessible from within the Kubernetes cluster. No one from the outside world can see your amazing guestbook as it is. This is where the ingress will come into play.

![Ingress](/img/kubernetes/ingress.png#center)
_<div align="center">The Ingress exposes the services to the outside world</div>_

The ingress can be configured to redirect traffic based on the route or the subdomain that was part of the request. In our deployment, all traffic starting with `/api` will go to the backend, and everything else will go to the frontend.

## Adding a database

Kubernetes is meant to work with containers that are ephemeral by nature. It's whole purpose is to easily spin up or down containers. However, as we've seen earlier, when a container is taken down, all the data that was written in it also disappears. 

To help with this, you will need to create persisted volumes in Kubernetes. You will also need to configure multiple clusters to add redundancy. 

![Final architecture](/img/kubernetes/architecture.png#center)
_<div align="center">The final Kubernetes layout</div>_

All of this setup can be quite complex. For this specific section, we will keep the hard coded connection string to the Atlas cluster since Atlas already takes care of all of that for us.