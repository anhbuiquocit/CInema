import React, { PureComponent } from 'react'
import styled from 'styled-components';
import { FlimDetail } from '../components/FlimDetail';
import { Trailer } from '../components/Trailer';
import { useSelector } from 'react-redux';
const TrailerContainer = styled.div`
    margin: 50px 0 0 0;
    background-color: #3c3e4d;
`;
function FlimDetailContainer() {
    const flimChoose = useSelector(state => state.flimClick)
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col col-md-12">
                        <FlimDetail data={flimChoose}/>

                    </div>
                </div>
            </div>
            <TrailerContainer>
                <div className="container">
                    <div className="row">
                        <div className="col col-md-12">
                            <Trailer data={flimChoose.yt_trailler} />

                        </div>
                    </div>
                </div>
            </TrailerContainer>
        </>
    )
}

export default FlimDetailContainer;
