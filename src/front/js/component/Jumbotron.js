import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "../../styles/home.scss";
import { Button } from "reactstrap";

const Example = props => {
	return (
		<div>
			<Jumbotron fluid>
				<Container fluid>
					<div className="text-center text-light mt-7">
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

export default Example;
