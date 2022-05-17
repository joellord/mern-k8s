---
sidebar_position: 2
---
# Explore the application

For the purpose of this workshop, the most simplest possible application is used to demonstrate the MERN stack. The easiest use case would be a back-end with a route to write a new database entry, and another route to retrieve all entries. 

Let's not worry about authentication, security, optimization, or anything else for the purpose of this application.

This barebone set of requirements reminded me of my introduction to the web and of my first website which had a guestbook.

![Sign My Guestbook animated image](/img/application/signguestbook.gif#center)
_<div align="center">Please sign my guestbook</div>_

This also gave me the benefit of not having to worry too much about design.

## Clone the repository

The first step to run the application locally is to clone the repository.

```bash
git clone https://github.com/joellord/mern-k8s.git
```

Now `cd` into this new folder and open your favourite code editor to look at the structure of this application.

```bash
cd mern-k8s
ls
```

```
 |
 |- back
 |- dockerfiles
 |- docs
 |- front
 |- k8s
  - instructions.md
```

### Understanding the file structure

The repository contains everything you need to run this workshop. Let's look at each folder quickly.

#### back
Contains the required files for the back-end. Most of the code is located in the `index.js` file.

#### dockerfiles
When comes the time to build containers for each of the tiers, you will need to create a `Dockerfile` for each application. The necessary templates can be found here.

#### docs
All of the documentation you are reading right now can be found in this folder.

#### front
This is the front-end code. It was created with the `create-react-app` application, and the code is very close to the original boilerplate.

#### k8s 
All the `yaml` files required to deploy your application to Kubernetes can be found in this folder.

#### instructions.md
As the name suggests, all the instructions for the workshop can be found here. It's a summary of this whole documentation.

## Application architecture
As mentioned earlier, the application will use a three tier application architecture. It will have the following components

![Application Architecture](/img/application/architecture.png#center)
_<div align="center">Our application architecture</div>_

* **Database**: The database will contain a single collection called `entries` in the `mern-k8s` database.
* **Backend**: The backend will have two routes. Once to write a new entry (POST `/entry`), and one to read all the entries (GET `/entries`).
* **Frontend**: The frontend will have a single route `/` that will have a form to add a new entry, as well as a list with the current entries from the database.