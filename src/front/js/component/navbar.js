import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import "/workspace/Proyecto_Final_Grupo_11/src/front/img/simple-2.png";

export const Navbar = props => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<div
			className="justify-content-between align-items-center border border-bottom text-light shadow-sm p-3 mb-5 bg-body rounded"
			id="navbar">
			<div className="row">
				<div className="col-md-12">
					<Link to="/">
						<div className="text-center my-4 text-light">
							<h1>
								<img id="PalmTree" src="simple-2.png" /> Pura Vida Academy
								<img id="PalmTree" src="simple-2.png" />
							</h1>
						</div>
					</Link>
				</div>
			</div>
			<div className="container text-center my-3">
				<div className="row">
					<div className="col-md-3">
						<Link to="/">
							<h4 className="text-light">Home</h4>
						</Link>
					</div>
					<div className="col-md-3">
						<Link to="/courses">
							<h4 className="text-light">Courses</h4>
						</Link>
					</div>
					<div className="col-md-3">
						<Link to="/Information">
							<h4 className="text-light">Contact</h4>
						</Link>
					</div>
					<div className="col-md-3">
						<Dropdown isOpen={dropdownOpen} toggle={toggle}>
							<DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
								<h4>
									Profile <i className="fas fa-angle-down" />
								</h4>
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem header>Actions</DropdownItem>
								<Link to="/login">
									<DropdownItem>Log in</DropdownItem>
								</Link>
								<Link to="/signup">
									<DropdownItem>Sign up</DropdownItem>
								</Link>
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
			</div>
		</div>
	);
};
