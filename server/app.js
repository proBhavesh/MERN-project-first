const dotenv = require("dotenv");
const express = require("express");
const cookies = require("cookie-parser");
const app = express();

//making passwords secure using .env

dotenv.config({ path: "./.env" });

//connect to db

require("./db/connect.js");

//parsing json

app.use(cookies());

app.use(express.json());

//importig outsourced routes

app.use(require("./router/auth"));

//importing models

const User = require("./model/userSchema");

//specifying port

PORT = process.env.PORT;

//server listening on port 3000
app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
