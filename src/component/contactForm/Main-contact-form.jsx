import React from "react";
import styled from "styled-components";
import { GrFacebookOption } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import Form from "./Contact-form";
import GetInTouch from "./Get-In_touch";
import Info from "./Info";

const Container = styled.div`
	position: relative;
	background: linear-gradient(113.2deg, #7363e4 1.03%, #4631b3 97.98%);
	z-index: 0;
`;
const WarterMarkDiv = styled.div`
	position: absolute;
	font-size: 22rem;
	color: rgba(255, 255, 255, 0.05);
	font-family: "Anton", sans-serif;
	cursor: default;
	user-select: none;
	font-weight: 600;
	top: calc(50% - 20rem);
	z-index: 1;
	overflow: hidden;
	left: 50%;
	transform: translate(-50%, 0);
`;
const Grid = styled.div`
	padding-top: 5%;
	padding-bottom: 5%;
	height: fit-content;
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
	z-index: 2;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

const GridEl = styled.div`
	padding-left: 5rem;
	padding-right: 5rem;

	&:nth-child(1) {
		padding-top: 3rem;
		@media (max-width: 768px) {
			text-align: center;
			padding-top: 2rem;
		}
	}
	&:nth-child(2) {
		grid-row: 1/4;
		grid-column: 2/3;
	}

	&:nth-child(3) {
		@media (max-width: 768px) {
			padding-top: 3rem;
			max-width: 350px;
			margin: auto;
		}
	}

	&:last-child {
		display: flex;
		align-items: center;
		@media (max-width: 768px) {
			justify-content: center;
			padding-top: 2rem;
		}
	}
`;

const Box = styled.div`
	@media (max-width: 768px) {
		padding-top: 3rem;
		max-width: 350px;
		margin: auto;
	}
`;
const Icon = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	&:hover {
		cursor: pointer;
	}

	&:nth-child(2) {
		width: 3rem;
		height: 3rem;
		margin-right: 4rem;
		margin-left: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #1cbef5;
		border-radius: 100%;
	}
`;

const MaincontactForm = () => {
	return (
		<Container>
			<WarterMarkDiv>CONTENT</WarterMarkDiv>
			<Grid id="contact_form">
				<GridEl>
					<GetInTouch />
				</GridEl>
				<GridEl>
					<Box>
						<Form />
					</Box>
				</GridEl>
				<GridEl>
					<Info />
				</GridEl>
				<GridEl>
					<Icon>
						<GrFacebookOption fill="white" size={"100%"} />
					</Icon>
					<Icon>
						<RiLinkedinFill fill="white" size={"60%"} />
					</Icon>
					<Icon>
						<BsInstagram fill="white" size={"100%"} />
					</Icon>
				</GridEl>
			</Grid>
		</Container>
	);
};

export default MaincontactForm;
