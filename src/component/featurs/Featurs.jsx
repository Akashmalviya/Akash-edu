import React from "react";
import styled from "styled-components";
import SepratorLine from "../styled Component/Line";
import image from "./../../Logos/pngs/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign 1.png";
import { RiLinkedinFill } from "react-icons/ri";
import CourseTeacher from "../../data/CourseTeachers";

const Main = styled.div`
	margin: 5rem 2.5rem 0 2.5rem;
`;
const Heading = styled.div`
	font-family: "Epilogue", sans-serif;
	font-weight: 700;
	font-size: 2.5rem;
	color: #0b1e51;
	@media (max-width: 768px) {
		text-align: center;
	}
`;

const Body = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;
const Cards = styled.div`
	box-sizing: border-box;
	background-color: white;
	color: #253858;
	padding: 5%;
	box-shadow: 0px 4px 16px 3px rgba(0, 0, 0, 0.04);
	border-radius: 1.2rem;
	margin: auto;
	margin-bottom: 5vh;
	width: 90%;
`;

const CardImgContainer = styled.div`
	position: relative;
	height: fit-content;
`;

const CardImg = styled.img`
	width: 100%;
	height: 100%;
`;

const ImgText = styled.div`
	color: #fff;
	display: flex;
	position: absolute;
	bottom: 1rem;
	font-size: 1.5rem;
	padding-left: 1rem;
	font-family: "Epilogue" sans-serif;
	font-weight: 600;
	gap: 1rem;
	align-items: center;
`;

const Icon = styled.div`
	background-color: #0078d4;
	border-radius: 5px;
	padding-left: 0.1rem;
	padding-right: 0.2rem;
	display: flex;
	align-items: center;
	height: 2rem;
`;

const CardText = styled.p`
	line-height: 1.6rem;
	color: #253858;
	word-wrap: break-word;
`;

const Featurs = () => {
	return (
		<Main>
			<Heading>Train by industry expert</Heading>
			<SepratorLine />
			<Body>
				{CourseTeacher.map((teacher) => (
					<Cards>
						<CardImgContainer>
							<ImgText>
								{teacher.name}
								<Icon>
									<RiLinkedinFill
										fill="white"
										style={{ height: "1.5rem", width: "1.7rem" }}
									/>
								</Icon>{" "}
							</ImgText>
							<CardImg src={teacher.photo} />
						</CardImgContainer>
						<CardText>{teacher.about}</CardText>
					</Cards>
				))}
			</Body>
		</Main>
	);
};

export default Featurs;
