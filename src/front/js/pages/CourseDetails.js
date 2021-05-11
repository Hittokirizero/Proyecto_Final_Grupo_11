import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router-dom";
import {
	Card,
	CardImg,
	CardTitle,
	CardText,
	CardGroup,
	CardSubtitle,
	CardBody,
	Progress,
	CardFooter,
	Button
} from "reactstrap";
import ReactStars from "react-rating-stars-component";
import Calendar from "../component/Calendar";
import App from "/workspace/Proyecto_Final_Grupo_11/src/front/js/App.js";

export const CourseDetails = props => {
	const id = useParams();
	const { store, actions } = useContext(Context);
	const [searchItem, setSearch] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		actions.courses();
	}, []);
	return (
		<div className="container shadow-lg p-3 mb-5 bg-body rounded">
			<Link to="/courses">
				<i className="fas fa-arrow-left fa-2x text-dark" />
			</Link>
			<CardGroup>
				<div>
					<Card className="card">
						<CardImg className="pe-3" src={store.courses[id.id].imagen} />
						<ReactStars count={5} value={store.courses[id.id].rating} size={24} activeColor="#ffd700" />
					</Card>
				</div>
				<Card>
					<CardBody className="bg-light text-dark ">
						<CardTitle className="text-center" tag="h1">
							{store.courses[id.id].category}
						</CardTitle>
						<CardSubtitle tag="h5" className="mb-2 text-muted text-start">
							Tutor: {store.courses[id.id].tutorships_name}
						</CardSubtitle>
						<CardText>
							<h4>Specific Information:</h4>
							<p>{store.courses[id.id].info_specifies}</p>

							<h4>Specialty:</h4>
							<p>{store.courses[id.id].specialty}</p>

							<h4>Price:</h4>
							<p>${store.courses[id.id].cost}</p>

							<App />
						</CardText>
					</CardBody>
				</Card>
			</CardGroup>

			<h1 className="text-center">Schedule</h1>
			<Calendar />
		</div>
	);
};
