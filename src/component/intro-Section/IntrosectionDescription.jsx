import styled from "styled-components";
import FlexBetween from "../styled Component/Flexbetween";
import { useState } from "react";
import Coursers from "./Coursers";
import CouseDetail from "./../../data/CouseDetail";

const H1 = styled.div`
	color: rgb(37, 56, 88, 0.9);
	text-align: center;
	font-family: "Epilogue", Sans-Serif;
	font-style: normal;
	font-weight: 800;
	font-size: 2rem;
`;

const Body = styled.div`
	margin-top: 2rem;
`;

const GridContainerLeft = styled.div`
	display: flex;
	justify-content: start;
	margin-bottom: 2rem;
	@media (max-width: 768px) {
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
`;
const GridContainerRight = styled(GridContainerLeft)`
	justify-content: end;
	margin-top: 2rem;
	@media (max-width: 768px) {
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
`;

const Container = styled.div`
	margin: 4rem 2.5rem 0 2.5rem;
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
	return (
		<Container>
			<H1>
				Get Ready for a
				<span style={{ color: "#4530b2" }}> Career in Tech! </span> With the
				structured roadmap
			</H1>
			<Body>
				<GridContainerLeft>
					{CouseDetail.map((detail, i) =>
						i <= 1 ? <Coursers detail={detail} /> : null
					)}
				</GridContainerLeft>
				<GridContainerRight>
					{CouseDetail.map((detail, i) =>
						i > 1 ? <Coursers detail={detail} /> : null
					)}
				</GridContainerRight>
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
// 	!diviceWidth && (
// 		<DetailSection active={active}>
// 			<DetailSectionHeader>
// 				<DetailSectionHeading>
// 					{details[arrowDown]?.header}
// 				</DetailSectionHeading>
// 				<DetailSectionHeaderIcon>
// 					<FaAngleDown style={{ width: "2rem", height: "2rem" }} />
// 				</DetailSectionHeaderIcon>
// 			</DetailSectionHeader>
// 			<Ul>
// 				{details[arrowDown]?.content?.map((ele) => {
// 					return <Li>{ele}</Li>;
// 				})}
// 			</Ul>
// 		</DetailSection>
// 	);
// }
// { <GridContainer>
// 	{curriculum.map((x, i) => {
// 		return (
// 			<GridItem
// 				id={i + 1}
// 				onClick={(e) => {
// 					handleToggel(e, i);
// 				}}
// 			>
// 				<GridItemHeading>
// 					<GridItemHeadingText>{x.header}</GridItemHeadingText>
// 					<GridItemHeadingIcon
// 						style={
// 							arrowDown === i && active
// 								? { transform: "rotate(360deg)" }
// 								: { transform: "rotate(270deg)" }
// 						}
// 					>
// 						<FaAngleDown />
// 					</GridItemHeadingIcon>
// 				</GridItemHeading>
// 				<GridItemText>{x.content}</GridItemText>
// 				{diviceWidth && (
// 					<ResponsiveDetailSection>
// 						<DetailSection active={active && arrowDown === i}>
// 							<DetailSectionHeader>
// 								<DetailSectionHeading>
// 									{details[arrowDown]?.header}
// 								</DetailSectionHeading>
// 								<DetailSectionHeaderIcon>
// 									<FaAngleDown
// 										style={{ width: "2rem", height: "2rem" }}
// 									/>
// 								</DetailSectionHeaderIcon>
// 							</DetailSectionHeader>
// 							<Ul>
// 								{details[arrowDown]?.content.map((ele) => {
// 									return <Li>{ele}</Li>;
// 								})}
// 							</Ul>
// 						</DetailSection>
// 					</ResponsiveDetailSection>
// 				)}
// 			</GridItem>
// 		);
// 	})}
// </GridContainer> }
