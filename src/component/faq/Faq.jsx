import faq from "../../data/Faq";
import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as FaqSvg } from "./../../Logos/svgs/faq.svg";
import FlexBetween from "../styled Component/Flexbetween";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import BlueHighLight from "../styled Component/BlueHighLight";
import SepratorLine from "../styled Component/Line";

const Container = styled(FlexBetween)`
	margin: 2rem 2.5rem 5rem 2.5rem;

	@media (max-width: 786px) {
		flex-direction: column;
		margin: 2rem 2.5rem 0rem 2.5rem;
	}
`;

const FaqSvgcointainer = styled.div`
	padding: 2rem;
	flex: 1;
`;

const QandA = styled.div`
	padding: 4em;
	height: 40em;
	flex: 1;
`;

const HeadingContainer = styled.div`
	margin-bottom: 2rem;
	@media (max-width: 786px) {
		max-width: fit-content;
		margin: auto;
		margin-bottom: 2rem;
	}
`;
const Heading = styled.div`
	color: #0b1e51;
	font-weight: 700;
	font-size: 2.9rem;
	font-family: "Epilogue" sans-serif;
`;

const QuestionAndAnsCointer = styled.div`
	padding-left: 1em;
`;
const Line = styled(SepratorLine)`
	margin: 0;
	width: 100%;
`;

const AnsCointer = styled.div`
	padding: 1em 1em 0.6em 0em;
`;
const Ans = styled.div`
	color: rgba(11, 30, 81, 0.75);
	font-size: 0.8rem;
	line-height: 30px;
	font-family: "Inter", sans-serif;
	overflow: hidden;

	max-height: ${(pops) => (pops.active ? "6rem" : 0)};
	transition: max-height 300ms ease;
`;

const QuestionWapper = styled(FlexBetween)`
	padding: 1em;
	padding-left: 0;
`;

const Question = styled.div`
	color: #0b1e51;
	font-family: "Inter" sans-serif;
	font-weight: 560;
	font-size: 1.1rem;
`;

const ToggelButton = styled.div``;

const FaqSection = () => {
	const [selected, setSelected] = useState(null);

	return (
		<Container id="faq">
			<FaqSvgcointainer>
				<FaqSvg />
			</FaqSvgcointainer>
			<QandA>
				<HeadingContainer>
					<Heading>FAQs</Heading>
					<BlueHighLight />
				</HeadingContainer>
				{faq.map((que, i) => {
					return (
						<QuestionAndAnsCointer key={que.id}>
							<QuestionWapper>
								<Question>{que.que}</Question>
								<ToggelButton>
									{selected === i ? (
										<AiOutlineMinus
											style={{ cursor: "pointer" }}
											onClick={() => {
												setSelected(null);
											}}
										/>
									) : (
										<AiOutlinePlus
											style={{ cursor: "pointer" }}
											onClick={() => {
												setSelected(i);
											}}
										/>
									)}
								</ToggelButton>
							</QuestionWapper>
							<Line />
							<AnsCointer>
								<Ans active={selected === i ? true : false}>{que.ans}</Ans>
							</AnsCointer>
						</QuestionAndAnsCointer>
					);
				})}
			</QandA>
		</Container>
	);
};

export default FaqSection;
