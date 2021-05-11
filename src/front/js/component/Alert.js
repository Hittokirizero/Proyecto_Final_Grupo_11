import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const AlertExample = props => {
	const [show, setShow] = useState(false);

	if (show) {
		return (
			<Alert onClose={() => setShow(false)} dismissible>
				<Alert.Heading>Thanks for your question! Our team will contact you soon.</Alert.Heading>
			</Alert>
		);
	}
	return <Button onClick={() => setShow(true)}>Send</Button>;
};

export default AlertExample;
