import React from 'react';
import styled, { css, keyframes } from "styled-components";
import { transparentize, darken, lighten } from 'polished';
import { Theme } from "../theme";

export const StoryHeader = styled.div`
    width: 100%;
    padding: 40px 0;
    font-weight: normal;
    background: ${ Theme.PrimaryColor};
    margin:10px 0 30px 0;
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    &:before{
      color: #fff;
      font-family: 'flexisaf';
      position: absolute;
      top: 0px;
      left: -40px;
      font-size: 120px;
      content: '\\e800';
      display: inline-block;
      opacity: 0.2;
    }
`;
export const StoryContainer = styled.div`
    margin: -8px;
    position: relative;
    z-index: 10;
    font-family: ${Theme.PrimaryFontFamily};
    font-size: ${Theme.PrimaryFontSize};
    color: ${Theme.PrimaryFontColor};
    & *{
        box-sizing: border-box;
    }
`;
export const StoryBody = styled.div`
    position: relative;
    z-index: 10;
`;
export const StoryPanel = styled.div`
    margin: 25px auto;
    padding: 0 100px;
    word-wrap: break-word;
    font-size: 1.1rem;
    line-height: 1.5;
    &>p{
        margin-bottom: 30px;
    }
`;

export const StoryIcon = styled.div`
    display: inline-block;
    font-size: 11px;
    text-align: center;
    min-width:100px;
    padding:10px 0;
    margin: 10px;
    & i{
        display: block;
        text-align: center;
        font-size: 18px;
    }
    & em{
        display: block;
        text-align: center;
        opacity: 0.6;
    }
`;

export const StoryText = styled.p`
    font-size: 0.8rem;
`;

export const StoryDiv = styled.div`
        padding: 10px;
        font-size: ${Theme.PrimaryFontSize};
        background-color: ${transparentize(0.96, Theme.PrimaryGrey)};
        ${props => props.bordered && css`
            border: 1px solid ${transparentize(0.3, Theme.PrimaryGrey)};
        `}
`;

export const StoryH2 = styled.h3`
    font-size: 2rem;
    font-weight: normal;
    font-family: ${Theme.PrimaryFontFamily};
    margin: 0;
    padding: 15px 0;
    position: relative;
    &:after{
        position: absolute;
        content:"";
        top: 0;
        left:0;
        height:3px;
        background: ${ Theme.PrimaryColor};
        width: 80px;
    }
`;

export const StoryH3 = styled.h3`
    font-size: 1.5rem;
    font-weight: normal;
    font-family: ${Theme.PrimaryFontFamily};
    margin: 0;
    padding: 25px 0 15px 0;
    position: relative;
    display:block;
`;


export const StoryColorBox = styled.div`
    min-width: 100px;
    display: inline-block;
    margin: 5px;
    font-size: ${Theme.PrimaryFontSize};
    line-height:1.3;
    color: ${transparentize(0.3, Theme.PrimaryFontColor)};

    &:before{
        content:"";
        display:block;
        margin-bottom: 10px;
        border-radius: ${Theme.PrimaryRadius};
        height: 80px;
        width: 140px;
        background-color: ${props => props.color};
    }
    &:after{
        content: "${props => props.color}";
    }
    & strong{
        display: block;
        color: ${Theme.PrimaryFontColor};
    }
`;

export const StoryNote = styled.div`
    margin: 30px 10px;
    padding: 20px;
    border-left: 3px solid ${Theme.PrimaryMint};
    color: ${transparentize(0.1, Theme.PrimaryFontColor)};
    font-style: italic;
    font-size: 0.9rem;
    background-color: ${transparentize(0.95, Theme.PrimaryMint)};
`;

export const StoryLine = styled.span`
    display: block;
    font-size: 0.8rem;
    opacity: 0.8;
    color: ${Theme.PrimaryDark};
    line-height: 1.8;
`;

