import styled from "styled-components";
import { Button } from '@material-ui/core';

const ButtonContainer = styled(Button)`
    width: ${props => props.bwidth ? props.bwidth : '200px'};
    
    min-width: 70px;
    outline: none;
    
    background-image: ${props => props.bgi ? props.bgi : ''};
    background-color: ${props => props.bgc ? props.bgc : ''};
    & i{
        padding: 0 5px;
        color: ${props => props.icolor ? props.icolor : ''};
        
    }
    
    &:hover{
        color: #ffff;
    }
`;
export const ButtonCustom = ({ content, bwidth, bgi, bgc, icon, icolor,  }) => {
    return (

        <ButtonContainer bwidth={bwidth} bgi={bgi} bgc={bgc} icolor={icolor}>
            <i class={icon} ></i>
            {content}
        </ButtonContainer>

    );
}