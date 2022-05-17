---
sidebar_position: 4
---
# Start the backend
The first step to run everything locally is to start the back-end server.

## Install dependencies
Start by `cd`'ing into the backend folder, and use `npm` to install all the required dependencies.

```bash
cd back
npm install
```

## Edit configuration
The application uses the `dotenv` npm package to read environment variables from a file called `.env`. This has the benefit of easily being able to change environment variables.

In order for your application to run, you will need to specify the port on which it should run as well as the connection string to the database.

Create the `.env` file.

```bash
touch .env
```

And, with your favourite file editor, add the following to that file.

```
PORT=5000
CONN_STR=mongodb://user:pass@localhost:27017/myFirstDatabase?authSource=admin
```

## Run the application
Now that all the dependencies are installed, and that your server is configured, you are ready to start the server.

```bash
node .
```

:::tip
If you want to run this server in development mode, it is easier to use `nodemon .` instead. This will enable hot reloads on your server.

[Nodemon](https://nodemon.io/)
:::

The server will start on port 5000, and you should see a message 

## Test the server
From another terminal window, try to curl the `/healthz` route of your server.

```bash
curl localhost:5000/healthz
```

You should see a JSON message indicating that the server is running, and that the database is connected.

```js
{ "status": "Ok", "dbConnected": true } 
```

Your server is now up and running, and is ready to read and write to the database.