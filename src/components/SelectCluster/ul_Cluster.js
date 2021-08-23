import styled from "styled-components";

const StyledUL = styled.ul`
    
    list-style-type:none;
    cursor:pointer;
    padding-top: 5px;
    z-index: 1;
`;
const StyledLI = styled.li`
    
    width: 130px;
    height: 30px;
    color: rgba(15, 15, 15, 1);
    text-align:center;
    border: 1px solid rgb(180, 180, 180);
    border-radius: 15px;
    font-size: 1rem;
    font-weight: 700;
    position: relative;
    z-index: 0;
    
    
    &:hover{
        color: rgb(3, 83, 153);
    }
    &:hover .ul_sub{
        display: block;
    }
    

    
    
`;
const StyledUL_Sub = styled.ul`
    list-style-type:none;
    display: none;
    font-weight: 400;
    
    cursor:pointer;
    z-index: 1;
    
    
    top: 35px;
    &::before{
        content: "";
        position: absolute;
        top: 15px;
        left: 5px;
        border-width: 18px 23px;
        border-style: solid;
        border-color: transparent transparent rgb(3, 83, 153) transparent;
        z-index: 1;
        /* display: none; */
    }
    &::after{
        content: "";
        position: absolute;
        width: 150px;
        height: 8px;
        background-color: rgb(3, 83, 153);
        top: 39px;
        left: 37px;
    }
`;
const StyledLI_Sub = styled.li`
    width: 190px;
    height: 40px;
    color: rgba(15, 15, 15, 1);
    text-align:center;
    border: 1px solid rgb(180, 180, 180);
    background-color: rgb(230, 230, 230);
    display: flex; 
    z-index: 1;
    position: relative;
    justify-content: space-between;
    align-items: center;

    p{
        padding: 7px 0 0 10px;
    }
    i{
        padding-right: 5px;
    }

`;

export const UL = () => {
    return (
        <StyledUL>
            <StyledLI>
                <p class="li_title">
                    Tp Hà nội
                    <i class="fas fa-chevron-right"></i>
                </p>
                <StyledUL_Sub className="ul_sub">
                    <StyledLI_Sub>
                        <p>TP Hà nội</p>
                        <i class="fas fa-chevron-right"></i></StyledLI_Sub>
                    <StyledLI_Sub>
                        <p>TP Hồ Chí Minh</p>
                        <i class="fas fa-chevron-right"></i></StyledLI_Sub>
                    <StyledLI_Sub>
                        <p>TP Hưng Yên </p>

                        <i class="fas fa-chevron-right"></i></StyledLI_Sub>
                    <StyledLI_Sub>
                        <p>TP Nam Định </p>
                        <i class="fas fa-chevron-right"></i></StyledLI_Sub>
                </StyledUL_Sub>
            </StyledLI>

        </StyledUL>
    );
}