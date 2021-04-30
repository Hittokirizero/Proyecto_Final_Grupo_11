import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Jumbotron, Container } from "reactstrap";
import "../../styles/3cards.scss";
import "/workspace/Proyecto_Final_Grupo_11/src/front/img/Learning-rafiki.png";
import "/workspace/Proyecto_Final_Grupo_11/src/front/img/languages-rafiki.png";
import "/workspace/Proyecto_Final_Grupo_11/src/front/img/health-rafiki.png";

const Example = props => {
	return (
		<div className="my-5 ">
			<div className="align-items-center text-center ">
				<h1>Learn About Any Topic You Love</h1>
			</div>

			<div className="container align-items-center shadow-sm p-3 mb-5 bg-body rounded">
				<div className="row align-items-start">
					<div className="col-4 text-center">
						<Card>
							<CardImg src="Learning-rafiki.png" />
							<CardBody>
								<CardTitle tag="h3">Poetry</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Emily Dickinson
								</CardSubtitle>
								<CardText>
									Hope is the thing with feathers that perches in the soul and sings the tunes without
									the words and never stops at all.
								</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="col-4 text-center">
						<Card>
							<CardImg src="health-rafiki.png" />
							<CardBody>
								<CardTitle tag="h3">Programming</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Dennis Ritchie
								</CardSubtitle>
								<CardText>
									The only way to learn a new programming language is by writing programs in it.
								</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="col-4 text-center">
						<Card>
							<CardImg src="languages-rafiki.png" />
							<CardBody>
								<CardTitle tag="h3">Languages</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Geoffrey Willans
								</CardSubtitle>
								<CardText>
									You can never understand one language until you understand at least two.
								</CardText>
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Example;
