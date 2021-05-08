import React, { useState, useContext, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
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
import "../../styles/card.scss";
import Button from "../component/button";

const Example = props => {
	const id = props.id;
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.courses();
	}, []);

	const category = store.courses.map((item, index) => {
		let id = index;
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
								<p>{item.location}</p>
								<h4>Location:</h4>
								<i className="fas fa-map-marker-alt fa-lg"> {item.info_detail}</i>

								<div className="container ">
									<div className="row ">
										<div className="col-md-12 text-center">
											<Link to={`/course/${id}`}>
												<Button />
											</Link>
										</div>
									</div>
								</div>
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

Example.propTypes = {
	id: PropTypes.number
};

export default Example;
