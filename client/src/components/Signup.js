import React, { useState } from "react";
// import "../styles/signup.css";
import { NavLink, useHistory } from "react-router-dom";

const Signup = () => {
	const history = useHistory();

	const myStyle = {
		width: "90vh",
		justifyContent: "center",
		margin: "2rem",
	};

	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
		cpassword: "",
		work: "",
	});

	let name, value;
	const handleInputs = (e) => {
		console.log(e);
		name = e.target.name;
		value = e.target.value;

		console.log(name, value);
		setUser({ ...user, [name]: value });
	};

	const PostData = async (e) => {
		e.preventDefault();
		const { name, email, phone, work, password, cpassword } = user;
		const res = await fetch("/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				phone,
				work,
				password,
				cpassword,
			}),
		});

		const data = await res.json();

		if (data.status === 422 || !data) {
			window.alert("Invalid registeration");
			console.log("Invalid registeration");
		} else {
			window.alert("registeration successful");
			console.log("registeration successful");

			history.push("/login");
		}
	};

	return (
		<div style={myStyle}>
			<form method="POST">
				<h3>Sign Up</h3>

				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="First name"
						name="name"
						id="name"
						value={user.name}
						onChange={handleInputs}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
						name="email"
						id="email"
						value={user.email}
						onChange={handleInputs}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="phone">Phone Number</label>
					<input
						type="phone"
						className="form-control"
						placeholder="Enter email"
						name="phone"
						id="phone"
						value={user.phone}
						onChange={handleInputs}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="work">Work</label>
					<input
						type="work"
						className="form-control"
						placeholder="Enter your job"
						name="work"
						id="work"
						value={user.work}
						onChange={handleInputs}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter password"
						name="password"
						id="password"
						value={user.password}
						onChange={handleInputs}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="cpassword">Confirm Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Confirm password"
						name="cpassword"
						id="cpassword"
						value={user.cpassword}
						onChange={handleInputs}
					/>
				</div>

				<button
					type="submit"
					className="btn btn-primary btn-block mt-1"
					name="signup"
					value="register"
					onClick={PostData}
				>
					Sign Up
				</button>
				<p className="forgot-password text-right">
					Already registered <NavLink to="/login">sign in?</NavLink>
				</p>
			</form>
		</div>
	);
};

export default Signup;
