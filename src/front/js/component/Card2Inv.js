import React from "react";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from "reactstrap";
const bigCardInv = props => {
	return (
		<div className="container-fluid shadow p-3 mb-5 bg-body rounded">
			<CardGroup>
				<Card>
					<CardBody className=" text-center" id="card2Inv">
						<CardTitle className="text-center" tag="h1">
							Courses for All Ages
						</CardTitle>
						<CardTitle id="Experience">Experience</CardTitle>
						<CardText>
							<p>
								Learn new knowledge and skills in a variety of ways, from engaging video lectures and
								dynamic graphics to data visualizations and interactive elements.
							</p>
						</CardText>
						<CardTitle id="Experience">Practice</CardTitle>
						<CardText>
							<p>
								Demonstrating your knowledge is a critical part of learning. Pura Vida Academy courses
								and programs provide a space to practice with quizzes, open response assessments,
								virtual environments, and more.
							</p>
						</CardText>
						<CardTitle id="Experience">Apply</CardTitle>
						<CardText>
							<p>
								Learning on Pura Vida Academy transforms how you think and what you can do, and
								translates directly into the real world immediately apply your new capabilities in the
								context of your job.
							</p>
						</CardText>
						<CardTitle className="text-center pt-5" tag="h4">
							Your learning experience is grounded in cutting edge cognitive science. With more than two
							dozen distinct learning features to help you achieve your goals.
							<br />
							<i className="fas fa-book fa-2x pt-3" />
						</CardTitle>
					</CardBody>
				</Card>
				<Card>
					<CardImg
						className="rounded"
						src="https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_960_720.jpg"
					/>
				</Card>
			</CardGroup>
		</div>
	);
};

export default bigCardInv;
