---
sidebar_position: 3
---
# Create the necessary secrets

In order for the operator to be able to manage your cluster, you will need to provide it with an API key with the appropriate permissions. 

## Get your organization id

In the upper left part of the Atlas UI, you will see your organization name in a dropdown. Right next to the dropdown is a gear icon. Clicking on this icon will open up a page called _Organization Settings_.

From this page, look for a box labeled _Organization ID_.

Save that organization id somewhere for future use. You can also save it in an environment variable.

```bash
export ORG_ID=60c102....bd
```

## Create an API key

From the same screen, look for the _Access Manager_ option in the left navigation menu. This will bring you to the _Organization Access_ screen. In this screen, follow the [instructions](https://www.mongodb.com/docs/atlas/configure-api-access/#std-label-create-org-api-key) to create a new API key.

The key will need the **Organization Project Creator** role in order to create new projects and clusters. If you want to manage existing clusters, you will need to provide it with the **Project Owner** role.

Save the API private and public keys. You can also add them to the environment.

```bash
export ATLAS_PUBLIC_KEY=iwpd...i
export ATLAS_PRIVATE_KEY=e13debfb-4f35-4...cb
```

## Create the Kubernetes secrets

Now that you have create the API key, you can specify those values to the MongoDB Atlas Operator. This will give the operator the necessary permissions to create and manage projects and clusters.

You can create the secret with `kubectl`.

```bash
kubectl create secret generic mongodb-atlas-operator-api-key \
    --from-literal="orgId=$ORG_ID" \
    --from-literal="publicApiKey=$ATLAS_PUBLIC_KEY" \
    --from-literal="privateApiKey=$ATLAS_PRIVATE_KEY" \
    -n mongodb-atlas-system
```

You then need to label this secret so the operator knows how to find it.

```bash
kubectl label secret mongodb-atlas-operator-api-key atlas.mongodb.com/type=credentials -n mongodb-atlas-system
```

## Create a user password

Our database user will have a password. You won't want to hard code this password into your yaml files. It is safer to save it as a Kubernetes secret. Just like the API key, this secret will need to be labeled too.

```bash
kubectl create secret generic atlaspassword --from-literal="password=mernk8s"
kubectl label secret atlaspassword atlas.mongodb.com/type=credentials
```

