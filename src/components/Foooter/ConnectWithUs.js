import { FooterListCluster, ImgContainer, StyledUL, StyledLI, Styleda, ClusterTitle, FooterBeta, ConnectUL } from './StyledComponent';


export const ConnectWithUs = () => {
    return (
        <FooterBeta>
            <ClusterTitle><span>Kết nối với chúng tôi</span></ClusterTitle>
            <ConnectUL>
                <StyledLI className="li_facebook">
                    <a href="https://www.facebook.com/buiquocanhhh/">
                        <i class="fab fa-facebook-square icon__connect"></i>
                    </a>
                </StyledLI>
                <StyledLI className="li_youtube">
                    <i class="fab fa-youtube icon__connect "></i>
                </StyledLI>
                <StyledLI className="li__twiter">
                    <i class="fab fa-twitter-square icon__connect "></i>
                </StyledLI>
                <StyledLI className="li_telegram">
                    <i class="fab fa-telegram icon__connect "></i>
                </StyledLI>
                <StyledLI className="li_insta">
                    <i class="fab fa-instagram-square icon__connect"></i>
                </StyledLI>
            </ConnectUL>
            <img src="https://s3.cloud.cmctelecom.vn/tinhte1/2018/04/4277831_upload_2018-4-2_14-40-43.png" alt="loading"/>
        </FooterBeta>

    );
}