import React, { useState, useEffect } from "react";
import Link from "next/link";

const CTA = ({ serviceName }) => {
	const [clicked, setClicked] = useState(false);
	useEffect(() => {
		return () => {
			setClicked(false);
		};
	}, []);
	return (
		<div className="col-lg-4 col-md-6" key={serviceName}>
			<div
				className="d-flex single-services align-items-center"
				style={{
					justifyContent: "space-evenly",
				}}
				onClick={() => setClicked(!clicked)}
			>
				<div className="icon">
					<i className="icofont-wrench"></i>
				</div>
				{/* <h3>{service.itemName}</h3> */}
				<h3>{serviceName}</h3>
			</div>
			<div
				className={`${
					clicked ? `d-flex animated slideInDown` : `d-none`
				} mt-3 mb-5 align-items-center justify-content-end mr-3`}
			>
				<Link
					href={`https://wa.me/971567644951/?text=Hi+I+would+like+to+enquire+about+${serviceName}`}
				>
					<a>
						<i
							aria-hidden
							style={{
								fontSize: "28px",
								cursor: "pointer",
							}}
							className="fab fa-whatsapp"
						></i>
					</a>
				</Link>
				<Link href="tel:971567644951">
					<a>
						<i
							aria-hidden
							style={{
								fontSize: "28px",
								cursor: "pointer",
							}}
							className="fas fa-phone ml-3"
						></i>
					</a>
				</Link>
			</div>
		</div>
	);
};
export default CTA;
