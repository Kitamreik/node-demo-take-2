//The manager of the store says explicit packages must be in the store server.
/*
the following dependencies that will be needed for the project: npm install express dotenv
Then install all the dependencies needed only for development: npm install nodemon --save-dev
*/

//Establishing our Node/Express Server Environment

//require the express package
const express = require('express');

//tell the app to use the express framework
const app = express();

//define the port at the magic number 4100
const PORT = 4100; 

//Send requests to the browser

//Please create an instance of Index initialization with a message of "Welcome to the cafe's home page!" and a path of "/". Send the message in the response as a string.
app.get("/", (request, response, next) => {
    response.send("Welcome to the cafe's home page!");
});

//Adding more routes...
//Please create an instance of a route with a message of "Welcome to the cafe's menu!" and a path of "/menu". Send the message in the response as a string.
app.get("/menu", (request, response, next) => {
    response.send("Welcome to the cafe's menu!");
});
//Please create an instance of a route with a message of "Welcome to the cafe's cat wall of fame!" and a path of "/katz". Send the message in the response as a string.
app.get("/katz", (request, response, next) => {
    response.send("Welcome to the cafe's cat wall of fame!");
});
//Please create an instance of a route with a message of "Hello, this page is for admins only!" and a path of "/admin". Send the message in the response as a string.
app.get("/admin", (request, response, next) => {
    response.send("Hello, this page is for admins only!");
});


// Set up the server
//Please have the server message say "Welcome to the Cool CodeSquader Cafe! Now loading server...on [the magic port number]"
//Use the localhost address to have the developers hop straight into the browser at the right address on [the magic port number]
app.listen(PORT, () => {
    console.log(`Welcome to the Cool CodeSquader Cafe! Now loading server...on ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

//To boot up the server: node app.js
//If that fails: npx nodemon app.js 

//Your manager says to "log off" the server by using CTRL + C or CMD + C. Ensure it is off. Apparently there have reports of mice hackers trying to get in the secret yarn database we have....Did you turn it off? 