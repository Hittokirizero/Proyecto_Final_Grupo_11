import React from "react";
import { Link } from "react-router-dom";

export const Information = () => {
	return (
		<div className="mb-4">
			{/* <!--Section heading--> */}
			<h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
			{/* <!--Section description--> */}
			<h5 className="text-center w-responsive mx-auto mb-5">
				Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you
				within a matter of hours to help you.
			</h5>

			<div className="row">
				{/* <!--Grid column--> */}
				<div className="col-md-9 mb-md-0 mb-5">
					<form id="contact-form" name="contact-form" action="mail.php" method="POST">
						{/* <!--Grid row--> */}
						<div className="row">
							{/* <!--Grid column--> */}
							<div className="col-md-6">
								<div className="md-form mb-0">
									<input type="text" id="name" name="name" className="form-control" />
									<label className="">Your name</label>
								</div>
							</div>
							{/* <!--Grid column-->

                                <!--Grid column--> */}
							<div className="col-md-6">
								<div className="md-form mb-0">
									<input type="text" id="email" name="email" className="form-control" />
									<label className="">Your email</label>
								</div>
							</div>
							{/* <!--Grid column--> */}
						</div>
						{/* <!--Grid row--> */}

						{/* <!--Grid row--> */}
						<div className="row">
							<div className="col-md-12">
								<div className="md-form mb-0">
									<input type="text" id="subject" name="subject" className="form-control" />
									<label className="">Subject</label>
								</div>
							</div>
						</div>
						{/* <!--Grid row-->

                            <!--Grid row--> */}
						<div className="row">
							{/* <!--Grid column--> */}
							<div className="col-md-12">
								<div className="md-form">
									<textarea
										type="text"
										id="message"
										name="message"
										rows="2"
										className="form-control md-textarea"
									/>
									<label>Your message</label>
								</div>
							</div>
						</div>
						{/* <!--Grid row--> */}
					</form>

					<div className="text-center text-md-middle">
						<a className="btn btn-primary text-light text-center">Send</a>
					</div>
					<div className="status" />
				</div>
				{/* <!--Grid column-->

                    <!--Grid column--> */}
				<div className="col-md-3 text-center">
					<ul className="list-unstyled mb-0">
						<li>
							<i className="fas fa-map-marker-alt fa-2x" />
							<p>San Jose, Costa Rica</p>
						</li>

						<li>
							<i className="fas fa-phone mt-4 fa-2x" />
							<p>+ 506 0000 0000</p>
						</li>

						<li>
							<i className="fas fa-envelope mt-4 fa-2x" />
							<p>contact@puravidaacademy.com</p>
						</li>
					</ul>
				</div>
				{/* <!--Grid column--> */}
			</div>
		</div>
	);
};

export default Information;
