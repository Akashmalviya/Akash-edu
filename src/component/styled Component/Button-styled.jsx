import styled from "styled-components";

export const Button = styled.div`
	margin-top: 20px;
	width: 10rem;
	height: 3.2rem;
	font-size: 1rem;
	background: #4530b2;
	border: #4530b2;
	border-radius: 32px;
	color: #ffffff;
	transition: all 300ms ease;
	min-height: 2rem;
	display: flex;
	align-items: center;
	padding: 1rem;
	&:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
	@media (max-width: 768px) {
		margin-left: 45%;
	}
`;

export const BtnFlex = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	padding-left: 0.1rem;
	padding-right: 0.1rem;
	font-size: 1rem;
`;
