import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="justify-content-between align-items-center border border-bottom bg-light">
			<Link to="/">
				<div className="text-center">
					<h1>Pura Vida Academy</h1>
				</div>
			</Link>

			<div className="text-center">
				<h4>The best place to learn</h4>
			</div>
			<div className="container text-center">
				<div className="row">
					<div className="col-3">
						<Link to="/">
							<h3 className="text-dark">Home</h3>
						</Link>
					</div>
					<div className="col-3">
						<Link to="/demo">
							<h3 className="text-dark">Courses</h3>
						</Link>
					</div>
					<div className="col-3">
						<Link to="/">
							<h3 className="text-dark">Profile</h3>
						</Link>
					</div>
					<div className="col-3">
						<Link to="/demo">
							<h3 className="text-dark">Information</h3>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
