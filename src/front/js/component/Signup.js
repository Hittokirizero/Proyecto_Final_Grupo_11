import React, { Component } from "react";
import "../../styles/register.scss"; //

export default class SignUp extends Component {
	render() {
		return (
			<div className="register">
				<form>
					<h3>Sign Up</h3>

					<div className="form-group">
						<label>First name</label>
						<input type="text" className="form-control" placeholder="First name" />
					</div>

					<div className="form-group">
						<label>Last name</label>
						<input type="text" className="form-control" placeholder="Last name" />
					</div>

					<div className="form-group">
						<label>Email address</label>
						<input type="email" className="form-control" placeholder="Enter email" />
					</div>

					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" placeholder="Enter password" />
					</div>

					<button type="submit" className="btn btn-primary btn-block">
						Sign Up
					</button>

					<div className="d-flex justify-content-between">
						<p className="cancel text-left">
							<a href="#">Cancel</a>
						</p>

						<p className="forgot-password text-right">
							Already registered <a href="#">log in?</a>
						</p>
					</div>
				</form>
			</div>
		);
	}
}
