import styled from "styled-components";

const FlimScheduleDiv = styled.div`
    width: 100%;
    height: 620px;
    position: relative;
    margin: 10px 0;
    &::after{
        content: "";
        width: 100%;
        height: 3px;
        background: linear-gradient(rgb(55,169,236) ,rgb(9,114,182));
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;
const FlimScheduleImg = styled.img`
    width: 100%;
    height: 100%;
`;
export const FlimSchedule = ({ LinkFlim }) => {
    return (
        <FlimScheduleDiv>
            <FlimScheduleImg src={LinkFlim}/>
        </FlimScheduleDiv>

    );
}