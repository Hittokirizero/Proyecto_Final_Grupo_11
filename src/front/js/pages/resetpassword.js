import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/register.scss";

export const Resetpassword = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3 register">
					<form>
						<h3>Reset Password</h3>

						<div className="form-group">
							<label htmlFor="exampleInputPassword1">New Password</label>
							<input
								onChange={e => setPassword(e.target.value)}
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Enter new password"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="exampleInputPassword2">Confirm Password</label>
							<input
								onChange={e => setPassword(e.target.value)}
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Confirm new password"
							/>
						</div>

						<button type="submit" className="btn btn-primary btn-block">
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
