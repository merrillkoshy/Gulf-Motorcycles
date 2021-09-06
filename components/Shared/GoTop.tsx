import React, { useState, useEffect } from "react";

const GoTop = ({ scrollStepInPx, delayInMs }) => {
	const [_isMounted, setIsMounted] = useState(false);
	const [thePosition, setThePosition] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				setThePosition(true);
			} else {
				setThePosition(false);
			}
		});
		window.scrollTo(0, 0);
		return () => {
			setIsMounted(false);
		};
	}, []);

	const scrollToTop = () => {
		let intervalId;
		const onScrollStep = () => {
			setIsMounted(true);
			if (window.pageYOffset === 0) {
				clearInterval(intervalId);
			}
			window.scroll(0, window.pageYOffset - scrollStepInPx);
		};
		intervalId = setInterval(onScrollStep, delayInMs);
	};

	const renderGoTopIcon = () => {
		if (thePosition) {
			return (
				<div className="back-to-top show-back-to-top" onClick={scrollToTop}>
					TOP
				</div>
			);
		}
	};

	return <>{renderGoTopIcon()}</>;
};

export default GoTop;
