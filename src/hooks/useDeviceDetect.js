import { useEffect, useState } from "react";

const useDeviceDetect = () => {
	const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

	const eventHandler = () => {
		setDeviceWidth(window.innerWidth);
	};

	window.addEventListener("resize", eventHandler);

	return [deviceWidth <= 768, deviceWidth];
};
export default useDeviceDetect;
