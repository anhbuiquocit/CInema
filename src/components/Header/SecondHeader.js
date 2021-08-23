import React, { PureComponent } from 'react';
import { UL } from './../SelectCluster/ul_Cluster';
import styled from 'styled-components';
import { Logo } from './../Logo/Logo';
import { ListMenu } from './../SelectCluster/List_Menu';
const StyledSecondHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    width: 100%;
    /* position: fixed;
        z-index: 1;
        height: 80px;
        background-color: #fff; */
    
`;


export const SecondHeader = () => {
    return (
        <StyledSecondHeader>
            <Logo linkImg="https://betacinemas.vn/Assets/Common/logo/logo.png" width="105px" height="50px" />
            <UL />
            <ListMenu />
        </StyledSecondHeader>
    );
}
