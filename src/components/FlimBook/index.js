import styled from "styled-components";
import React, {useState} from "react";
const StyledFlimContainer = styled.div`
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    position: relative;
    &::after{
        content: "";
        width: 100%;
        height: 1px;
        background-color: #000;
        position: absolute;
        bottom: 0;
    }
`;

const DescriptionContainer = styled.div`
    display: flex;
    & img{
        width: 150px;
        height: 100px;
        margin: 0 15px 0 0 ;
    }
`;
const Description = styled.div`

`;
const ControlFlimContainer = styled.div`
    display: flex;
`;
const PrePrice = styled.div`
    font-size: 1.2rem;
    margin-right: 30px;
`;
const TotalPrice = styled(PrePrice)`
    margin-left: 30px;
`;
const ControlFlim = styled.div`
    display: flex;
    & input{
        height: 30px;
    }
    & input[type="button"]{
        width: 30px;
    }
    & input[type="text"]{
        text-align: center;
        
    }
`;
const DeleteFlim = styled.div`
    font-size: 1.1rem;
    :hover{
        color: red;
    }
    cursor: pointer;
`;
export const FlimBook = ({data}) => {
    const [count, setcount] = useState(0);
    let Price_Flim = 80000;
    const handleClickPlus = () =>{
        setcount(count + 1);
    }
    const handleClickMinus = () =>{
        if(count > 0){
            setcount(count - 1);
        }
    }
    return (
        <StyledFlimContainer>
            <DescriptionContainer>
                <img src={data.link_img} />
                <Description>
                    <h3>{data.name}</h3>
                    <span>Thời gian: {data.date_show}</span>
                </Description>
            </DescriptionContainer>
            <ControlFlimContainer>
                <PrePrice>
                    {Price_Flim}
                </PrePrice>
                <ControlFlim>
                    <input type="button" value="-" name="minus" onClick={handleClickMinus}/>
                    <input type="text" value={count} readOnly/>
                    <input type="button" value="+" name="plus" onClick={handleClickPlus}/>
                </ControlFlim>
                <TotalPrice>
                    {Price_Flim * count}
                </TotalPrice>
            </ControlFlimContainer>
            <DeleteFlim>
                Xoá
            </DeleteFlim>
        </StyledFlimContainer>

    );
}