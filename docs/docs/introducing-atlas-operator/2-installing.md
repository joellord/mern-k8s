---
sidebar_position: 2
---
# Installing the Atlas Operator

The first step is to install the Atlas Operator. All of the source code for the operator can be found on the [Github repository](https://github.com/mongodb/mongodb-atlas-kubernetes).

The installation process is as simple as running a `kubectl` command.

```bash
kubectl apply -f https://raw.githubusercontent.com/mongodb/mongodb-atlas-kubernetes/main/deploy/all-in-one.yaml
```

This will create new custom resources in your cluster that you can use to create or manage your existing Atlas projects and clusters.