import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
const About = () => {

	const history = useHistory();
	
	const callAboutPage = async () => {
	
		try {
			const res = await fetch("/about", {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				credentials: "include",
			});

			const data = await res.json();
			console.log(data);

			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}
		} catch (err) {
			console.log(err);
			history.push("/login");
		}
	};

	useEffect(() => {
		callAboutPage();
	}, []);
	return <div className="fs-1 align-text-bottom m-5">About</div>;
};

export default About;
