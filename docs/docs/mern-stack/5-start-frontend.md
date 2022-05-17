---
sidebar_position: 5
---
# Start the frontend

Now that you've got a database and a backend, it's time to start the frontend to interact with those other components in a much friendlier way.

## Install dependencies
From a new terminal window, go to your `front` folder. You might need to navigate to the root folder that you cloned earlier first.

```bash
cd front
```

From this folder, use `npm` to install the required dependencies.

```bash
npm install
```

## Edit configuration
Front-end servers can't use environment variables because they run on a user's browser. However, there are times when you want to use different values for different environment. We will see how to do this later, when we write the docker files. 

In the meantime, you should put all of your variables that might change in a separate file. In this application, there is only one environment variable, which is used for the `BASE_URL` where the API can be found. 

This configuration is found in `/src/config.json`. Make sure that this file contains the following value.

```js
{
  "BASE_URL": "http://localhost:5000"
}
```

This will tell our frontend that the API is running locally. Once the application is deployed, this will need to change to the production URL.

## Run the application
You are now ready to start the application. This can be done with `npm`.

```bash
npm start
```

This command will start the development environment for this React application.

:::note
Once you deploy this application to an actual server, you will only want to serve the final HTML, CSS, and JavaScript files. This hot-reload server is only meant to be used in production. You can generate the final files using.

```bash
npm run build
```
:::

## Test it out
Open a browser window to <a href="http://localhost:3000" target="_blank" rel="nofollow noopener noreferrer">http://localhost:3000</a>. You can use the form there to write a new comment on your guest book. Any entry in the guest book will be listed right there. 

![Final application](/img/application/final.gif#center)
_<div align="center">The final application, Geocities theme included</div>_