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
	CardFooter
} from "reactstrap";
import ReactStars from "react-rating-stars-component";
import Calendar from "../component/Calendar";

export const CourseDetails = props => {
	const id = useParams();
	const { store, actions } = useContext(Context);
	const [searchItem, setSearch] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		actions.courses();
	}, []);
	return (
		<div className="container">
			<CardGroup>
				<div>
					<Card className="card">
						<CardImg src={store.courses[id.id].imagen} />
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

							<ReactStars count={5} value={store.courses[id.id].rating} size={24} activeColor="#ffd700" />
							<Link to="/courses">Volver</Link>
						</CardText>
					</CardBody>
				</Card>
			</CardGroup>
			<h1 className="text-center">Schedule</h1>
			<Calendar />
		</div>
	);
};

{
	/* {store.courses.map((courseDet, i) => {
				if (i == id) { */
}
{
	/* return ( */
}

{
	/* );
				}
            })} */
}

// <div className="card">
// 	<div className="card-body">
// 		<h5 className="card-title"> {store.courses[id.id].tutorships_name}</h5>
// 		<p className="card-text">
// 			<ul>

// 			</ul>
// 		</p>
// 		<Link to="/courses">Volver</Link>
// 	</div>
// </div>
