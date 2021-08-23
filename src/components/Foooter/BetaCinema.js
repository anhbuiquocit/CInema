import styled from "styled-components";
import {FooterBeta, ImgContainer, StyledUL, StyledLI, Styleda} from './StyledComponent';
import { Logo } from "../Logo/Logo";

export const BetaCinema = () => {
    return (

        <FooterBeta>
            <ImgContainer>
                <Logo linkImg="https://betacinemas.vn/Assets/Common/logo/logo.png" width="100%" height="100%" />
            </ImgContainer>
            <StyledUL>
                <StyledLI>
                    <i class="fas fa-chevron-right"></i>
                    <Styleda href="#">Tuyển dụng</Styleda>
                </StyledLI>
                <StyledLI>
                    <i class="fas fa-chevron-right"></i>
                    <Styleda href="#">Giới thiệu</Styleda>
                </StyledLI>
                <StyledLI>
                    <i class="fas fa-chevron-right"></i>
                    <Styleda href="#">Liên hệ</Styleda>
                </StyledLI>
                <StyledLI>
                    <i class="fas fa-chevron-right"></i>
                    <Styleda href="#">F.A.Q</Styleda>
                </StyledLI>
                <StyledLI>
                    <i class="fas fa-chevron-right"></i>
                    <Styleda href="#">Hoạt động xã hội</Styleda>
                </StyledLI>
                <StyledLI>
                    <i class="fas fa-chevron-right"></i>
                    <Styleda href="#">Điều khoản sử dụng</Styleda>
                </StyledLI>
                <StyledLI>
                    <i class="fas fa-chevron-right"></i>
                    <Styleda href="#">Liên hệ quảng cáo</Styleda>
                </StyledLI>
                <StyledLI>
                    <i class="fas fa-chevron-right"></i>
                    <Styleda href="#">Điều khoản bảo mật</Styleda>
                </StyledLI>
            </StyledUL>
        </FooterBeta>
    );
}