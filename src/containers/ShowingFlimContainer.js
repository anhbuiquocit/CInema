import styled from "styled-components";
import React, { PureComponent } from 'react'
import { useState } from "react";
import { Flim } from "../components/ShowingFlim/Flim";
import { useSelector, useDispatch } from "react-redux";
import { setFlimClick } from "../features/listFlim/FlimClick";
const StyledOptionUL = styled.ul`
    
    list-style: none;
    display: flex;
    justify-content: center;
   li + li {
       padding-left: 10px;
   }
`;
const StyledOptionLI = styled.li`
    font-size: 1.7rem;
    font-weight: 600;
    cursor: pointer;
    
    &:nth-child(2){
        padding: 0 20px;
    }
`;
const OptionDiv = styled.div`
    display: flex;
    justify-content: center;
    &::after{
        content: "";
        width: 780px;
        height: 2px;
        /* margin-left: 50px; */
        position: absolute;
        top: 95px;
        background-color: rgb(200, 200, 200);
    }
`;
const OptionDivContainer = styled.div`
    padding-top: 50px;
    position: relative;
    position: relative;
    &::after{
        content: "";
        width: 100%;
        height: 2px;
        background-color: rgb(204, 204, 204);
        position: absolute;
        bottom: 0;
    }
`;
const FlimContainer = styled.div`
    padding-bottom: 100px;
`;
export const ShowingFlimContainer = (props) => {
    const listFlim = useSelector(state => state.listFlim);
    const dispatch = useDispatch();
    const { scopeCLicked } = props;
    
    const [listMenu, setlistMenu] = useState([
        {
            id: 'Flimprepare',
            title: 'PHIM SẮP CHIẾU'
        },
        {
            id: 'FlimShowing',
            title: 'PHIM ĐANG CHIẾU'
        },
        {
            id: 'SpeacialFlim',
            title: 'SUẤT CHIẾU ĐẶC BIỆT'
        }
    ]);

    const handleClick = (data) => {
        props.ShowingFlim(data);
        
    }

    let showListMenu = listMenu.map((item, key) => {
        return (

            <StyledOptionLI
                key={key}
                className={scopeCLicked.id === item.id ? 'is-Active__chooseCategory' : ''}
                onClick={() => handleClick(item)}
            >{item.title}</StyledOptionLI>
        );
    });
    const onhandleSubmitFlim = (data) =>{
        console.log(data);
        let itemFlimClick = listFlim.find(item => item.id === data);
        dispatch(setFlimClick(itemFlimClick));
    }
    let showListFlim = listFlim.map((item) => {
        return (
            <div className="col col-xl-3">
                <Flim data={item} handleSubmitFlim={onhandleSubmitFlim}/>
            </div>

        );
    });
    return (
        <OptionDivContainer className="container">
            <OptionDiv className="row">
                <div className="col col-xl-10">
                    <StyledOptionUL>

                        {showListMenu}
                    </StyledOptionUL>
                </div>

            </OptionDiv>
            <FlimContainer className="row">
               {showListFlim}

            </FlimContainer>
        </OptionDivContainer>

    );
};