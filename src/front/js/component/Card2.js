import React from "react";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from "reactstrap";
const bigCard = props => {
	return (
		<div className="container-fluid text-center align-items-center shadow p-3 mb-5 bg-body rounded">
			<CardGroup>
				<Card>
					<CardImg className="rounded" src="https://picsum.photos/1920/1080" />
				</Card>
				<Card>
					<CardBody className="bg-light text-dark">
						<CardTitle tag="h5">Card title</CardTitle>
						<CardSubtitle tag="h6" className="mb-2 text-muted">
							Card subtitle
						</CardSubtitle>
						<CardText>
							This card has supporting text below as a natural lead-in to additional content.
						</CardText>
					</CardBody>
				</Card>
			</CardGroup>
		</div>
	);
};

export default bigCard;
