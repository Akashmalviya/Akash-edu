import React from "react";
import styled from "styled-components";
import { ReactComponent as CompanyLogo1 } from "./../../Logos/svgs/compnay-logo[1].svg";
import { ReactComponent as CompanyLogo2 } from "./../../Logos/svgs/compnay-logo[2].svg";
import { ReactComponent as CompanyLogo3 } from "./../../Logos/svgs/compnay-logo[3].svg";
import { ReactComponent as CompanyLogo4 } from "./../../Logos/svgs/compnay-logo[4].svg";

const LogoWapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-left: 3rem;
	padding-right: 3rem;
`;
const LogoContainer = styled.div`
	padding-top: 1.5rem;
	padding-bottom: 2rem;
`;
const CompanyLogo = () => {
	return (
		<LogoWapper>
			<LogoContainer>
				<CompanyLogo1 style={{ height: "100%", width: "100%" }} />
			</LogoContainer>
			<LogoContainer>
				<CompanyLogo2 style={{ height: "100%", width: "100%" }} />
			</LogoContainer>
			<LogoContainer>
				<CompanyLogo3 style={{ height: "100%", width: "100%" }} />
			</LogoContainer>
			<LogoContainer>
				<CompanyLogo4 style={{ height: "100%", width: "100%" }} />
			</LogoContainer>
		</LogoWapper>
	);
};
export default CompanyLogo;
