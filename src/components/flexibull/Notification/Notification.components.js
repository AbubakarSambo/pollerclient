import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Theme } from '../../theme';

export const Notification = styled.div`
    padding: 25px 0;
    box-shadow: 0 2px 30px rgba(0, 0, 0, .2);
    margin: 2% 1% 0 0;
    right: 0%;
    min-width: 15%;
    max-width: 25%;
    display: block;
    color: #FFF;
    position: absolute;
    border-radius:  ${props => props.rounded ? "22px" : Theme.PrimaryRadius};
    ${props => props.error && css`
        background-color: ${Theme.PrimaryRed};
    `}
    ${props => props.success && css`
        background-color: ${Theme.PrimaryColor};
    `}
    ${props => props.info && css`
        background-color: ${Theme.PrimaryBlue};
    `}
    z-index: 99;

    & span, i{
        display: inline-block;
        padding: 0 20px;
    }
    & span{
        font-size: ${Theme.PrimaryFontSize};
        font-weight: 500;
    }

    ${props => props.icon && css`
        padding: 12px 12px;
        min-width: 44px;
    `} 
    ${props => props.iconLeft && css`
        & i{
            margin-left: -8px;
            padding-right: 10px;
        }
    `}
    ${props => props.iconRight && css`
        & i{
            padding-left: 10px;
            margin-right: -8px;
        }
    `}
`;

Notification.propTypes = {
    icon: PropTypes.bool
};
