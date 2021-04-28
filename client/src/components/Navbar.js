import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
import { NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<NavLink className="navbar-brand" to="#">
						MERN
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink
									className="nav-link active"
									aria-current="page"
									to="/"
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									aria-current="page"
									to="/contact"
								>
									Contact
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									aria-current="page"
									to="/about"
								>
									About Us
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									aria-current="page"
									to="/login"
								>
									Login
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link "
									aria-current="page"
									to="/signup"
								>
									Signup
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