export const StoryTable = styled.table`
    margin: 10px 0 30px 0;
    border-collapse: collapse;
    width: 100%;

    & thead{
        & tr{ 
        border-bottom: 2px solid ${Theme.PrimaryColor};
        }
        & th{
            font-weight: bold;
            font-size: 0.8rem;
            text-align: left;
            padding:10px 0;
        }
    }
    & tbody{
        & tr{ 
            border-bottom: 1px solid ${transparentize(0.8, Theme.PrimaryColor)};
            vertical-align: top;
            & td:first-child{
                font-weight: bold;
            }
            & td:first-child, td:nth-child(2){
                min-width: 100px;
            }
         }
        & td{
            font-size: 0.8rem;
            text-align: left;
            padding: 10px 0 10px 10px;
        }
    }
    & em{
        color: ${Theme.PrimaryColor};
        font-size: 0.7rem;
    }
`;


export const StorySample = styled.div`
    padding: ${props => props.padding ? props.padding : "30px"};
    min-height: 180px;
    position: relative;
     ${props => props.background && css `
     background-color: ${props=> props.background};
     `}
    ${props => props.large && css `
      padding: 0;
      min-height: 600px;
    `}
`;

export const StoryCode = styled.div`
    padding: 0;
    white-space: pre-line;
    line-height:1.5;
    & pre{
      background: none;
      margin: 0;
      
      & code{
        padding:20px;
        min-height: 180px;
        display: block;
        font-size: 0.8rem;
      }
    }
`;

export const StoryAttributes = styled.div`
    padding: 20px;
    min-height: 180px;
`;

const Preview = styled.div`
    border: 1px solid #ebedf0;
    border-radius: ${Theme.PrimaryRadius};
    color: ${Theme.PrimaryFontColor};
    & .footSole{
      background: #fff;
      border-bottom: 1px solid #ebedf0;
      display: flex;
      height: 60px;
      flex-direction: row;
      align-content: center;
      align-items: center;
    }
    & .bbtn{
      padding: 10px;
      border-radius: ${Theme.PrimaryRadius};
      border: 1px solid #ebedf0;
      margin-right: 10px;
      font-size: ${Theme.PrimaryFontSize};
      text-align: center;
      background: #fff;
      min-width: 80px;
      cursor: pointer;
      &:first-child{
        margin-left: 10px;
      }
      &.active{
        background-color: ${darken(0.1, Theme.PrimaryColor)};
        border: 1px solid ${darken(0.1, Theme.PrimaryColor)};
        color: #fff;
      }
      &:hover{
        /* background-color: ${lighten(0.37, Theme.PrimaryColor)}; */
      }
      & i{
        display: inline-block;
        margin-right: 5px;
      }
    }
    & .space{
      flex-grow: 1;
    }
    & .previewButton{
      justify-self: flex-start;
    }
    & .codeButton{
      justify-self: flex-end;
    }
    & .attributeButton{
      justify-self: flex-end;
    }
    & .maincontainer{
      background-color: #fff;
      /* min-height: 200px; */
    }

    ${StorySample}{
      display: none;
      ${props=> props.view === "preview" && css `
        display: block;
      `}
    }
    ${StoryCode}{
      display: none;
      ${props => props.view === "code" && css`
        display: block;
      `}
    }
    ${StoryAttributes}{
      display: none;
      ${props => props.view === "attribute" && css`
        display: block;
      `}
    }
`;




export class StoryPreview extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "preview"
    };
  }
  render() {
    return (
      <Preview view={this.state.view}>
        <div className="footSole">
          <div className={`previewButton bbtn ${this.state.view === 'preview' && "active"}`} onClick={() => this.setState({ view: "preview" })}><i className="icon-eye" />Preview</div>
          <div className="space"></div>
          <div className={`codeButton bbtn ${this.state.view === 'code' && "active"}`} onClick={() => this.setState({ view: "code" })}><i className="icon-code" />Code</div>
          <div className={`attributeButton bbtn ${this.state.view === 'attribute' && "active"}`} onClick={() => this.setState({ view: "attribute" })}><i className="icon-list" />Attribute</div>
        </div>
        
        <div className="maincontainer">
          {this.props.children}
        </div>
        
        
      </Preview>
    )
  }
}
const draw = keyframes`
    to{
      stroke-dashoffset: 400;
    }
`;

