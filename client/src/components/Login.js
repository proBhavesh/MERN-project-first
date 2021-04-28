import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import "../styles/signup.css";
const Login = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginUser = async (e) => {
		e.preventDefault();

		const res = await fetch("/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = res.json();

		if (res.status === 400 || !data) {
			window.alert("Invalid signin");
		} else {
			window.alert("Sucessful login");
			history.push("/");
		}
	};

	const myStyle = {
		width: "90vh",
		justifyContent: "center",
		margin: "2rem",
	};
	return (
		<div style={myStyle}>
			<form method="POST">
				<h3>Sign In</h3>

				<div className="form-group">
					<label>Email address</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<button
					type="submit"
					className="btn btn-primary btn-block mt-1"
					onClick={loginUser}
				>
					Submit
				</button>
				<p className="forgot-password text-right">
					Don't have a account yet{" "}
					<NavLink to="/signup">Register</NavLink>
				</p>
			</form>
		</div>
	);
};

export default Login;
