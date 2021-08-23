import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledUL = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
`;
const StyledLI = styled.li`
    
    
`;
const Styleda = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 1rem;
    padding-left: 10px;
    font-weight: 700;
    &:hover{
        color: rgb(1, 82, 153);
        text-decoration: none;
    }
`;

export const ListMenu = () =>{
    return (
        <StyledUL>
            <StyledLI><Styleda to="#">LỊCH CHIẾU THEO RẠP</Styleda></StyledLI>
            <StyledLI><Styleda to="/flimschedule">PHIM</Styleda></StyledLI>
            <StyledLI><Styleda to="#">RẠP</Styleda></StyledLI>
            <StyledLI><Styleda to="#">GIÁ VÉ</Styleda></StyledLI>
            <StyledLI><Styleda to="#">TIN MỚI VÀ ƯU ĐÃI</Styleda></StyledLI>
            <StyledLI><Styleda to="#">NHƯỢNG QUYỀN</Styleda></StyledLI>
            <StyledLI><Styleda to="/login">THÀNH VIÊN</Styleda></StyledLI>
        </StyledUL>

    );
}