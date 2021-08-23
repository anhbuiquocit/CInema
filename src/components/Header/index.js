import styled from 'styled-components';
const StyledFistHeader = styled.div`
    width: 100%;
    height: 22px;
    background-color: ${props => props.bgColor ? props.bgColor : '#000'};
    
    
    display: flex;
    justify-content: flex-end;
    align-items:center;
`;
const Elementa = styled.a`
    color: #fff;
    text-decoration: none;
    position: relative;
    &:hover{
        text-decoration: underline;
    }
    &:nth-child(2){
        padding-left: 10px;
    }
    &:first-child::after{
        content: "";
        width: 2px;
        height: 18px;
        background-color: #fff;
        position: absolute;
        right: -6px;
        top: 3px;
    }
`;
export const FirstHeader = ({bgColor}) =>{
    return (
        <StyledFistHeader>
            <Elementa href="#">Đăng nhập</Elementa>
            <Elementa href="#">Đăng ký</Elementa>
        </StyledFistHeader>
    );
}