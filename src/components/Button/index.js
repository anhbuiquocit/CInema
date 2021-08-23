import styled from 'styled-components';
const StyledButton = styled.button`
    width: ${props => props.width ? props.width : '200px'};
    height: ${props => props.height ? props.height : '30px'};
    color: black;
    background-color: ${props => props.bgColor ? props.bgColor : '#D3D3D3'};
    font-size: 1rem;
    cursor: pointer;
    &:hover{
        background-color: #C0C0C0;

    }
`;

export const Button = ({ children, width, height, bgColor }) => {
    return <StyledButton width={width} height={height} bgColor={bgColor}>{children}</StyledButton>
}
