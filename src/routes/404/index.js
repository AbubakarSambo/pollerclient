import React from "react";
import styled from "styled-components";
import Image404 from "../../assets/404.svg";
import { Panel } from "../../components/flexibull";



const FourWrapper = styled.div`
  background: ${props => props.theme.bgLight};
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Biggie = styled.h1`
  font-weight: 300;
  font-size: 4em;
  color: ${props => props.theme.grey};
  display: block;
  line-height: 80px;
`;

const Msg = styled.p`
  font-size: 1.2em;
  font-weight: 400;
  display: block;
  line-height: 60px;
`;

const Redirect = styled.span`
  line-height: 80px;
  ::before {
    content: "";
    height: 2px;
    width: 50px;
    background: ${props => props.theme.info};
    vertical-align: middle;
    display: inline-block;
    margin-right: 10px;
  }
`;

const Info = styled.div`
  margin-top: 25%;
  width: 50%;
`;

const ErrorImage = styled.div`
  margin-top: 15%;
  width: 50%;
`;

const Sticky = styled.div`
  background: ${props => props.theme.bgLight};
  width: 100%;
  bottom: 0;
  left: 0;
  position: fixed;
`;

export const Four04 = () => {
  return (
    <Panel padding="20px">
      <FourWrapper>
        <Container>
          <Info>
            <Biggie>Oops, the page does not exist</Biggie>
            <Msg>Not to worry, why don't you try this link</Msg>
            <Redirect>
              {/* <StyledLink to="/dashboard">Go to Dashboard</StyledLink> */}
            </Redirect>
          </Info>
          <ErrorImage>
            <img src={Image404} alt="" />
          </ErrorImage>
        </Container>
      </FourWrapper>
    </Panel>

  );
};

// export default Four04;
