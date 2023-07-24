import React from "react";
import Section from "../styled Component/Div";
import styled from "styled-components";
import FlexBetween from "./../styled Component/Flexbetween";
import { P } from "../styled Component/Introsection-styled";
import SepratorLine from "../styled Component/Line";
import CompanyLogo from "./Company-logo";
import FrameWorklogo from "./FrameWork-logo";
import BlueHighLight from "../styled Component/BlueHighLight";
import { ReactComponent as CollageProject } from "./../../Logos/svgs/college-project.svg";

// import { ReactComponent as BeginnerMedal } from "./../../Logos/svgs/bignners-logo.svg";
// import { ReactComponent as AdvanceMedal } from "./../../Logos/svgs/advance-logo.svg";

// import { AiOutlineRight } from "react-icons/ai";
// import { CurriculumStats } from "./Curriculum-stats";

const Main = styled.div`
	margin: 0 2.5rem 0 2.5rem;
`;

const H1 = styled(P)`
	color: rgba(37, 56, 88, 0.9);
	font-size: 2.5rem;
	text-align: center;
	font-weight: 600;
`;

const FlexBoxCointainer = styled(FlexBetween)`
	justify-content: center;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const FlexbetweenLeft = styled(Section)`
	box-sizing: border-box;
	flex: 1;
	padding: 3em;
	padding-bottom: 1.5em;
`;
const FlexbetweenRight = styled(Section)`
	flex: 1;
	padding: 2em;
	padding-bottom: 1.5em;
	height: 47em;
	overflow: hidden;
`;

const H2 = styled.div`
	font-family: "Epilogue", sans-serif;
	font-weight: 600;
	font-size: 1.8rem;
	color: #0b1e51;
`;
const Heading = styled.div`
	margin: 2rem 0 2rem 0;
	@media (max-width: 768px) {
		width: max-content;
		margin: auto;
	}
`;
const Para = styled.p`
	font-size: 1.3rem;
	font-family: "Inter", sans-serif;
	color: #253858;
	font-weight: 500;
	line-height: 2.5rem;
	padding: 0.7rem 1rem 0.7rem 0;
	@media (max-width: 768px) {
		text-align: center;
	}
`;

const Curriculum = () => {
	return (
		<Main>
			<SepratorLine></SepratorLine>
			<H1>CodeMatrix students are hired by companies of all sizes</H1>
			<CompanyLogo />

			<FlexBoxCointainer id="curriculum">
				<FlexbetweenLeft>
					<Heading>
						<H2>A World Class Curriculum</H2>
						<BlueHighLight />
					</Heading>
					<Para>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
						faucibus auctor sagittis in cras tempus rhoncus. Dignissim
						adipiscing enim, scelerisque nec nulla placerat erat. Ipsum in
						semper eu.
					</Para>
					<Para>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
						faucibus auctor sagittis in cras tempus rhoncus. Dignissim
						adipiscing enim, scelerisque nec nulla placerat erat. Ipsum in
						semper eu.
					</Para>
					<Para>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
						faucibus auctor sagittis in cras tempus rhoncus. Dignissim
						adipiscing enim, scelerisque nec nulla placerat erat. Ipsum in
						semper eu.
					</Para>
				</FlexbetweenLeft>
				<FlexbetweenRight>
					<CollageProject style={{ width: "38rem", height: "45rem" }} />
				</FlexbetweenRight>
			</FlexBoxCointainer>
			<FrameWorklogo />
		</Main>
	);
};

export default Curriculum;
