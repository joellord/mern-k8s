---
sidebar_position: 5
---
# Configure the backend

Now that your project and cluster are created. You can access the various properties from your Atlas instance. You can now access the connection string, and even configure your backend service to use that connection string.

## Get the connection string

You can see the connection strings for your newly created cluster by using the following command.

```bash
kubectl get secret mern-k8s-cluster0-mernk8s -o json | jq -r '.data | with_entries(.value |= @base64d)'
```

## Update the backend deployment

Now that you can find your connection string from with Kubernetes, you can use that as part of your deployment to specify the connection string to your backend. 

In your `/back/deployment.yaml` file, change the `env` section of the containers template to the following.

```yaml
          env: 
            - name: PORT
              value: "5000"
            - name: "CONN_STR"
              valueFrom:
                secretKeyRef:
                  name: mern-k8s-cluster0-mernk8s
                  key: connectionStringStandardSrv
```

This will use the same connection string you've just seen in your terminal.

Apply those changes to your cluster.

```bash
kubectl apply -f ./back
```

If you look at your current pods:

```bash
kubectl get pods
``` 

You should see that your backend pods have been restarted. Opening the application in the browser again should now be using this newly created cluster.
