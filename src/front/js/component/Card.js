import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Jumbotron, Container } from "reactstrap";
import "../../styles/demo.scss";

const Example = props => {
	return (
		<div className="my-5">
			<div className="align-items-center text-center">
				<h3>Special Deals and Last-Minute Offers</h3>
				<p>
					Book a unique tour at a great price! Grab a last-minute offer and start packing for your memorable
					vacation.
				</p>
			</div>

			<div className="container align-items-center">
				<div className="row align-items-start">
					<div className="col-4 text-center">
						<Card>
							<CardImg top width="100%" src="https://picsum.photos/1920/1080" alt="Card image cap" />
							<CardBody>
								<CardTitle tag="h5">Card title</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Card subtitle
								</CardSubtitle>
								<CardText>
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</CardText>
								<Button>Button</Button>
							</CardBody>
						</Card>
					</div>
					<div className="col-4 text-center">
						<Card>
							<CardImg top width="100%" src="https://picsum.photos/1920/1080" alt="Card image cap" />
							<CardBody>
								<CardTitle tag="h5">Card title</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Card subtitle
								</CardSubtitle>
								<CardText>
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</CardText>
								<Button>Button</Button>
							</CardBody>
						</Card>
					</div>
					<div className="col-4 text-center">
						<Card>
							<CardImg top width="100%" src="https://picsum.photos/1920/1080" alt="Card image cap" />
							<CardBody>
								<CardTitle tag="h5">Card title</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Card subtitle
								</CardSubtitle>
								<CardText>
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</CardText>
								<Button>Button</Button>
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Example;