const BusyBody = styled.svg`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  stroke: ${Theme.PrimaryGrey};
  stroke-width: 4;
  opacity: 0.3;
  
  z-index: 1;
  fill: none;
  stroke-dasharray: 300;
  stroke-dashoffset: 0;
  animation-name: ${draw};
  animation-duration: 10s;
  animation-direction:alternate ;
  animation-timing-function:linear;
  animation-fill-mode: both ;
  animation-iteration-count: infinite;
`;

export class StoryBusyBody extends React.Component {

    render(){
    return(
      <BusyBody viewBox="0 0 4000 4000">
	<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -351.1562 659.7895)" cx="620.86" cy="753.78" rx="61.28" ry="61.28"/>
	<path d="M620.86,693c33.51,0,60.78,27.26,60.78,60.78s-27.26,60.78-60.78,60.78s-60.78-27.26-60.78-60.78S587.35,693,620.86,693
		 M620.86,692c-34.12,0-61.78,27.66-61.78,61.78s27.66,61.78,61.78,61.78s61.78-27.66,61.78-61.78S654.98,692,620.86,692L620.86,692
		z"/>

		<ellipse transform="matrix(0.2298 -0.9732 0.9732 0.2298 -579.083 1232.8843)" cx="489.37" cy="982.29" rx="40.79" ry="40.79"/>
	<path d="M489.37,942c22.22,0,40.29,18.08,40.29,40.29s-18.08,40.29-40.29,40.29c-22.22,0-40.29-18.08-40.29-40.29
		S467.15,942,489.37,942 M489.37,941c-22.81,0-41.29,18.49-41.29,41.29s18.49,41.29,41.29,41.29s41.29-18.49,41.29-41.29
		S512.17,941,489.37,941L489.37,941z"/>

	<circle cx="3680.29" cy="797.33" r="43.39"/>
	<path d="M3680.29,754.44c23.65,0,42.89,19.24,42.89,42.89c0,23.65-19.24,42.89-42.89,42.89s-42.89-19.24-42.89-42.89
		C3637.39,773.68,3656.63,754.44,3680.29,754.44 M3680.29,753.44c-24.24,0-43.89,19.65-43.89,43.89s19.65,43.89,43.89,43.89
		c24.24,0,43.89-19.65,43.89-43.89S3704.53,753.44,3680.29,753.44L3680.29,753.44z"/>

	<path d="M3311.37,1012.26c-4.43,0-8.34-3.14-9.29-7.46l-25.7-116.63c-0.54-2.47-0.09-5.01,1.28-7.15
		c1.37-2.15,3.48-3.63,5.95-4.17l116.63-25.7c0.67-0.15,1.35-0.22,2.03-0.22c4.43,0,8.33,3.14,9.29,7.45l25.7,116.63
		c1.13,5.12-2.12,10.19-7.23,11.32l-116.63,25.7C3312.74,1012.19,3312.05,1012.26,3311.37,1012.26z"/>
	<path d="M3402.28,851.43L3402.28,851.43c4.2,0,7.9,2.97,8.8,7.06l25.7,116.63c0.51,2.34,0.08,4.74-1.21,6.78s-3.3,3.44-5.64,3.95
		l-116.63,25.7c-0.63,0.14-1.28,0.21-1.93,0.21c-4.2,0-7.9-2.97-8.8-7.06l-25.7-116.63c-1.07-4.85,2.01-9.66,6.85-10.73l116.63-25.7
		C3400.99,851.5,3401.64,851.43,3402.28,851.43 M3402.28,850.43c-0.71,0-1.42,0.08-2.14,0.23l-116.63,25.7
		c-5.37,1.18-8.8,6.55-7.61,11.92l25.7,116.63c1.03,4.65,5.19,7.85,9.78,7.85c0.71,0,1.42-0.08,2.14-0.23l116.63-25.7
		c5.37-1.18,8.8-6.55,7.61-11.92l-25.7-116.63C3411.03,853.62,3406.87,850.43,3402.28,850.43L3402.28,850.43z"/>

	<path d="M282.02,1431.77c-2.39,0-4.66-0.88-6.41-2.48l-73.59-67.39c-3.86-3.54-4.13-9.56-0.59-13.42l67.39-73.59
		c1.79-1.95,4.34-3.07,7.01-3.07c2.39,0,4.66,0.88,6.41,2.48l73.59,67.38c1.86,1.71,2.95,4.05,3.06,6.59
		c0.11,2.54-0.77,4.97-2.47,6.83l-67.38,73.59C287.24,1430.65,284.69,1431.77,282.02,1431.77z"/>
	<path d="M275.82,1272.31L275.82,1272.31c2.26,0,4.42,0.83,6.07,2.35l73.59,67.38c1.76,1.62,2.8,3.83,2.9,6.24
		c0.11,2.41-0.73,4.71-2.34,6.47l-67.38,73.59c-1.69,1.85-4.12,2.91-6.64,2.91c-2.26,0-4.42-0.83-6.07-2.35l-73.59-67.38
		c-3.66-3.35-3.91-9.06-0.56-12.72l67.38-73.59C270.87,1273.38,273.29,1272.31,275.82,1272.31 M275.82,1271.31
		c-2.71,0-5.42,1.09-7.38,3.23l-67.38,73.59c-3.71,4.06-3.43,10.41,0.62,14.13l73.59,67.38c1.91,1.75,4.33,2.61,6.75,2.61
		c2.71,0,5.42-1.09,7.38-3.23l67.38-73.59c3.71-4.06,3.43-10.41-0.62-14.13l-73.59-67.38
		C280.66,1272.18,278.24,1271.31,275.82,1271.31L275.82,1271.31z"/>

	<polygon points="3766.55,1625.93 3852.91,1685.77 3757.91,1730.64 	"/>
	<path d="M3766.98,1626.84l84.93,58.85l-93.43,44.13L3766.98,1626.84 M3766.13,1625.03l-8.79,106.43l96.56-45.61L3766.13,1625.03
		L3766.13,1625.03z"/>

	<path d="M766.02,1999.77c-2.38,0-4.66-0.88-6.41-2.48l-73.59-67.38c-3.86-3.54-4.13-9.56-0.59-13.42l67.39-73.59
		c1.79-1.95,4.34-3.07,7.01-3.07c2.38,0,4.66,0.88,6.41,2.48l73.59,67.38c3.86,3.54,4.13,9.56,0.59,13.42l-67.39,73.59
		C771.24,1998.65,768.69,1999.77,766.02,1999.77z"/>
	<path d="M759.82,1840.31L759.82,1840.31c2.26,0,4.42,0.83,6.07,2.35l73.59,67.38c1.76,1.62,2.8,3.83,2.9,6.24
		c0.11,2.41-0.73,4.71-2.34,6.47l-67.38,73.59c-1.69,1.85-4.12,2.91-6.64,2.91c-2.26,0-4.42-0.83-6.07-2.35l-73.59-67.38
		c-1.76-1.62-2.8-3.83-2.9-6.24c-0.11-2.41,0.73-4.71,2.34-6.47l67.38-73.59C754.87,1841.38,757.29,1840.31,759.82,1840.31
		 M759.82,1839.31c-2.71,0-5.42,1.09-7.38,3.23l-67.38,73.59c-3.71,4.06-3.43,10.41,0.62,14.13l73.59,67.38
		c1.91,1.75,4.33,2.61,6.75,2.61c2.71,0,5.42-1.09,7.38-3.23l67.38-73.59c3.71-4.06,3.43-10.41-0.62-14.13l-73.59-67.38
		C764.66,1840.18,762.24,1839.31,759.82,1839.31L759.82,1839.31z"/>
      </BusyBody>
    )
    }
}