import { useState } from "react";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail, HiDuplicate } from "react-icons/hi";
import useDeviceDetect from "../../hooks/useDeviceDetect";

const Cointainer = styled.div`
	height: 7rem;
`;

const InfoDiv = styled.div`
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 3.5rem;
	width: 100%;
	padding: 0.7rem 0.7rem 0.7rem 0.7rem;
	position: relative;
	border: 0.18rem solid transparent;
	border-radius: 15px;

	@media (hover: hover) {
		&:hover {
			border: 0.18rem solid #1cbef5;
			border-radius: 15px;
			background-color: rgba(0, 0, 0, 0.4);
		}
	}

	@media (hover: none) {
		border: 0.18rem solid #1cbef5;
		border-radius: 15px;
		background-color: rgba(0, 0, 0, 0.4);
	}
	&:nth-child(1) {
		margin-bottom: 0.5rem;
	}
	&:nth-child(2) {
		margin-right: 10px;
		margin-top: 0.5rem;
	}
`;

const InfoDivRight = styled.div`
	display: inline-flex;
	align-items: center;
`;

const ContactInfo = styled.div`
	color: white;
	text-align: center;
	margin-left: 1.5em;
`;

const CopyIcon = styled.div`
	position: relative;
	cursor: pointer;
	border-radius: 15px;
	&:active {
		background-color: rgba(255, 255, 255, 0.5);
	}
	&:before {
		transition: display 200ms;
		display: ${(props) => (props.copy ? "block" : "none")};
		content: "Copied";
		position: absolute;
		top: -2.8rem;
		right: -2rem;
		background: white;
		padding: 0.5rem 1.6rem;
		border-radius: 20px;
		font-size: 1rem;
		z-index: 2;
	}
	&:after {
		transition: display 200ms;
		display: ${(props) => (props.copy ? "block" : "none")};
		content: "";
		position: absolute;
		top: -1.5rem;
		right: 0.08rem;
		width: 1.6rem;
		height: 1.6rem;
		background: white;
		transform: rotate(45deg);
		z-index: 1;
	}
`;

const Info = () => {
	const [copied, setCopied] = useState({
		copiedNumber: false,
		copiedMail: false,
	});

	const [hover, setHover] = useState({
		hoverOnNumber: false,
		hoverOnMail: false,
	});

	const [device_width] = useDeviceDetect();

	const copyHandler = async (value, type) => {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(
				type === "number"
					? { ...copied, copiedNumber: true }
					: { ...copied, copiedMail: true }
			);
			setTimeout(() => {
				setCopied(
					type === "number"
						? { ...copied, copiedNumber: false }
						: { ...copied, copiedMail: false }
				);
			}, 500);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Cointainer>
			<InfoDiv
				onMouseEnter={() =>
					setHover({ ...hover, hoverOnNumber: true, hoverOnMail: false })
				}
				onMouseLeave={() => setHover({ ...hover, hoverOnNumber: false })}
			>
				<InfoDivRight>
					<BsFillTelephoneFill
						fill="#1CBEF5"
						style={{ width: "1.5rem", height: "1.5rem" }}
						size={"24rem"}
					/>
					<ContactInfo>+91 89894 89894</ContactInfo>
				</InfoDivRight>
				<CopyIcon
					onClick={() => copyHandler("+91 89894 89894", "number")}
					copy={copied.copiedNumber ? true : false}
				>
					{hover.hoverOnNumber || device_width ? (
						<HiDuplicate
							style={{ width: "1.7rem", height: "1.7rem" }}
							fill="white"
						/>
					) : null}
				</CopyIcon>
			</InfoDiv>
			<InfoDiv
				onMouseEnter={() =>
					setHover({ ...hover, hoverOnMail: true, hoverOnNumber: false })
				}
				onMouseLeave={() => setHover({ ...hover, hoverOnMail: false })}
			>
				<InfoDivRight>
					<HiMail
						style={{ width: "1.7rem", height: "1.7rem" }}
						fill="#1CBEF5"
						size={"24rem"}
					/>
					<ContactInfo>support@codematrix.com</ContactInfo>
				</InfoDivRight>

				<CopyIcon
					onClick={() => copyHandler("support@codematrix.com", "mail")}
					copy={copied.copiedMail ? true : false}
				>
					{hover.hoverOnMail || device_width ? (
						<HiDuplicate
							style={{ width: "1.7rem", height: "1.7rem" }}
							fill="white"
						/>
					) : null}
				</CopyIcon>
			</InfoDiv>
		</Cointainer>
	);
};
export default Info;
