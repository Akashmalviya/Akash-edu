import styled from "styled-components";
import FlexBetween from "../styled Component/Flexbetween";
import { useState } from "react";
import curriculum from "../../data/Curriculum";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import details from "../../data/Detail";
import { FaAngleDown } from "react-icons/fa";

const H1 = styled.div`
	color: rgb(37, 56, 88, 0.9);
	text-align: center;
	font-family: "Epilogue", Sans-Serif;
	font-style: normal;
	font-weight: 800;
	font-size: 2rem;
`;

const Body = styled.div`
	display: flex;
	margin-top: 2.4rem;
	align-items: flex-start;
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1em 2em;
	max-width: 82%;
	margin: 0px auto;
	/* flex: 2; */
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
const GridItemHeading = styled.div`
	color: #0b1e51;
	font-weight: 600;
	font-size: 1.75rem;
	padding: 1rem;
	padding-bottom: 0.5em;
	:hover {
		cursor: pointer;
	}
	display: flex;
	justify-content: space-between;
`;
const GridItemHeadingText = styled.div``;
const GridItemHeadingIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	transition: transform 400ms;
`;
const GridItemText = styled.div`
	color: #253858;
	font-size: 0.9rem;
	line-height: 1.9em;
	font-weight: 200;
	padding: 1rem;
	padding-top: 0.5em;
`;
const GridItem = styled.div`
	position: relative;
	margin: auto;
	background-color: white;
	overflow: hidden;
	margin-bottom: 1rem;
	height: fit-content;
	padding: 1rem;
	border-radius: 20px;
	box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.11);
`;

const DetailSection = styled.div`
	border-radius: 20px;
	padding-left: 1rem;
	padding-right: 1.4rem;
	margin-right: 1rem;
	overflow: hidden;
	transition: all 400ms ease;
	width: ${(props) => (props.active ? "60%" : "0%")};
	height: ${(props) => (props.active ? "33rem" : "0")};
	background: linear-gradient(140.96deg, #7363e4 1.17%, #4631b3 98.37%);
	box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.11);
	color: ${(props) => (props.active ? "white" : "transparent")};
`;

const DetailSectionHeader = styled(FlexBetween)`
	padding: 1.3rem 1rem 0.5rem 2.2rem;
	display: flex;
	justify-content: s;
`;

const DetailSectionHeaderIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const DetailSectionHeading = styled.div`
	font-weight: 600;
	font-size: 1.75rem;
`;

const ResponsiveDetailSection = styled.div`
	display: flex;
	justify-content: center;
`;

const Ul = styled.ul`
	padding-left: 3rem;
`;

const Li = styled.li`
	font-weight: 200;
	font-size: 0.8rem;
	padding: 0.8rem 0;
	font-size: 0.9rem;
`;

const Container = styled.div`
	margin-top: 4rem;
`;

const Para = styled.p`
	text-align: center;
	font-family: "Inter" Sans-Serif;
	font-style: normal;
	font-weight: 500;
	font-size: 1.2rem;
	line-height: 2.2rem;
	color: #253858;
`;

const StatsSection = styled(FlexBetween)`
	margin-top: 3rem;
`;

const StatsDiv = styled.div`
	padding: 3%;
`;

const IntrosectionDescription = () => {
	const [ref, setRef] = useState(Number);
	const [active, setActive] = useState(false);
	const [arrowDown, setArrowDown] = useState(null);

	const [diviceWidth] = useDeviceDetect();

	const handleToggel = (e, i) => {
		setArrowDown(i);
		let currentTarget = e.currentTarget;
		let parent = currentTarget.parentNode;
		let index = Array.from(parent.children).indexOf(currentTarget);
		if (ref === i) {
			setActive(!active);
		} else {
			setRef(index);
			setActive(true);
		}
	};

	return (
		<Container>
			<H1>
				Get Ready for a
				<span style={{ color: "#4530b2" }}> Career in Tech! </span> With the
				structured roadmap
			</H1>
			<Body>
				{!diviceWidth && (
					<DetailSection active={active}>
						<DetailSectionHeader>
							<DetailSectionHeading>
								{details[arrowDown]?.header}
							</DetailSectionHeading>
							<DetailSectionHeaderIcon>
								<FaAngleDown style={{ width: "2rem", height: "2rem" }} />
							</DetailSectionHeaderIcon>
						</DetailSectionHeader>
						<Ul>
							{details[arrowDown]?.content?.map((ele) => {
								return <Li>{ele}</Li>;
							})}
						</Ul>
					</DetailSection>
				)}
				<GridContainer>
					{curriculum.map((x, i) => {
						return (
							<GridItem
								id={i + 1}
								onClick={(e) => {
									handleToggel(e, i);
								}}
							>
								<GridItemHeading>
									<GridItemHeadingText>{x.header}</GridItemHeadingText>
									<GridItemHeadingIcon
										style={
											arrowDown === i && active
												? { transform: "rotate(360deg)" }
												: { transform: "rotate(270deg)" }
										}
									>
										<FaAngleDown />
									</GridItemHeadingIcon>
								</GridItemHeading>
								<GridItemText>{x.content}</GridItemText>
								{diviceWidth && (
									<ResponsiveDetailSection>
										<DetailSection active={active && arrowDown === i}>
											<DetailSectionHeader>
												<DetailSectionHeading>
													{details[arrowDown]?.header}
												</DetailSectionHeading>
												<DetailSectionHeaderIcon>
													<FaAngleDown
														style={{ width: "2rem", height: "2rem" }}
													/>
												</DetailSectionHeaderIcon>
											</DetailSectionHeader>
											<Ul>
												{details[arrowDown]?.content.map((ele) => {
													return <Li>{ele}</Li>;
												})}
											</Ul>
										</DetailSection>
									</ResponsiveDetailSection>
								)}
							</GridItem>
						);
					})}
				</GridContainer>
			</Body>
			<StatsSection>
				<StatsDiv>
					<H1 color>85%</H1>
					<Para>
						85% of students land a job within 3 months of job searching{" "}
					</Para>
				</StatsDiv>
				<StatsDiv>
					<H1 color>3x your salary</H1>
					<Para>
						CodeMatrix alums make 3x their previous salaries on average
					</Para>
				</StatsDiv>
				<StatsDiv>
					<H1 color>91%</H1>
					<Para>91% of job offers students receive are for remote roles</Para>
				</StatsDiv>
			</StatsSection>
		</Container>
	);
};

export default IntrosectionDescription;
// {
// 	/* <GridContainer>
// 					{curriculum.forEach(() => {
// 						return (
// 							<GridItem
// 								onMouseEnter={() => setActive(1)}
// 								onMouseLeave={() => setActive("")}
// 							>
// 								<h1>me</h1>
// 								{/* <H3 color={active === 1 ? false : true}>Intro to Frontend</H3>
// 							{active === 1 ? (
// 								<Ul>
// 									<ListItem>Introduction to Maths for Programming</ListItem>
// 									<ListItem>Introduction to Maths for Programming</ListItem>
// 									<ListItem>Introduction to Maths for Programming</ListItem>
// 									<ListItem>Introduction to Maths for Programming</ListItem>
// 									<ListItem>Introduction to Maths for Programming</ListItem>
// 									<ListItem>Introduction to Maths for Programming</ListItem>
// 									<ListItem>Introduction to Maths for Programming</ListItem>
// 								</Ul>
// 							) : (
// 								<P>
// 									You start with basics with us in. Does not matter if you are a
// 									beginner or intermediate it is always good to have a strong
// 									understanding
// 								</P>
// 							)} */
// }
