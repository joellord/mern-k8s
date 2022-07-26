---
sidebar_position: 4
---
# Create and manage an Atlas deployment

You are now ready to manage your Atlas projects and clusters from Kubernetes. This can be done with the three new CRDs that were added to your cluster. Those CRDs are `AtlasProject` to manage projects, `AtlasDeployment` to manage deployments, and `AtlasDatabaseUser` to manage database users.

## Create a project

Start by creating a new project in which the new cluster will be deployed. In a new file called `/atlas/project.yaml`, add the following.

```yaml
apiVersion: atlas.mongodb.com/v1
kind: AtlasProject
metadata:
  name: mern-k8s-project
spec:
  name: "MERN K8s"
  projectIpAccessList:
    - ipAddress: "0.0.0.0/0"
      comment: "Allowing access to database from everywhere (only for Demo!)"
```

:::caution
This project will be open to anyone on the web. It is best practice to only open it to known IP addresses.
:::

This will create a new project called "MERN K8s" in Atlas.

## Create a deployment

Now that you have a project setup, you can create a new deployment inside this project. In a new file called `/atlas/deployment.yaml`, add the following yaml.

```yaml
apiVersion: atlas.mongodb.com/v1
kind: AtlasDeployment
metadata:
  name: mern-k8s-cluster
spec:
  projectRef:
    name: mern-k8s-project
  deploymentSpec:
    name: Cluster0
    providerSettings:
      instanceSizeName: M10
      providerName: AWS
      regionName: US_EAST_1
```

This will create a new M10 deployment on AWS, in the US_EAST_1 region. You use a similar syntax to deploy in any region on AWS, GCP, or Azure.

:::info
For your development environments, you might want to use M0 (free) clusters. Because those are hosted on shared servers, the configuration is slightly different. For the provider settings, you can use the following for an M0 cluster.

```yaml
    providerSettings:
      instanceSizeName: M0
      providerName: TENANT
      regionName: US_EAST_1
      backingProviderName: AWS
```
:::

## Create a new database user

Finally, in order for your application to connect to this database, you will need a database user. To create this user, open a new file called `/atlas/user.yaml`, and add the following.

```yaml
apiVersion: atlas.mongodb.com/v1
kind: AtlasDatabaseUser
metadata:
  name: atlas-user
spec:
  roles:
    - roleName: "readWriteAnyDatabase"
      databaseName: "admin"
  projectRef:
    name: mern-k8s-project
  username: mernk8s
  passwordSecretRef:
    name: atlaspassword
```

You can see how the password uses the secret we created earlier.

## Apply the new files

You now have everything ready to create this new project and cluster. You can apply those new files to your cluster using.

```bash
kubectl apply -f ./atlas
```

This will take a couple of minutes. You can see the status of the cluster and project creation with kubectl.

```bash
kubectl get atlasprojects
kubectl get atlasdeployments
```

In the meantime, you can go to the Atlas UI. The project should already be created, and you should see that a cluster is in the process of being created.

## Get your connection string

Getting your connection string to that newly created database can now be done through Kubernetes. Once your server is created, you can use the following command that uses `jq` to view the connection strings.

```bash
kubectl get secret mern-k8s-cluster0-mernk8s -o json | jq -r '.data | with_entries(.value |= @base64d)'
```
