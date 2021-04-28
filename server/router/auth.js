const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/connect");

//home page
router.get("/", (req, res) => {
	res.send("Home page");
});

//post requests

// using async await

//user registeration
router.post("/register", async (req, res) => {
	const { name, email, phone, work, password, cpassword } = req.body;
	if (!name || !email || !phone || !work || !password || !cpassword) {
		return res.status(422).json({ error: "Some fields are empty" });
	}

	try {
		const userExist = await User.findOne({ email: email });

		if (userExist) {
			return res.status(422).json({ error: "Email Exists" });
		} else if (password != cpassword) {
			return res.status(422).json({ error: "passwords don't match" });
		} else {
			const user = new User({
				name,
				email,
				phone,
				work,
				password,
				cpassword,
			});

			await user.save();
			res.status(201).json({
				message: "user registered successfully",
			});
		}
	} catch (err) {
		console.log(err);
	}
});

// login router

router.post("/signin", async (req, res) => {
	// main try block
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ error: "Fill all the fields" });
		}

		const userLogin = await User.findOne({ email: email });
		//if else start
		if (userLogin) {
			//compare usign bcryptjs
			const isMatch = await bcrypt.compare(password, userLogin.password);
			//jwt
			const token = await userLogin.generateAuthToken();
			console.log(token);

			//cookies settig
			res.cookie("jwtoken", token, {
				expires: new Date(Date.now() + 25892000000),
				httpOnly: true,
			});

			if (!isMatch) {
				res.status(400).json({ error: "invalid credentials" });
			} else {
				res.json({ message: "user signed in successfully" });
			}
		} else {
			res.status(400).json({ error: "invalid credentials" });
		}
		//else if end
	} catch (err) {
		console.log(err);
	}
	// console.log(userLogin);
});

router.get("/about",authenticate, (req, res) => {
	// console.log(req.cookies.jwtoken);
	console.log("This is about");
	res.send(req.rootUser);
});

module.exports = router;
