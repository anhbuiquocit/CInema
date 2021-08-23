import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { FirstHeader } from '../components/Header';
import { SecondHeader } from '../components/Header/SecondHeader';


const FristHeaderContainer = styled.div`
    top: 0;
        width: 100%;
    background-color: #000;
    z-index: 1;
    display: block;
    /* position: sticky; */
    
`
const SecondHeaderContainer = styled.div`
    width: 100%;
    position: fixed;
    z-index: 1;
    height: 80px;
    background-color: #fff;
    top: 0;
`;
function HeaderContainer() {
    return (

        <div className="header">
            <FristHeaderContainer>
                <div class="container">
                    <div class="row">
                        <div className="col col-xl-12">
                            <FirstHeader />
                        </div>
                    </div>

                </div>
            </FristHeaderContainer>
            <SecondHeaderContainer>
                <div className="container">

                    <div class="row">
                        <div className="col col-xl-12">
                            <SecondHeader />
                        </div>
                    </div>
                </div>

            </SecondHeaderContainer>




        </div>

    )
}

export default HeaderContainer
