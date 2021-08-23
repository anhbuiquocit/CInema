import styled from "styled-components";

export const FlimContainer = styled.div`
    
`;
export const ImgContainer = styled.div`
    /* height: 350px; */
    width: 100%;
    position: relative;
    img{
        width: 100%;
        height: 80%;
        border-radius: 20px;
        
    }
   &:hover .icon_play{
       display: block;
       
   }
   &:hover img{
    -webkit-filter: drop-shadow(0px 0px 8px black);
   }
   .icon_play{
       position: absolute;
       top: 45%;
       left: 40%;
       opacity: 0.8;
       font-size: 4rem;
       display: none;
   }
`;

export const DesContainer = styled.div`
    &>a{
        font-size: 1.2rem;
        font-weight: 700;
        color: rgb(51, 122, 183);
    }
`;
export const DesDetailContainer = styled.div`
    & div{
        display: flex;
        
    }
    & h4{
        font-size: .9rem;
        padding-right: 5px;
    }
    & span{
        font-size: .8rem;
    }
    .dateShow{
        color: blue;
    }
`;