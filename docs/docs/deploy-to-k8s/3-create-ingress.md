---
sidebar_position: 3
---
# Create an ingress

You now have two pods running your backend service, but they aren't accessible from the outside of the cluster. In order for the frontend to connect to it, they will need to be exposed. This is where the ingress will come into play.

## Create the ingress definition

Ingresses use a set of rules to redirect traffic to specifc services. For this simple ingress, you will redirect all incoming traffic to the backend service. This will let you test the backend.

Create a new file called `ingress.yaml`.

Just like any other Kubernetes object, you will start with the `apiVersion`, `kind`, `metadata`, and `spec`.

In the spec, you will list a single rule to redirect the traffic to the `mern-k8s-back` service.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: mern-k8s-ingress
spec:
  rules:
    - http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: mern-k8s-back
                port:
                  number: 80
```

## Apply the ingress

You can apply this ingress to your cluster using `kubectl`.

```bash
kubectl apply -f ./ingress.yaml
```

## Test the backend

Now that the backend service is exposed, you can test it out. To do so, you will need the IP address or domain name for your Kubernetes cluster. If you are running a Minikube instance, this address can be found using the `minikube ip` command. 

Test out the API by using a curl command.

```bash
curl $(minikube ip)/healthz
```

This should output the status of the server.