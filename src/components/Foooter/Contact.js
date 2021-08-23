import { FooterBeta } from "./StyledComponent";
import { FooterListCluster, ImgContainer, StyledUL, StyledLI, Styleda, ClusterTitle, ContactUL } from './StyledComponent';


export const Contact = () => {
    return (
        <FooterBeta>
            <ClusterTitle><span>LIÊN HỆ</span></ClusterTitle>
            <ContactUL>
                <StyledLI className="contact__title">
                    CÔNG TY CỔ PHẦN BETA MEDIA
                </StyledLI>
                <StyledLI>
                    Giấy chứng nhận ĐKKD số: 0106633482
                </StyledLI>
                <StyledLI>
                    Tầng 3, số 595, đường Giải Phóng, phường Giáp Bát, quận Hoàng Mai, thành phố Hà Nội
                </StyledLI>
                <StyledLI className="contact_title__flow">
                    Liên hệ hợp tác kinh doanh:
                </StyledLI>
                <StyledLI>
                    minh@betacorp.vn
                </StyledLI>
            </ContactUL>
        </FooterBeta>

    );
}