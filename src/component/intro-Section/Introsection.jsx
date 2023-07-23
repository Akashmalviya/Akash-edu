import React from "react";
import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";
import FlexBetween from "../styled Component/Flexbetween";
import { ReactComponent as InterosectionPic } from "./../../Logos/svgs/introsection.svg";
import IntrosectionDescription from "./IntrosectionDescription";
import { Link } from "react-scroll";
import { Button, BtnFlex } from "../styled Component/Button-styled";

const IntroSectionCointainer = styled(FlexBetween)`
	padding-top: 2.4rem;
	padding-bottom: 2.4rem;
	@media (max-width: 768px) {
		flex-direction: column;
		padding-top: 5rem;
	}
	margin: 0 2.5rem 0 2.5rem;
`;

const IntrosectionWrapper = styled.div`
	flex: 1;
	@media (max-width: 768px) {
		text-align: center;
	}
`;
const IntrosectionSvgContainer = styled.div`
	flex: 1.2;
	@media (max-width: 768px) {
		width: 50rem;
		padding-top: 4rem;
	}
`;
const RightArrowIcon = styled(BsArrowRightCircle)`
	width: 1.5rem;
	height: 1.5rem;
`;

const Heading = styled.div`
	color: #4530b2;
	font-family: "Epilogue", Sans-Serif;
	font-style: normal;
	font-weight: 800;
	line-height: 4rem;
	font-size: 2.9rem;
	margin-right: 0;
`;

const P = styled.p`
	font-family: "Inter", Sans-Serif;
	font-style: normal;
	font-weight: 500;
	font-size: 1.2rem;
	line-height: 2.3rem;
	color: #253858;
	padding-right: 1rem;
`;

const HeadingDescription = styled(P)`
	padding: 0;
`;

const Introsection = () => {
	return (
		<>
			<IntroSectionCointainer>
				<IntrosectionWrapper>
					<HeadingDescription>- The Boost you need</HeadingDescription>
					<Heading> Get the Mentorship that you are missing</Heading>
					<P>
						<span>
							Doesn’t matter whether you are from tech or non tech background,
							we will give our best to make you an{" "}
							<span style={{ color: "#4530b2" }}>
								{" "}
								industry ready developer{" "}
							</span>
							by the time you finish this course.
						</span>
					</P>
					<Link
						to="contact_form"
						spy={true}
						smooth={true}
						offset={-20}
						duration={800}
					>
						<Button>
							<BtnFlex>
								Apply Now <RightArrowIcon />
							</BtnFlex>
						</Button>
					</Link>
				</IntrosectionWrapper>
				<IntrosectionSvgContainer>
					<InterosectionPic style={{ width: "100%", height: "100%" }} />
				</IntrosectionSvgContainer>
			</IntroSectionCointainer>
			<IntrosectionDescription />
		</>
	);
};
export default Introsection;
