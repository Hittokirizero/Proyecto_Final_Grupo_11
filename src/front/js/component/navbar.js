import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";

export const Navbar = props => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<div className="justify-content-between align-items-center border border-bottom bg-light">
			<Link to="/">
				<div className="text-center my-4">
					<h1>Pura Vida Academy</h1>
				</div>
			</Link>
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
							<h5 className="text-dark">Information</h5>
						</Link>
					</div>
					<div className="col-3">
						<Dropdown isOpen={dropdownOpen} toggle={toggle}>
							<DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
								<h5>
									Profile <i className="fas fa-angle-down" />
								</h5>
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem header>Actions</DropdownItem>
								<Link to="/demo">
									<DropdownItem>My Profile</DropdownItem>
								</Link>
								<DropdownItem divider />
								<DropdownItem>Log Out</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
			</div>
		</div>
	);
};
