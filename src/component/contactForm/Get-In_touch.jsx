import React from "react";
import styled from "styled-components";

const Wapper = styled.div``;

const Header = styled.div``;
const Heading = styled.div`
	color: white;
	font-weight: 700;
	font-size: 3.5rem;
	margin-bottom: 1rem;
`;

const P = styled.div`
	color: rgba(255, 255, 255, 0.75);
	font-family: "Inter", sans-serif;
	font-weight: 500;
`;

const GetInTouch = () => {
	return (
		<Wapper>
			<Header>
				<Heading>Get in touch.</Heading>
				<P>
					Fill up the form and our team will get back to you within 24 hours.
				</P>
			</Header>
		</Wapper>
	);
};

export default GetInTouch;
