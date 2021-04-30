import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { Button } from "reactstrap";

const Example = props => {
	return (
		<div className="text-center shadow p-3 mb-5 bg-body rounded">
			<Jumbotron fluid>
				<Container fluid>
					<h1 className="display-3">Enjoy the Process of Learning</h1>
					<h4 className="lead">
						Wisdom is not a product of schooling but of the lifelong attempt to acquire it
					</h4>
					<p className="text-muted ">Albert Einstein</p>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default Example;
