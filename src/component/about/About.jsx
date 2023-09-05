import React from "react";
import styled from "styled-components";
import FlexBetween from "../styled Component/Flexbetween";
import { ReactComponent as Mountain } from "../../Logos/svgs/mouintain.svg";
import { ReactComponent as Target } from "../../Logos/svgs/target.svg";
import { ReactComponent as Rocket } from "../../Logos/svgs/rocket.svg";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const Cointainer = styled.div`
	margin-top: 5rem;
`;

const Header = styled.div`
	text-align: center;
	color: #0b1e51;
`;

const Heading = styled.div`
	font-weight: 700;
	font-size: 2rem;
	margin-bottom: 3rem;
`;

const SubHeading = styled.div`
	padding: 0% 7% 0 7%;
	font-weight: 500;
	line-height: 2rem;
	font-size: 1.3rem;
`;

const Body = styled.div`
	margin-top: 8rem;
`;

const Card = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	border-radius: 20px;
	width: 30rem;
	padding: 1.5rem 1rem;
	@media (max-width: 768px) {
		width: 52rem;
		padding: 3rem 2rem;
		&:nth-child(1) {
			margin-bottom: 3rem;
		}
		&:nth-child(2) {
			margin-top: 3rem;
		}
	}
`;
const CardText = styled.div`
	flex: 0.7;
	padding-left: 1rem;
	color: #0b1e51;
	line-height: 1.9rem;
`;
const CardImg = styled.div`
	display: flex;
	justify-content: center;
	flex: 0.3;
`;

const FlexCointainer = styled(FlexBetween)`
	padding-left: 3rem;
	padding-right: 3rem;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
const RocketSvgCointainer = styled.div``;
const Footer = styled.div`
	background: linear-gradient(180.05deg, #5652d6 0.04%, #4530b2 103.96%);
	color: white;
	text-align: center;
	padding: 3rem 3.5rem 3rem 3.5rem;
	position: relative;
`;

const FooterHeading = styled.div`
	font-weight: 900;
	font-size: 4rem;
	@media (max-width: 470px) {
		font-size: 3rem;
	}
`;

const FooterText = styled.div`
	font-weight: 600;
	font-size: 1.6rem;
	line-height: 3rem;
	font-family: "Epilogue", sans-serif;
	padding: 9rem 2rem 9rem 2rem;
	@media (max-width: 470px) {
		padding: 5rem 2rem 5rem 2rem;
	}
`;
const WaterMakr = styled.div`
	cursor: default;
	position: absolute;
	font-size: 24rem;
	font-weight: 400;
	font-family: "Anton", sans-serif;
	color: rgba(255, 255, 255, 0.05);
	user-select: none;
	left: 50%;
	transform: translate(-50%, 0);
	@media (max-width: 470px) {
		font-size: 20rem;
	}
`;

const FooterSocialMediaCointainer = styled.div`
	display: inline-flex;
	align-items: center;
	width: 10rem;
	justify-content: space-between;
`;

const FooterSocialMediaBox = styled.div``;

const AboutSection = () => {
	return (
		<Cointainer>
			<Header>
				<Heading>Empowering Minds through Dynamic Live Learning </Heading>
				<SubHeading>
					Ignite your potential with our live learning sessions that transcend
					traditional boundaries. Our platform is a catalyst for growth, where
					learners from all walks of life come together to share their passions
					and expand their horizons.
				</SubHeading>
			</Header>
			<Body>
				<FlexCointainer>
					<Card>
						<CardImg>
							<Mountain style={{ width: "8rem", height: "8rem" }} />
						</CardImg>
						<CardText>
							Discover the joy of learning through live connections and
							collaborative experiences. Our interactive sessions cater to
							diverse interests and are designed to ignite your curiosity.
						</CardText>
					</Card>
					<Card>
						<CardImg>
							<Target style={{ width: "8rem", height: "8rem" }} />
						</CardImg>
						<CardText>
							Discover the joy of learning through live connections and
							collaborative experiences. Our interactive sessions cater to
							diverse interests and are designed to ignite your curiosity.
						</CardText>
					</Card>
				</FlexCointainer>
				<RocketSvgCointainer>
					<Rocket
						style={{
							display: "inline-block",
							verticalAlign: "top",
							width: "100%",
						}}
					/>
				</RocketSvgCointainer>
			</Body>
			<Footer>
				<WaterMakr>ABOUT</WaterMakr>
				<FooterHeading>“Do or do not. There is no try .”</FooterHeading>
				<FooterText>
					Whether you want to get your first job as a deveoper or want to change
					your career, I will be there to make sure you become skilled in the
					required technologies and get that boost in your carrer. 🚀
				</FooterText>
				<FooterSocialMediaCointainer>
					<FooterSocialMediaBox>
						<BsLinkedin
							size={"3rem"}
							cursor="pointer"
							style={{ borderRadius: "0.312rem" }}
						/>
					</FooterSocialMediaBox>
					<FooterSocialMediaBox>
						<FaInstagramSquare size={"3.4rem"} cursor="pointer" />
					</FooterSocialMediaBox>
				</FooterSocialMediaCointainer>
			</Footer>
		</Cointainer>
	);
};

export default AboutSection;
