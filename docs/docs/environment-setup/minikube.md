---
sidebar_position: 1
---

# Set up Minikube

The instructions for this workshop should work for any Kubernetes cluster. However, for simplicity and consistency, Minikube will be used during this workshop.

## Installation

You should be using Minikube version `1.25`. More recent versions should be working, but were not tested.

You can install Minikube by running the following on *nix systems.

```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
install minikube-linux-amd64 /usr/local/bin/minikube
```

## Start the Minikube instance

You are now ready to start your Minikube instance. If you already used Minikube in the past, it is strongly recommended that you start with a new clean environment.

:::danger
Running the following command will remove any existing Minikube environment and any work you done previously will be gone forever.
:::

```bash
minikube delete
```

You are now ready to start Minikube. Run Minikube with `--host-dns-resolver=true` and `--dns-proxy=false` to ensure that the MongoDB server discovery will work. On MacOS, you might also need to use `--driver=none` as VirtualBox has some known issues.

```bash
minikube start --driver=none --kubernetes-version=v1.23.3 --host-dns-resolver=true --dns-proxy=false
```

## Enable the Ingress addon

As part of this workshop, you will need to install the `ingress` addon. This can be done with the following command.

```bash
minikube addons enable ingress
```
