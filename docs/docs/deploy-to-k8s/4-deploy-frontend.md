---
sidebar_position: 4
---
# Deploy the frontend

The process to deploy the frontend is very similar to the backend. The two setups being almost identical.

## Create your deployemnt

The deployment definition for the frontend is almost the same as the backend one. The main differences being in the names, labels, and image name.

Create a `/front/deployment.yaml` file, and add the following to it.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mern-k8s-front
  labels:
    app: mern-k8s
    component: front
spec:
  replicas: 2
  selector: 
    matchLabels:
      component: front
  template:
    metadata: 
      labels:
        app: mern-k8s
        component: front
    spec:
      containers:
        - name: mern-k8s-front
          image: $DOCKER_HUB_USERNAME/mern-k8s-front
          ports: 
            - containerPort: 80
          env: 
            - name: BASE_URL
              value: "/api"
```

:::info
Don't forget to change `$DOCKER_HUB_USERNAME` for your actual value, or use the following script to do it for you in bash.

```bash
envsubst < front/deployment.yaml | tee front/deployment.yaml
```
:::

:::note
Note the `BASE_URL` environment variable value here. In this case, we will use `/api` as the base URL. This address will be definted in the ingress in a future step.
:::

## Create the service

Just like the backend, the frontend will need a service. In a file called `/front/service.yaml`, add the following.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mern-k8s-front
  labels:
    app: mern-k8s
    component: front
spec:
  selector:
    component: front
  ports:
    - port: 80
      targetPort: 80
      protocol: TCP
      name: http
```

This service follows the same structure as the backend service.

## Apply the deployment and service

You are now ready to apply those two new files to your cluster.

```bash
kubectl apply -f ./front
```

Now, take a look at everything you have in your cluster.

```bash
kubectl get all
```

You should now see the two services, the newly added deployment and replicaset, and a total of four pods.
