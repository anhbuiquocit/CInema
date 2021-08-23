import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogo = styled(Link)`
    width: ${props => props.width} !important; 
    height: ${props => props.height} !important;
    
`;
const StyledIMG = styled.img`
    width: 100%;
    height: 100%;
`;
export const Logo = ({linkImg, width, height}) =>{
    return (
        <StyledLogo to="/" width={width} height={height} link="#">
            <StyledIMG src={linkImg} alt="loading"/>
        </StyledLogo>
    );
}