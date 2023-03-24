import styled from "styled-components";
import Section from "../styled Component/Div";
import FlexBetween from "../styled Component/Flexbetween";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ReactComponent as Loaction } from "./../../Logos/svgs/location.svg";
import { ReactComponent as Moniter } from "./../../Logos/svgs/moniter.svg";
import { ReactComponent as Bag } from "./../../Logos/svgs/bag.svg";

import { DiCss3, DiJavascript1, DiHtml5 } from "react-icons/di";

const Div = styled(Section)`
	border-radius: 20px;

	border: 0.09rem solid #b7c5d5;
	background-color: white;
`;

const Header = styled(FlexBetween)`
	padding: 1em;
	justify-content: space-evenly;
`;

const H3 = styled.span`
	font-weight: bold;
	font-size: 1.3rem;
`;
const HearderElements = styled(FlexBetween)``;

const HeaderElement = styled.div`
	margin-left: 1rem;
	display: inline-flex;
	align-items: center;
`;
const FlexBoxElementFont = styled.div`
	text-align: center;
	font-weight: bold;
	box-sizing: border-box;
`;

const Body = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem 7rem;
`;
const BodyElement = styled.div`
	margin: 2rem;
`;

const Attribute = styled.div`
	display: inline-flex;
	align-items: center;
`;

const AttributeFont = styled.div`
	color: #828c97;
	margin-left: 1rem;
`;
const Duration = styled(AiOutlineClockCircle)`
	color: #828c97;
`;
const AdditionalInfo = styled.span`
	color: #828c97;
`;
const H2 = styled.div`
	font-weight: bold;
	font-size: 1.5rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
`;
export const CurriculumStats = () => {
	return (
		<Div>
			<Header>
				<H3>Prerequisite: Basics of</H3>
				<HearderElements>
					<HeaderElement>
						<DiHtml5 style={{ height: "1.31rem", width: "1.31rem" }} />
						<FlexBoxElementFont>HTML</FlexBoxElementFont>
					</HeaderElement>
					<HeaderElement>
						<DiCss3 style={{ height: "1.68rem", width: "1.68rem" }} />
						<FlexBoxElementFont>Css</FlexBoxElementFont>
					</HeaderElement>
					<HeaderElement>
						<DiJavascript1 style={{ height: "1.56rem", width: "1.56rem" }} />
						<FlexBoxElementFont>Js</FlexBoxElementFont>
					</HeaderElement>
				</HearderElements>
			</Header>
			<Body>
				<BodyElement>
					<Attribute>
						<Duration
							style={{ height: "1.56rem", width: "1.56rem" }}
							color="#828C97;"
						></Duration>
						<AttributeFont>Duration</AttributeFont>
					</Attribute>

					<H2>6 Weeks</H2>

					<AdditionalInfo>Including mock interviews</AdditionalInfo>
				</BodyElement>
				<BodyElement>
					<Attribute>
						<Loaction color="#828C97;"></Loaction>
						<AttributeFont>Location</AttributeFont>
					</Attribute>

					<H2>Remote</H2>

					<AdditionalInfo>Work freely</AdditionalInfo>
				</BodyElement>
				<BodyElement>
					<Attribute>
						<Moniter color="#828C97"></Moniter>
						<AttributeFont>Duration</AttributeFont>
					</Attribute>

					<H2>Part Time</H2>

					<AdditionalInfo>Daily classes</AdditionalInfo>
				</BodyElement>
				<BodyElement>
					<Attribute>
						<Bag color="#828C97"></Bag>
						<AttributeFont>Batch Start</AttributeFont>
					</Attribute>

					<H2>15 July</H2>

					<AdditionalInfo>Deadline: 25 Aug, 2022</AdditionalInfo>
				</BodyElement>
			</Body>
		</Div>
	);
};
