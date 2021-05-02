import React, { Component } from "react";
import "../../styles/register.scss"; //

export default class ForgotPass extends Component {
	render() {
		return (
			<div className="register">
				<form>
					<h3>Forgot Password</h3>

					<div className="form-group">
						<label>Email address</label>
						<input type="email" className="form-control" placeholder="Enter email" />
					</div>

					<div className="d-flex justify-content-between">
						<p className="cancel text-left">
							<a href="#">Cancel</a>
						</p>

						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}
