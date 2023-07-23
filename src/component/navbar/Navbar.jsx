import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import FlexBetween from "../styled Component/Flexbetween";
import { Button } from "../styled Component/Button-styled";

const NavCointainer = styled(FlexBetween)`
	position: relative;
	margin: 0 2.5rem 0 2.5rem;
`;

const Logo = styled.div`
	width: 17rem;
`;

const LogoSubHeading = styled.div`
	padding-left: 1.2rem;
	padding-bottom: 1rem;
`;

const LogofontCointainer = styled.div``;

const Logofont = styled.span`
	width: 2rem;
	height: 2.8rem;
	font-family: "Gilroy", sans-serif;
	font-style: normal;
	font-weight: 400;
	text-transform: uppercase;
	text-shadow: 0px 1.2px 4.3px rgba(69, 48, 178, 0.3);
	${(props) =>
		props.subheading
			? `line-height: 1rem; letter-spacing: 1.66em; font-size: .75rem;`
			: `line-height: 2.8rem;
	         letter-spacing: 0.3em; 
             font-size: 2.5rem;`}
	${(props) =>
		props.bracket
			? `color: #96A5B6`
			: props.letterO
			? `color: #1CBEF5`
			: `color: #4530b2`}
`;

const NavLinkContainer = styled.div`
	display: flex;
	@media (max-width: 768px) {
		transition: left 300ms ease;
		position: fixed;
		left: ${(props) => (props.active ? "15rem" : "-100%")};
		top: 20px;
		width: 100%;
		text-align: center;
	}
`;
const NavLink = styled.div`
	cursor: pointer;
	font-family: "Inter", sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 1rem;
	line-height: 1.5rem;
	color: #0b1e51;
	margin-left: 4rem;
	transition: all 300ms ease-in-out;

	&::before,
	::after {
		content: "";
		visibility: hidden;
		border: 1px solid black;
		bottom: 0px;
		display: block;
		margin: 0 auto;
		position: relative;
		transition: all 280ms ease-in-out;
		width: 0%;
	}

	&:hover::after,
	:hover::before {
		visibility: visible;
		border-color: black;
		transition: width 350ms ease-in-out;
		width: 70%;
	}

	&:hover {
		letter-spacing: 5px;
	}
	@media (max-width: 768px) {
		:hover {
			letter-spacing: 0px;
		}
		&:hover::after,
		:hover::before {
			visibility: hidden;
		}
	}
`;

const NavButton = styled(Button)`
	margin-top: 0;
	justify-content: center;
	@media (max-width: 768px) {
		display: none;
	}
`;

const HambuergerMenu = styled.div`
	background-color: white;
	display: none;
	height: 32px;
	width: 32px;
	border-radius: 5px;
	padding: 4px;
	@media (max-width: 768px) {
		display: block;
	}
`;
const Bar = styled.div`
	height: 4px;
	width: 100%;
	border-radius: 5px;
	margin-top: 3.5px;
	background-color: #4530b2;
	transition: all 300ms ease-in-out;
	&:nth-child(1) {
		transform: ${(porps) =>
			porps.active ? " translateY(8px) rotate(45deg)" : null};
	}
	&:nth-child(2) {
		opacity: ${(porps) => (porps.active ? "0" : "1")};
	}
	&:nth-child(3) {
		transform: ${(porps) =>
			porps.active ? " translateY(-8px) rotate(-45deg)" : null};
	}
`;

const Navbar = () => {
	const [activeHamburger, setactiveHamburger] = useState(false);
	return (
		<NavCointainer>
			<Logo>
				<LogofontCointainer>
					<Logofont bracket>[</Logofont>
					<Logofont>C</Logofont>
					<Logofont letterO>O</Logofont>
					<Logofont>D</Logofont>
					<Logofont>E</Logofont>
					<Logofont bracket>]</Logofont>
				</LogofontCointainer>
				<LogoSubHeading>
					<Logofont subheading>MATRIX</Logofont>
				</LogoSubHeading>
			</Logo>
			<NavLinkContainer active={activeHamburger ? true : false}>
				<Link to="curriculum" spy={true} smooth={true} duration={500}>
					<NavLink onClick={() => setactiveHamburger(false)}>
						Curriculum
					</NavLink>
				</Link>
				<Link
					to="contact_form"
					spy={true}
					smooth={true}
					offset={-20}
					duration={800}
				>
					<NavLink onClick={() => setactiveHamburger(false)}>Contact</NavLink>
				</Link>

				<Link to="testimonials" spy={true} smooth={true} duration={900}>
					<NavLink onClick={() => setactiveHamburger(false)}>
						Testimonials
					</NavLink>
				</Link>
				<Link to="faq" spy={true} smooth={true} duration={1000}>
					<NavLink onClick={() => setactiveHamburger(false)}>FAQs</NavLink>
				</Link>
			</NavLinkContainer>
			<Link
				to="contact_form"
				spy={true}
				smooth={true}
				duration={500}
				offset={-20}
			>
				<NavButton>Let’s Talk</NavButton>
			</Link>
			<HambuergerMenu
				onClick={() => setactiveHamburger(!activeHamburger)}
				active={activeHamburger ? true : false}
			>
				<Bar active={activeHamburger ? true : false}></Bar>
				<Bar active={activeHamburger ? true : false}></Bar>
				<Bar active={activeHamburger ? true : false}></Bar>
			</HambuergerMenu>
		</NavCointainer>
	);
};

export default Navbar;
