---
sidebar_position: 1
---
# What are containers?

Containers have existed since the 1970's in Unix-based operating systems. They were popularized by [Docker](https://docker.com) when they released the Docker runtime in 2013. Since then, more and more developers have been using containers as part of their development process, as well as to deploy applications in a reliable way.

Put simply, this is what Docker says about containers.

> A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.

_<a href="https://www.docker.com/resources/what-container/
" target="_blank" rel="nofollower noopener noreferrer">Docker documentation</a>_

If you want to learn more about the basics of containers, I recommend this presentation titled _Containerization for Software Developers_.

<div align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/gpl1UYv_3HI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Containerizing this application

This specific application will use three containers to hold the different components of this application. 

![Application containers architecture](/img/application/containers.png#center)
_<div align="center">Our containerized application architecture</div>_

### Database
The current database is already running inside a container, so no changes are required here.

### Backend
The backend will be packaged up as a container with the Node.js runtimes, as well as the source code, and all the dependencies required for our application. It will use environment variables to specify the port on which it should run as well as the connection string to the database.

### Frontend
The frontend will run as an Nginx server that will contain the built version of the application. This will require a more complex docker build pipeline with multiple stages.

## Custom commands
In order to ensure that you can copy and paste the commands in this section directly in your terminal, you will need to set some environment variables first. You can skip this step, but you will need to replace `$VARIABLE_NAME` by the actual value when you paste the code snippets.

```bash
export DOCKER_HUB_USERNAME=YourDockerHubUsername
```

:::info
If you don't want to create your own images, you can use prebuilt images. For this, you can use my docker username.

```bash
export DOCKER_HUB_USERNAME=joellord
```

Note that you won't be able to push images though, only read from the registry.
:::