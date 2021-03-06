import React, { useState } from "react";
import "../../styles/register.scss";
import { Redirect, Link } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		fetch("https://3001-lime-gazelle-mr2waror.ws-us04.gitpod.io/api/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => {
				res.status === 200
					? setTimeout(() => {
							setAuth(true);
					  }, 1000)
					: null;
				return res.json();
			})
			.then(data => {
				console.log(data);
				sessionStorage.setItem("my_token", data.token);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3 register">
					<form onSubmit={handleSubmit}>
						<h3>Log In</h3>

						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input
								onChange={e => setEmail(e.target.value)}
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								placeholder="Enter email"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input
								onChange={e => setPassword(e.target.value)}
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Enter password"
							/>
						</div>

						<div className="form-group">
							<div className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="customCheck1" />
								<label className="custom-control-label" htmlFor="customCheck1">
									Remember me
								</label>
							</div>
						</div>

						<button type="submit" className="btn btn-primary btn-block">
							Submit
						</button>

						<div className="d-flex justify-content-between">
							<p className="cancel text-left">
								<a href="/">Cancel</a>
							</p>

							<p className="forgot-password text-right">
								Forgot <a href="forgotpassword">password?</a>
							</p>
						</div>
					</form>
					{auth ? <Redirect to="/" /> : null}
				</div>
			</div>
		</div>
	);
};
