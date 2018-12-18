import React from "react";
import { connect } from "dva";
import styled from "styled-components";
import LoginForm from './Forms/Login.forms';
import Neco from '../../assets/yay.jpg'
import { Link } from "dva/router";


const Wrapper = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  background: white !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between
`;

const LinkWrapper = styled(Link)`
padding: 5px;
`

const Imagewrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  `
const LoginDiv = styled.div`
  background: ${props => props.theme.greyLight};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
  margin: auto auto;
  width: 20%;
  height: 40%;
  padding: 40px;

  /* Custom, iPhone Retina */
  @media only screen and (max-width: 320px) {
    margin: 25% auto 0 auto;
    width: 80%;
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 480px) {
    margin: 25% auto 0 auto;
    width: 80%;
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width: 992px) {
    margin: 25% auto 0 auto;
    width: 60%;
  }
`;
const Footer = styled.div`
  max-width: 550px;
  text-align: center;
  color: #86a3bf;
  font-size: 12px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    min-width: 87%;
    padding: 20px 0;
    position: fixed;
    bottom: 0;
  }

  @media (max-width: 1024px) {
    max-width: 300px;
    padding: 20px 0;
    position: fixed;
    margin-left: auto;
    bottom: 0;
  }
`;


const Headers = styled.div`
  padding: 0 0 20px 0;
  margin-bottom: 30px;
`;

const HeaderTxt = styled.h1`
  color: #666;
  font-size: large;
  line-height: 2;
  font-weight: 700;
`;

const ForgotPassword = styled.div`
  color: #666;
  font-size: 12px;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      passwordWarn: false,
      userIdWarn: false
    };
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn(data) {
    this.props.dispatch({
      type: "authentication/login", data
    });
  }

  render() {
    return (
      <Wrapper>
        <Imagewrapper>
          <img src={Neco} height="150px" />
        </Imagewrapper>
        <LoginDiv>

          <div className="main-div">

            <Headers>

              {/* <HeaderTxt> School Sign In </HeaderTxt> */}
              <HeaderTxt> Welcome, Please sign in </HeaderTxt>

            </Headers>
            <LoginForm signIn={this.handleSignIn} />
            <ForgotPassword>Forgot your password? <LinkWrapper to='/'> click here</LinkWrapper></ForgotPassword>
          </div>
        </LoginDiv>
        <Footer> Copyright © {new Date().getFullYear()}, ... | ALL RIGHTS RESERVED</Footer>
      </Wrapper>
    );
  }
}

export default connect(({ authentication }) => ({ authentication }))(Login);
