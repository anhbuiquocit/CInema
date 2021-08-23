import styled from "styled-components";

const TrailerContainer = styled.div`
    
    
    padding: 30px 0 30px 0 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h2{
        font-weight: 700;
        color: #fff;
        position: relative;
        padding: 5px 0;
        ::after{
            content: "";
            width: 100%;
            height: 3px;
            background: linear-gradient(rgb(55,169,236) ,rgb(9,114,182));
            position: absolute;
            bottom: 0;
            left: 0;
            
        }
    }
`;

export const Trailer = ({data}) => {
    
    return (
        <TrailerContainer>
            <h2>TRAILER</h2>
            <iframe width="850" height="580" src={`https://www.youtube.com/embed/${data}`} title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </TrailerContainer>

    );
}