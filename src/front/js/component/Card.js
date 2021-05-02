import React, { useEffect, useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { Context } from "../store/appContext";
import {
	Card,
	Button,
	CardImg,
	CardTitle,
	CardText,
	CardGroup,
	CardSubtitle,
	CardBody,
	Progress,
	CardFooter
} from "reactstrap";
import "../../styles/card.scss";

const Example = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.courses();
	}, []);

	const category = store.courses.map((item, index) => {
		return (
			<div className="container-sm shadow-lg p-3 mb-5 bg-body rounded" key={index}>
				<CardGroup>
					<div>
						<Card className="card">
							<CardImg src={item.imagen} />
						</Card>
					</div>
					<Card>
						<CardBody className="bg-light text-dark ">
							<CardTitle className="text-center" tag="h1">
								{item.category}
							</CardTitle>
							<CardSubtitle tag="h5" className="mb-2 text-muted text-start">
								Tutor: {item.tutorships_name}
							</CardSubtitle>
							<CardText>
								<h4>General Information:</h4>
								<p>{item.info_detail}</p>
								<h4>Specific Information:</h4>
								<p>{item.info_specifies}</p>
								<ReactStars count={5} value={item.rating} size={24} activeColor="#ffd700" />
							</CardText>
						</CardBody>
					</Card>
				</CardGroup>
			</div>
		);
	});

	return (
		<div>
			<div className="align-items-center text-center">
				<p>{category}</p>
			</div>
		</div>
	);
};

export default Example;
