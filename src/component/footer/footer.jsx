import React from "react";
import styled from "styled-components";
import { ReactComponent as CompanyLogo } from "./../../Logos/svgs/footer_company_logo.svg";
import { Button, BtnFlex } from "../styled Component/Button-styled";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-scroll";

const Conatiner = styled.div`
	margin: 0 2.5rem 0 2.5rem;
`;

const Main = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #0b1e51;
	border-radius: 12px;
	color: white;
	align-items: center;
	padding: 2rem;
`;

const FooterRight = styled.div`
	flex: 0.6;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const LogoDiv = styled.div`
	padding-bottom: 1rem;
`;
const LinkCointainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const FooterLink = styled.div`
	cursor: pointer;
	color: rgba(255, 255, 255, 0.5);
`;
const FooterLeft = styled.div`
	flex: 0.4;
`;
const Text = styled.div`
	font-family: "Inter", sans-serif;
	color: #dbe9f7;
`;
const FooterButton = styled(Button)`
	margin-top: 0;
	@media (max-width: 768px) {
		margin-left: 0;
	}
`;

const CopyRightTest = styled.div`
	color: rgba(11, 30, 81, 0.5);
	margin-top: 0.5rem;
	margin-left: 0.5rem;
`;

const Footer = () => {
	return (
		<Conatiner>
			<Main>
				<FooterLeft>
					<LogoDiv>
						<CompanyLogo style={{ width: "12.5rem", height: "6.25rem" }} />
					</LogoDiv>
					<LinkCointainer>
						<Link
							to="contact_form"
							spy={true}
							smooth={true}
							offset={-20}
							duration={800}
						>
							<FooterLink>Contact</FooterLink>
						</Link>
						<Link to="curriculum" spy={true} smooth={true} duration={500}>
							<FooterLink>Curriculum</FooterLink>
						</Link>
						<Link to="testimonials" spy={true} smooth={true} duration={900}>
							<FooterLink>Testimonials</FooterLink>
						</Link>
						<Link to="faq" spy={true} smooth={true} duration={1000}>
							<FooterLink>FAQs</FooterLink>
						</Link>
					</LinkCointainer>
				</FooterLeft>
				<FooterRight>
					<Text>Give a boost to your career, Don’t wait! </Text>
					<Link
						to="contact_form"
						spy={true}
						smooth={true}
						offset={-20}
						duration={800}
					>
						<FooterButton>
							<BtnFlex>
								Apply Now{" "}
								<BsArrowRightCircle
									style={{ width: "1.5rem", height: "1.5rem" }}
								/>
							</BtnFlex>
						</FooterButton>
					</Link>
				</FooterRight>
			</Main>
			<CopyRightTest>
				Copyright @ 2022 CodeMatrix | All Rights Reserved
			</CopyRightTest>
		</Conatiner>
	);
};
export default Footer;
