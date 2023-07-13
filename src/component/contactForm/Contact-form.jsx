import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { ReactComponent as SuccessSubmit } from "./../../Logos/svgs/sucess-submit.svg";
import axios from "axios";

const FormContainer = styled.div`
	width: 100%;
	z-index: 1;
	border: 1px solid #ccc;
	border-radius: 10px;
	background: white;
	padding: 1.5rem;
	box-sizing: border-box;
`;

const Label = styled.label`
	font-weight: 600;
	margin-top: 10px;
	display: block;
	color: rgba(11, 30, 81, 0.7);
	position: relative;
`;

const Icon = styled.div`
	position: absolute;
	width: 2rem;
	height: 78%;
	border-radius: 5px;
	text-align: center;
	display: flex;
	align-items: center;

	margin-left: 10px;
`;
const Input = styled.input`
	width: 100%;
	padding: 1rem 1rem 1rem 3.4rem;
	margin-top: 10px;
	border: 1px solid #ccc;
	color: #0b1e51;
	border-radius: 5px;
	&:focus {
		outline: none;
		outline: 1.4px solid #4530b2;
	}
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

const Select = styled.select`
	width: 100%;
	padding: 1em 1.5em;
	margin-top: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 1rem;
	&:focus {
		outline: none;
		outline: 1.43921px solid #4530b2;
	}
`;

const TextArea = styled.textarea`
	padding: 10px;
	width: 100%;
	margin-top: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	color: #0b1e51;
	font-size: 0.9rem;
	box-sizing: border-box;
	resize: none;
	background: rgba(183, 197, 213, 0.17);
	&:focus {
		outline: none;
		outline: 1.43921px solid #4530b2;
	}
`;

const View = styled.div`
	display: flex;
	align-items: flex-end;
	position: relative;
`;

const SubmitbuttonDiv = styled.div`
	display: flex;
	justify-content: end;
`;

const SubmitButton = styled.button`
	cursor: pointer;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	margin-top: 2rem;
	box-shadow: 0px 5.75684px 11.5137px rgba(69, 48, 178, 0.3);
	transition: all 400ms ease;
	color: white;
	width: ${(props) => (props.success ? "3.5rem" : "10rem")};
	height: ${(props) => (props.success ? "3.5rem" : "3.5rem")};
	background: ${(props) => {
		if (props.success) return "mediumseagreen";
		if (props.isloading) return "#444";
		else return "#5450D6";
	}};
	border-radius: ${(props) => (props.success ? "50%" : "11px")};
	transform: ${(props) => (props.success ? "rotate(360deg)" : null)};
	border: none;
	&:hover {
		letter-spacing: 0.3rem;
	}
`;
const SubmitButtonInnerDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 2rem;
	height: 2rem;
`;

const style = { width: "1.5rem", height: "1.5rem" };

function Form() {
	const [form, setFromInfo] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		techStack: "",
		description: "",
	});
	const [isFocus, setIsFocus] = useState({
		nameFocus: false,
		emailFocus: false,
		phoneNumberFocus: false,
	});
	const [success, setSuccess] = useState(false);
	const [isloading, setIsLoading] = useState(false);

	const { name, email, phoneNumber, techStack, description } = form;
	const { nameFocus, emailFocus, phoneNumberFocus } = isFocus;

	const changeHandler = (e) => {
		const name = e.target.name;
		setFromInfo({ ...form, [name]: e.target.value });
	};

	const submitHandler = async (e) => {
		if (success) return;
		e.preventDefault();
		const formData = new FormData(e.target);
		const sendFormData = async () => {
			setIsLoading(true);
			await axios.post(
				"https://script.google.com/macros/s/AKfycbxqcN-g06DiRV78E3NU5-5xMS-JNI_4Bl9zoKIvsyYK87Braaz0WbMiRkwv_a6Y6wdB/exec",
				formData,
				{
					headers: {
						"Content-Type": "text/plain",
					},
				}
			);
			setSuccess(true);
			setIsLoading(false);
			setFromInfo({
				name: "",
				email: "",
				phoneNumber: "",
				techStack: "",
				description: "",
			});
		};
		sendFormData();
	};
	return (
		<FormContainer>
			<form autoComplete="false" onSubmit={submitHandler} name="form">
				<Label>Name:</Label>
				<View>
					<Icon>
						<AiOutlineUser
							fill={nameFocus ? "#4530b2" : "#AFBCCA"}
							style={style}
						/>
					</Icon>
					<Input
						type="text"
						name="name"
						value={name}
						onChange={changeHandler}
						required
						onFocus={() => setIsFocus({ ...isFocus, nameFocus: true })}
						onBlur={() => setIsFocus({ ...isFocus, nameFocus: false })}
					/>
				</View>

				<Label>Email:</Label>
				<View>
					<Icon>
						<AiOutlineMail
							fill={emailFocus ? "#4530b2" : "#AFBCCA"}
							style={style}
						/>
					</Icon>
					<Input
						type="email"
						name="email"
						value={email}
						onChange={changeHandler}
						required
						onFocus={() => setIsFocus({ ...isFocus, emailFocus: true })}
						onBlur={() => setIsFocus({ ...isFocus, emailFocus: false })}
					/>
				</View>

				<Label>Phone Number</Label>
				<View>
					<Icon>
						<BsTelephone
							fill={phoneNumberFocus ? "#4530b2" : "#AFBCCA"}
							style={style}
						/>
					</Icon>
					<Input
						type="number"
						name="phoneNumber"
						value={phoneNumber}
						onChange={changeHandler}
						required
						onFocus={() => setIsFocus({ ...isFocus, phoneNumberFocus: true })}
						onBlur={() => setIsFocus({ ...isFocus, phoneNumberFocus: false })}
					></Input>
				</View>
				<Label>Tech Stack</Label>
				<Select onChange={changeHandler} name="techStack">
					<option value="">-- Select tech stack --</option>
					<option value="MERN">MEAN</option>
					<option value="MEAN">MEAN</option>
					<option value="MERN">MERN</option>
				</Select>

				<Label>Description</Label>
				<TextArea
					name="description"
					rows="5"
					value={description}
					onChange={changeHandler}
					required
				/>
				<SubmitbuttonDiv>
					<SubmitButton
						type="submit"
						success={success ? true : false}
						isloading={isloading ? true : false}
					>
						{success ? (
							<SubmitButtonInnerDiv>
								<SuccessSubmit />
							</SubmitButtonInnerDiv>
						) : isloading ? (
							"...Loading"
						) : (
							"Submit"
						)}
					</SubmitButton>
				</SubmitbuttonDiv>
			</form>
		</FormContainer>
	);
}

export default Form;
