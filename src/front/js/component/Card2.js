import React from "react";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from "reactstrap";
import "../../styles/card2.scss";
import "/workspace/Proyecto_Final_Grupo_11/src/front/img/Questions-rafiki.png";

const bigCard = props => {
	return (
		<div className="container-fluid shadow p-3 mb-5 bg-body rounded">
			<CardGroup>
				<Card>
					<CardImg
						className="rounded"
						src="https://cdn.pixabay.com/photo/2016/09/03/09/18/girl-1641215_960_720.jpg"
					/>
				</Card>
				<Card>
					<CardBody id="card2">
						<CardTitle className="text-center mt-2" tag="h1">
							What is Pura Vida Academy?
						</CardTitle>
						<CardTitle id="Experience1">
							The traditional classroom is limited in how many students it can serve, but millions of
							people around the world want and need quality education.
							<br />
							<br />
							Pura Vida Academy are massive open online courses. The concept began as an opportunity for
							organizations to offer online courses to students all over the world.
						</CardTitle>
					</CardBody>
				</Card>
			</CardGroup>
		</div>
	);
};

export default bigCard;
