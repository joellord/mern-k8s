---
sidebar_position: 1
---

# What is the MERN Stack

The MERN stack is a technology stack commonly used to build JavaScript application. It uses a **M**ongoDB database, the **E**xpress framework for the back-end, the **R**eact framework on the front-end, and the server is powered by the **N**ode.js runtime.

## Three-tier applications

Modern day applications often make use of three-tier application architecture. A front-end runs on the clients browser and connects to an API that handles most of the business logic. The back-end is responsible for managing the connection to the database. 

![A three-tier application architecture](/img/architecture/3-tier-application.jpg#center)
_<div align="center">A three-tier application architecture</div>_

## MERN Stack explained

In the MERN stack, the three-tier architecture is used to build applications using JavaScript from end-to-end.

### Front-End

In this technology stack, React is the front-end framework that is used. Should you want to use Angular instead of React, you should look into the MEAN stack instead.

React is often used to build powerful front-end applications that will live in the client browser. It uses the `JSX` syntax to build reusable components that can be used across the application.

### Back-end

In this application, the back-end will use an Express server that runs on Node.js. Express is a popular back-end framework that makes it easy to declare API endpoints.

### Database

In order to persist data, a database will neeed to be used. For this specific application, MongoDB will be used to store data. In order to explore the application locally, it will run in a container, but we will use MongoDB Atlas for the more advanced use cases. 
