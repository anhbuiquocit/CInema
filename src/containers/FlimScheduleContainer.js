import React from 'react'

import styled from 'styled-components';
import { FlimSchedule } from './../components/FlimSchedule/index';

const ScheduleContainer = styled.div`
    margin-top: 80px;
    background-color: #000;
    
   
`;
const FlimContainer = styled.div`
    position: relative;
     &::after{
        content: "";
        width: 100%;
        height: 3px;
        background: linear-gradient(rgb(55,169,236) ,rgb(9,114,182));
        position: absolute;
        bottom: 10px;
        left: 0;
    }
`;
const TitleContainer = styled.div`
    
    text-align:center;
    padding: 20px 0;
    &>span{
        
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
        position: relative;
        ::after{
            content: "";
            width: 100%;
            height: 4px;
            background: linear-gradient(rgb(55,169,236) ,rgb(9,114,182));
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
`;

function FlimScheduleContainer() {
    return (
        <ScheduleContainer>

            <div className="container">
                <div className="row">
                    <div className="col col-md-12">
                        <TitleContainer>

                            <span className="title">PHIM SẮP CHIẾU</span>
                        </TitleContainer>
                    </div>
                </div>
                <FlimContainer className="row">
                    <div className="col col-xl-4">
                        <FlimSchedule LinkFlim="https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" />
                    </div>
                </FlimContainer>

                <FlimContainer className="row">
                    <div className="col col-xl-4">
                        <FlimSchedule LinkFlim="https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" />
                    </div>
                </FlimContainer>

                <FlimContainer className="row">
                    <div className="col col-xl-4">
                        <FlimSchedule LinkFlim="https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" />
                    </div>
                </FlimContainer>

                <FlimContainer className="row">
                    <div className="col col-xl-4">
                        <FlimSchedule LinkFlim="https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" />
                    </div>
                </FlimContainer>
            </div>
        </ScheduleContainer>
    )
}

export default FlimScheduleContainer;
