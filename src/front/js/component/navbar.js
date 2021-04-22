import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="justify-content-between align-items-center border border-bottom bg-light">
			<Link to="/">
				<div className="text-center my-3">
					<h1>Pura Vida Academy</h1>
				</div>
			</Link>

			<div className="text-center">
				<h4>The best place to learn</h4>
			</div>
			<div className="container text-center my-3">
				<div className="row">
					<div className="col-3">
						<Link to="/">
							<h5 className="text-dark">Home</h5>
						</Link>
					</div>
					<div className="col-3">
						<Link to="/demo">
							<h5 className="text-dark">Courses</h5>
						</Link>
					</div>
					<div className="col-3">
						<Link to="/">
							<h5 className="text-dark">Profile</h5>
						</Link>
					</div>
					<div className="col-3">
						<Link to="/demo">
							<h5 className="text-dark">Information</h5>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
