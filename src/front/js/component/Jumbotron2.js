import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "../../styles/home.scss";
import { Button } from "reactstrap";

const JumboEnd = props => {
	return (
		<div>
			<Jumbotron fluid my-auto>
				<Container fluid>
					<div className="text-center">
						<h1 className="display-3">Your Journey Begins</h1>
						<p className="lead">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
						</p>
						<Button color="light">Learn More</Button>{" "}
					</div>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default JumboEnd;