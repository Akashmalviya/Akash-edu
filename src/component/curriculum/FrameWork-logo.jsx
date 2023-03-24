import React from "react";
import styled from "styled-components";

const ImageCointainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 1.5rem 0 1.5rem 0;
`;
const Image = styled.img`
	margin-left: 1rem;
	margin-right: 1rem;
	width: 3rem;
	height: 3rem;
`;

const FrameWorklogo = () => {
	return (
		<ImageCointainer>
			<Image
				src={require("./../../Logos/pngs/icons8-angularjs-48.png")}
				alt="img"
			/>
			<Image src={require("../../Logos/pngs/icons8-css3-48.png")} alt="img" />
			<Image src={require("../../Logos/pngs/icons8-html-66.png")} alt="img" />
			<Image
				src={require("../../Logos/pngs/icons8-javascript-48.png")}
				alt="img"
			/>
			<Image
				src={require("../../Logos/pngs/icons8-mongodb-48.png")}
				alt="img"
			/>
			<Image
				src={require("./../../Logos/pngs/pngfind.com-pc-master-race-png-1363736.png")}
				alt="img"
			/>
			<Image src={require("../../Logos/pngs/icons8-nodejs-48.png")} alt="img" />
			<Image
				src={require("./../../Logos/pngs/icons8-react-100.png")}
				alt="img"
			/>
			<Image src={require("./../../Logos/pngs/icons8-git-48.png")} alt="img" />
		</ImageCointainer>
	);
};

export default FrameWorklogo;
