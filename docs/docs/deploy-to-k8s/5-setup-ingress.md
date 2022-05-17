---
sidebar_position: 5
---
# Set up the ingress for multiple services

At the moment, the ingress is only configured to access the backend. The ingress can support multiple rules to redirect the traffic. In this example, we will use rules based on the request path to redirect the traffic to either the frontend or the backend.

## Update your ingress

Change the new ingress to add some `annotation` as well as a new rule for the frontend service. Use the following `yaml` for your `ingress.yaml` file.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: mern-k8s-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /$2
spec:
  rules:
    - http:
        paths:
          - path: /api(/|$)(.*)
            pathType: Prefix
            backend:
              service:
                name: mern-k8s-back
                port:
                  number: 80
          - path: /()(.*)
            pathType: Prefix
            backend:
              service:
                name: mern-k8s-front
                port:
                  number: 80
```

:::note
The `annotation` will take the second argument from the regular expression used in the path, and use that as the request sent to the service. 

In other words, a request to `/api/healthz` to the ingress will the rewritten as `/healthz` when it is sent to the backend service.

This is why the path matching expression for the frontend has an empty set of parenthesis.
:::

## Apply this new ingress

Apply this new ingress to your cluster with `kubectl`.

```bash
kubectl apply -f ./ingress.yaml
```

You should see a confirmation that the ingress has been changed.

## Test the application

You should now be able to test the application. Using the `minikube` command to get the IP address of your local Minikube cluster, and point your browser to this IP address.

```bash
minikube ip
```

You will see the application fully running, and with the data from the Atlas cluster still.
