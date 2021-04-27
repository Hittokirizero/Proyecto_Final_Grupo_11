import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { Button } from "reactstrap";

const JumboEnd = props => {
	return (
		<div className="text-center mt-4">
			<Jumbotron fluid>
				<Container fluid>
					<h1 className="display-3">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default JumboEnd;
