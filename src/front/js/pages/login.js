import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../../styles/register.scss";

export const Login = () => {
	return (
		<div className="register">
			<form>
				<h3>Log In</h3>

				<div className="form-group">
					<label>Email address</label>
					<input type="email" className="form-control" placeholder="Enter email" />
				</div>

				<div className="form-group">
					<label>Password</label>
					<input type="password" className="form-control" placeholder="Enter password" />
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
		</div>
	);
};
