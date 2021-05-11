import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";

import { Info } from "./pages/Information";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Courses } from "./pages/courses";
import { CourseDetails } from "./pages/CourseDetails";

import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Forgotpassword } from "./pages/forgotpassword";
import { Resetpassword } from "./pages/resetpassword";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/courses">
							<Courses />
						</Route>
						<Route path="/course/:id">
							<CourseDetails />
						</Route>
						<Route exact path="/Information">
							<Info />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/forgotpassword">
							<Forgotpassword />
						</Route>
						<Route exact path="/resetpassword">
							<Resetpassword />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
