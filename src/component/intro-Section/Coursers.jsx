import React from "react";
import styled from "styled-components";
import { ReactComponent as DotsSvg } from "./../../Logos/svgs/dots-logo.svg";

import { BtnFlex, Button } from "../styled Component/Button-styled";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-scroll";

const Main = styled.div`
	margin: 5rem 2.5rem 0 2.5rem;
	max-width: 35vw;
	@media (max-width: 768px) {
		max-width: fit-content;
	}
`;

const NavIcon = styled.div`
	height: 1rem;
	width: 3rem;
`;

const CourseOuterBox = styled.div`
	padding: 1rem;
	position: relative;
`;

const ButtonExtended = styled(Button)`
	position: absolute;
	bottom: 0;
	right: 0;
	margin-top: 0;
	width: 9rem;
	white-space: nowrap;
	padding: 0.6rem 0.4rem;
`;

const RightArrowIcon = styled(BsArrowRightCircle)`
	width: 1.5rem;
	height: 1.5rem;
`;

const CourseBox = styled.div`
	border-radius: 1.2rem;
	overflow: hidden;
`;

const BoxNav = styled.div`
	background: #37474f;
	width: 100%;
	padding: 0.7rem;
	padding-left: 1.3rem;
`;
const Body = styled.div`
	display: flex;
	align-items: center;
	background: #fff;
	padding: 2rem;
	padding-left: 1rem;
	gap: 1.2rem;
`;

const LogoContainer = styled.div``;
const Logo = styled.img`
	width: 7rem;
	height: 8rem;
`;

const DescriptionHeader = styled.div`
	color: #0b1e51;
	font-family: "Epilogue" sans-serif;
	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	letter-spacing: 0.3px;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	gap: 1rem;
	white-space: nowrap;
	justify-content: start;
`;

const HeaderDash = styled.div`
	display: inline-block;
	width: 1.2rem;
	height: 2px;
	background-color: #0b1e51;
`;

const DescriptionBody = styled.div`
	display: flex;
	gap: 2rem;
	align-items: self-start;
	line-height: 1.8rem;
	color: #253858;
	font-family: "Inter" sans-serif;
	font-size: 1rem;
`;

const DescriptionText = styled.div`
	padding-top: 0.8rem;
`;

const Coursers = ({ detail }) => {
	console.log(detail.icon);
	return (
		<Main>
			<CourseOuterBox>
				<Link
					to="contact_form"
					spy={true}
					smooth={true}
					offset={-20}
					duration={600}
				>
					<ButtonExtended>
						<BtnFlex>
							Enroll Now <RightArrowIcon />
						</BtnFlex>
					</ButtonExtended>
				</Link>

				<CourseBox>
					<BoxNav>
						<NavIcon>
							<DotsSvg style={{ width: "100%", height: "100%" }} />
						</NavIcon>
					</BoxNav>
					<Body>
						<LogoContainer>
							<Logo src={detail.icon} />
						</LogoContainer>
						<div>
							<DescriptionHeader>
								<HeaderDash />
								{detail.title}
							</DescriptionHeader>
							<DescriptionBody>
								<DescriptionText> {detail.text}</DescriptionText>
							</DescriptionBody>
						</div>
					</Body>
				</CourseBox>
			</CourseOuterBox>
		</Main>
	);
};

export default Coursers;
