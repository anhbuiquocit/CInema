import styled from "styled-components";
import { Link } from "react-router-dom";
import {FlimContainer, ImgContainer, DesContainer, DesDetailContainer} from './StyledFlim';
export const Flim = (props) => {
    const {data} = props;
    const handleSubmitFlim = () =>{
        props.handleSubmitFlim(data.id);
        
    }
    return (
        <FlimContainer>
            <ImgContainer>
                <a href="#"><img src={data.link_img} /></a>
                <Link to="#">
                    <i class="fas fa-play-circle icon_play"></i>
                </Link>
            </ImgContainer>
            <DesContainer>
                <Link to={`/flimdetail/${data.id}`}>
                    <p onClick={handleSubmitFlim}>{data.name}</p>
                </Link>
                <DesDetailContainer>
                    <div>
                        <h4>Thể loại:</h4>
                        <span>{data.category}</span>
                    </div>
                    <div>
                        <h4>Thời lượng:</h4>

                        <span>{data.time}</span>
                    </div>
                    <div>
                        <h4>Ngày khởi chiếu:</h4>

                        <span className="dateShow">{data.date_show}</span>
                    </div>
                </DesDetailContainer>
            </DesContainer>
        </FlimContainer>
    );
}