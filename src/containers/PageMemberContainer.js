import React, { useState } from 'react'
import { FormLogin } from '../components/FormLogin'
import styled from 'styled-components'
import { FormRegister } from '../components/FormLogin/FormRegister';
const StyledPageMember = styled.div`
    margin-top: 100px;
`;
const ColFormContainer = styled.div`
    display: flex;
    justify-content: center;
    
`;
const StyledTitle = styled.div`
    display: flex;
    
`;
const StyledTitleItem = styled.div`
    width: 50%;
    text-align: center;
    font-size: 1rem;
    min-height: 50px;
    line-height: 50px;
    font-weight: 500;
    color: ${props => props.colorText ? props.colorText : '#000'};
    cursor: pointer;
    position: relative;
    background-color: ${props => props.bgColor ? props.bgColor : ''};
    ::after{
        content: "";
        width: 100%;
        height: 1px;
        background-color: rgb(6, 134, 204);
        position: absolute;
        bottom: 0;
        left: 0;
    }
    /* background-color: rgb(6, 134, 204); */

`;
function PageMemberContainer(props) {
    const [optionChoose, setoptionChoose] = useState([
        {
            id: "login",
            title: "ĐĂNG NHẬP",
            bgcolor: 'rgb(3, 89, 157)',
            colorText: '#fff'
        },
        {
            id: "register",
            title: "ĐĂNG KÝ",
            bgcolor: 'rgb(3, 89, 157)',
            colorText: '#fff'
        }
    ]);
    const [optionSelected, setoptionSelected] = useState({
        id: "login",
        title: "ĐĂNG NHẬP",
        bgcolor: 'rgb(3, 89, 157)',
        colorText: '#fff'
    });
    const onhandleClick = (data) => {
        setoptionSelected(data);
    }
    const showListOption = (data) => {
        let reslut = null;
        if (data !== null) {
            reslut = data.map(item => {
                return (
                    <StyledTitleItem bgColor={optionSelected.id === item.id ? optionSelected.bgcolor : ''}
                        onClick={() => onhandleClick(item)}
                        colorText={optionSelected.id === item.id ? optionSelected.colorText : '#000'}
                    >{item.title}</StyledTitleItem>
                )
            });
        }
        return reslut;
    }

    return (
        <StyledPageMember className="container">
            <ColFormContainer className="row">
                <div className="col col-md-6">
                    <StyledTitle>
                        {showListOption(optionChoose)}
                    </StyledTitle>
                    {optionSelected.id === 'login' ? <FormLogin/> : <FormRegister/>}
                </div>
            </ColFormContainer>
        </StyledPageMember>
    )
}

export default PageMemberContainer
