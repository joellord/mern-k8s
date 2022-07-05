---
sidebar_position: 2
---
# Deploy the backend

As we did with the containers, we will start with the backend. The deployment will create two replicas of our backend.

![Backend deployment](/img/kubernetes/back.png#center)
_<div align="center">The backend on Kubernetes</div>_

## Create your deployment
First, let's start by creating a deployment. This deployment will describe the template for our pods, and tell Kubernetes how many of those pods we want.

In a new folder that will contain your Kubernetes definition files, add a new folder called `back`. In this folder, create a file `deployment.yaml`.

All Kubernetes objects start with the same fields, which are `apiVersion`, `kind`, `metadata`, and `spec`. For this deployment, you can use the following.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mern-k8s-back
  labels:
    app: mern-k8s
    component: back
spec:
```

In the `spec`, you can specify the number of replicas you want and the selector that will be used for Kubernetes to identify those replicas.

```yaml
spec:
  replicas: 2
  selector: 
    matchLabels:
      component: back
```

Finally, still in the `spec`, you can specify the `template` to be used for these pods. 

```yaml
  template:
    metadata: 
      labels:
        app: mern-k8s
        component: back
    spec:
      containers:
        - name: mern-k8s-back
          image: $DOCKER_HUB_USERNAME/mern-k8s-back
          ports: 
            - containerPort: 5000
          env: 
            - name: PORT
              value: "5000"
            - name: CONN_STR
              value: "$ATLAS_CONNECTION_STRING"
```

Your final `back/deployment.yaml` file should look like the following.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mern-k8s-back
  labels:
    app: mern-k8s
    component: back
spec:
  replicas: 2
  selector: 
    matchLabels:
      component: back
  template:
    metadata: 
      labels:
        app: mern-k8s
        component: back
    spec:
      containers:
        - name: mern-k8s-back
          image: $DOCKER_HUB_USERNAME/mern-k8s-back
          ports: 
            - containerPort: 5000
          env: 
            - name: PORT
              value: "5000"
            - name: CONN_STR
              value: "$ATLAS_CONNECTION_STRING"
```

:::info
Don't forget to replace `$DOCKER_HUB_USERNAME` and `$ATLAS_CONNECTION_STRING` with your own values, or use the following script to do it for you in bash.

```bash
envsubst < back/deployment.yaml > back/deployment.tmp.yaml && mv back/deployment.tmp.yaml back/deployment.yaml
```
:::

## Create your service

The ReplicaSet created by this deployment will spin up two new pods with random names. In order for other services to be able to communicate with this backend, a Service will need to be created. This service will act as a load balancer for all the pods.

The service uses a similar syntax to the deployment. It has the `apiVersion`, `kind`, `metadata`, and `spec` fields. In the `spec`, you will specify to which label will the requests be sent, and what the port mappings will look like. In this case, we want the service to run on port `80`, but to redirect traffic to the port `5000` in the backend container.

Create a `back/service.yaml` file with the following content.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mern-k8s-back
  labels:
    app: mern-k8s
    component: back
spec:
  selector:
    component: back
  ports:
    - port: 80
      targetPort: 5000
      protocol: TCP
      name: http
```

## Deploy the backend

Now that you have your deployment and service created, you can apply those files to your cluster. 

:::note
If you haven't started your Minikube instance yet, check out [the environment setup](/docs/environment-setup/minikube) page.
:::

Using `kubectl`, you can apply those two new files to your Kubernetes cluster.

```bash
kubectl apply -f ./back
```

You can take a look at what you now have running in your cluster by using the `kubectl get` command.

```bash
kubectl get all
```

In there, you should see your new backend service, along with a replicaset, and a deployment. You should also see two pods. At the moment, they are more likely in a ContainerCreating status. This is because Kubernetes needs to pull the images to its local registry. As soon as the images are ready, the pods will start.

## Test the backend

At the moment, you can't access the backend from the outside world. You will need an ingress to do so. However, you can look at the logs of your pods to make sure that everything is running smoothly.

Start by listing your pods.

```bash
kubectl get pods
```

Now look at the logs for one of those pods by using the name of a pod that was just listed.

```bash
kubectl logs mern-k8s-back-39a83-19cde
```
