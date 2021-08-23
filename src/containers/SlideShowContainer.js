import React, { PureComponent } from 'react'
import { SlideShow } from '../components/SlideShow';
import { ShowingFlimContainer } from './ShowingFlimContainer';
import styled from 'styled-components';
import { useState } from 'react';

const StyledSlideShowContainer = styled.div`
    width: 100%;
    /* height: 700px; */
    padding-top: 10px;
    
`;
function SlideShowContainer() {

    const [scopeClicked, setscopeClicked] = useState({
        id: 'FlimShowing',
        title: 'PHIM ĐANG CHIẾU'
    });
    const handleSubmitShowing = (data) =>{
        setscopeClicked(data);
    }
    
    return (
        <>
            <StyledSlideShowContainer className="slideshow">
                <SlideShow />
            </StyledSlideShowContainer>
            <ShowingFlimContainer ShowingFlim={handleSubmitShowing} scopeCLicked={scopeClicked}/>
        </>
    )
}

export default SlideShowContainer
