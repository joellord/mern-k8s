---
sidebar_position: 2
---
# Create a MongoDB Atlas cluster

Once you are logged into your account, follow the steps from the [documentation](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/) to create your free cluster. Once your cluster is up and running, you will be able to create your `entites` collection needed for your backend.

## Set up access
As part of the cluster creation process, you will be prompted to create a user. Use the username `mern-k8s` and password `mern-k8s`. You can use different values, but these are the values that will be used in the following examples.

Once the user is created, make sure that you go to the _Network Access_ item in the left navigation menu, and enable access from your current IP address. If you want to use a different Kubernetes cluster later on, you will need to add the address too. 

:::caution
To make it easier during this workshop, you can enable network access to `0.0.0.0/0`. This will accept any incoming connection. You should never use this in production though.
:::

## Create a collection
From the Atlas UI, you will see a _Browse Collections_ button. Click it to see your existing collections.

![Browse Collections](/img/atlas/browsecollections.png#center)
_<div align="center">The Atlas UI with the Browse Collections button</div>_

At the moment, there shouldn't be any data in your cluster. If you'd like to explore what Atlas has to offer, you could add the sample data sets. For now, let's add our own data. Clicking on the _Add My Own Data_ button will open up a modal prompting your for a database and collection names. 

![Create Database Modal](/img/atlas/createdb.png#center)
_<div align="center">The Create Database modal</div>_

Use the name `mern-k8s` for the database, and use `entities` for your collection name.

# Get your connection string
Go back to the _Database_ item from the left navigation menu. You should see your cluster again. This click, click on the _Connect_ button. 

From the next modal, choose _Connect using MongoDB Compass_. This will show you the connection string to your cluster.

:::tip
While we won't be using MongoDB Compass in the context of this workshop, you still can [look it up](https://www.mongodb.com/products/compass), it's a great UI for everything MongoDB related.
:::

![Connection String](/img/atlas/connstring.png#center)
_<div align="center">The Connection String for Atlas</div>_

Copy this connection string, and save it somewhere handy as you'll need it soon. Make sure to replace **password** with your actual password.

:::tip
You can set this connection string as an environment variable so it will automatically be used in the following steps.

```bash
export ATLAS_CONNECTION_STRING=mongodb+srv://mernk8s:mernk8s@cluster0.wc3ix.mongodb.net/test
```

Make sure you replace the cluster id (`wc3ix`) with your own!
:::
