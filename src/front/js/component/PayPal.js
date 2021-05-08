import React, { useRef, useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function Paypal() {
	const paypal = useRef();

	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, actions, err) => {
					return actions.order.create({
						intent: "CAPTURE",
						purchase_units: [
							{
                                description: "Curso", 
                                // tutorship name
								amount: {
									currency_code: "USD",
                                    value: 100.0
                                    // valor
								}
							}
						]
					});
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture();
					console.log(order);
				},

				onError: err => {
					console.log(err);
				}
			})
			.render(paypal.current);
	}, []);

	return (
		<div>
			<div ref={paypal} />
		</div>
	);
}
