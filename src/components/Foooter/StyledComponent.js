import styled, { keyframes } from "styled-components";
//Make keyframe
const fade = keyframes`
    0%{
        
    }
    100%{
        transform: rotatex(360deg);
    }
`;
export const FooterBeta = styled.div`
    
    img{
        width: 80%;

    }
`;


export const ImgContainer = styled.div`
    width: 120px;
    height: 50px;
`;
export const StyledUL = styled.ul`
    list-style: none;
    margin-top: 10px;
`;
export const StyledLI = styled.li`
   .icon__connect{
       cursor:pointer;
       font-size: 2.1rem;
       padding: 2px;
       color: rgb(200, 200, 200);
       
    }
    
   
   
`;
export const Styleda = styled.a`
    text-decoration: none;
    color: #000;
    font-weight: 600;
    font-size: .9rem;
    padding-left: 5px;
`;
//List Cluster
export const FooterListCluster = styled.div`

`;
export const ClusterTitle = styled.div`
    font-size: 1.3rem;
    font-weight: 700;
    
    & > span{
        position: relative;
        padding: 5px 0;    
        ::after{
        content: "";
        width: 100%;
        height: 4px;
        
        background: linear-gradient(rgb(55, 169, 236) ,rgb(9, 114, 182));
        position: absolute;
        left: 0;
        bottom: 0;
        
    }
    }
`;
// process when hover in icon social media
export const ConnectUL = styled(StyledUL)`
    display: flex;

    .li_telegram:hover i{
       color: rgb(180, 133, 106);
       animation: ${fade} linear 1.5s;
       
   }
   .li_facebook:hover i{
       color: rgb(74, 109, 157);
       animation: ${fade} ease-in 1s;
   }
   .li_insta:hover i{
        color: rgb(244, 0, 35);
       animation: ${fade} ease-in 1s;
   }
   .li_youtube:hover i {
        color: red;
       animation: ${fade} ease-in 1s;
   }
   .li__twiter:hover i {
    color: rgb(29, 161, 242);
    animation: ${fade} ease-in 1s;
   }
`;

export const ContactUL = styled(StyledUL)`
    .contact__title{
        font-size: 1rem;
        font-weight: 600;
    }
    :nth-child(2){
        font-size: .8rem;

    }

    .contact_title__flow{
        font-size: .8rem;
        font-weight: 700;
    }
    li{
        padding: 10px 0;
    }
`;
