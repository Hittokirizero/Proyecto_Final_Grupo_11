import React from "react";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from "reactstrap";
const bigCardInv = props => {
	return (
		<CardGroup>
			<Card>
				<CardBody className="bg-dark text-light">
					<CardTitle tag="h5">Card title</CardTitle>
					<CardSubtitle tag="h6" className="mb-2 text-muted">
						Card subtitle
					</CardSubtitle>
					<CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
			<Card>
				<CardImg top width="100%" src="https://picsum.photos/1920/1080" alt="Card image cap" />
			</Card>
		</CardGroup>
	);
};

export default bigCardInv;
