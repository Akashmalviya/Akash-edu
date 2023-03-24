import React from "react";
import styled from "styled-components";
import SepratorLine from "../styled Component/Line";
import { ReactComponent as PriceLogo } from "./../../Logos/svgs/price.svg";
import { ReactComponent as InfinityLogo } from "./../../Logos/svgs/infinity.svg";
import { ReactComponent as TubeLogo } from "./../../Logos/svgs/floter.svg";
import { ReactComponent as GroupLogo } from "./../../Logos/svgs/group.svg";

const Main = styled.div`
	margin-top: 5rem;
`;
const Heading = styled.div`
	font-family: "Epilogue", sans-serif;
	font-weight: 700;
	font-size: 3.1rem;
	color: #0b1e51;
	@media (max-width: 768px) {
		text-align: center;
	}
`;

const Body = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
const Cards = styled.div`
	box-sizing: border-box;
	background-color: white;
	color: #253858;
	line-height: 2.4rem;
	width: 70%;
	padding: 5%;
	box-shadow: 0px 4px 16px 3px rgba(0, 0, 0, 0.04);
	border-radius: 20px;
	margin: auto;
	margin-bottom: 5vh;
`;

const CardHeader = styled.div`
	display: inline-flex;
	align-items: center;
`;

const PriceSvg = styled(PriceLogo)``;
const InfinitySvg = styled(InfinityLogo)``;
const GroupSvg = styled(GroupLogo)``;
const TubeSvg = styled(TubeLogo)``;

const CardHeading = styled.div`
	font-family: "Epilogue", sans-serif;
	font-weight: 700;
	font-size: 1.5rem;
	color: #0b1e51;
	margin-left: 30px;
`;
const Featurs = () => {
	return (
		<Main>
			<Heading>Course Features</Heading>
			<SepratorLine />
			<Body>
				<Cards>
					<CardHeader>
						<PriceSvg />
						<CardHeading>NO FEES !!100% FREE.</CardHeading>
					</CardHeader>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
						faucibus auctor sagittis in cras tempus rhoncus. Dignissim
						adipiscing enim, scelerisque nec nulla placerat.
					</p>
				</Cards>
				<Cards>
					<CardHeader>
						<InfinitySvg />
						<CardHeading>Lifetime Access.</CardHeading>
					</CardHeader>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
						faucibus auctor sagittis in cras tempus rhoncus. Dignissim
						adipiscing enim, scelerisque nec nulla placerat.
					</p>
				</Cards>
				<Cards>
					<CardHeader>
						<TubeSvg />
						<CardHeading>Hands on Guidance.</CardHeading>
					</CardHeader>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
						faucibus auctor sagittis in cras tempus rhoncus. Dignissim
						adipiscing enim, scelerisque nec nulla placerat.
					</p>
				</Cards>
				<Cards>
					<CardHeader>
						<GroupSvg />
						<CardHeading>Mock Up Interviews.</CardHeading>
					</CardHeader>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
						faucibus auctor sagittis in cras tempus rhoncus. Dignissim
						adipiscing enim, scelerisque nec nulla placerat.
					</p>
				</Cards>
			</Body>
		</Main>
	);
};

export default Featurs;
