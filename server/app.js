const dotenv = require("dotenv");

const express = require("express");
const app = express();

//making passwords secure using .env

dotenv.config({ path: "./.env" });

//connect to db

require("./db/connect.js");

//importing models

const User = require("./model/userSchema");

//specifying port

PORT = process.env.PORT;

//server listening on port 3000
app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});

//home page
app.get("/", (req, res) => {
	res.send("Home page");
});

//about page
app.get("/about", (req, res) => {
	res.send("about page");
});

//contact page
app.get("/contact", (req, res) => {
	res.send("contact page");
});

// login page
app.get("/signin", (req, res) => {
	res.send("login page");
});

//register page
app.get("/signup", (req, res) => {
	res.send("register page");
});
