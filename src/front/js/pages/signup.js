import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Redirect, Link } from "react-router-dom";
import "../../styles/register.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user_name, setFirstName] = useState("");
	const [user_lastname, setLastName] = useState("");
	const [imagen, setImagen] = useState("");
	const [is_active, setIs_Active] = useState("");
	const [direction, setDirection] = useState("");
	const [gender, setGender] = useState("");
	const [user_id, setUser_id] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = [
			{
				email: email,
				user_id: user_id,
				user_name: user_name,
				user_lastname: user_lastname,
				birthday: "10/05/2000",
				imagen: "image",
				password: password,
				is_active: true,
				direction: direction,
				gender: gender
			}
		];

		fetch("https://3001-blush-partridge-hdw6t3wq.ws-us04.gitpod.io/api/user", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
				// "Access-Control-Allow-Origin": "https://3000-magenta-blackbird-yg8iuj4t.ws-us04.gitpod.io/*"
			}
		})
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				setAuth(true);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 register">
					<form onSubmit={handleSubmit}>
						<h3>Sign Up</h3>
						<div className="d-flex flex-wrap">
							<div className="form-group col-md-6">
								{/* Form Data */}
								<label htmlFor="exampleInputFirstName">First name</label>
								<input
									onChange={e => setFirstName(e.target.value)}
									type="text"
									className="form-control"
									id="exampleInputFirstName"
									placeholder="First name"
								/>
							</div>

							<div className="form-group col-md-6">
								<label htmlFor="exampleInputLastName">Last name</label>
								<input
									onChange={e => setLastName(e.target.value)}
									type="text"
									className="form-control"
									id="exampleInputLastName"
									placeholder="Last name"
								/>
							</div>

							<div className="form-group col-md-6">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input
									onChange={e => setEmail(e.target.value)}
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									placeholder="Enter email"
								/>
							</div>

							<div className="form-group col-md-6">
								<label htmlFor="exampleInputPassword1">Password</label>
								<input
									onChange={e => setPassword(e.target.value)}
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Enter password"
								/>
							</div>

							<div className="form-group col-md-12">
								<label htmlFor="exampleInputID">ID</label>
								<input
									onChange={e => setUser_id(e.target.value)}
									type="text"
									className="form-control"
									id="exampleInputID"
									placeholder="ID number"
								/>
							</div>

							<div className="form-group col-md-12">
								<label htmlFor="exampleInputDirection">Address</label>
								<input
									onChange={e => setDirection(e.target.value)}
									type="text"
									className="form-control"
									id="exampleInputDirection"
									placeholder="Enter address"
								/>
							</div>

							<div className="form-group col-md-4">
								<label htmlFor="exampleInputGender" className="radio inline">
									Gender:{" "}
								</label>
								<br />
								<input
									onChange={e => setGender(e.target.value)}
									type="radio"
									className="ml-1"
									id="exampleInputGender"
									name="gender"
									value="male"
									checked
								/>
								Male
								<label className="radio inline"> </label>
								<input
									onChange={e => setGender(e.target.value)}
									type="radio"
									className="ml-1"
									id="exampleInputGender"
									name="gender"
									value="female"
									checked
								/>
								Female
							</div>

							{/* Signup Button */}
							<button type="submit" className="btn btn-primary btn-block">
								Sign up
							</button>

							<div className="col-md-12 d-flex justify-content-between">
								<p className="cancel  text-left">
									<a href="/">Cancel</a>
								</p>

								<p className="forgot-password text-right">
									Already registered <a href="login">log in?</a>
								</p>
							</div>
						</div>
					</form>
					{auth ? <Redirect to="/" /> : null}
				</div>
			</div>
		</div>
	);
};
