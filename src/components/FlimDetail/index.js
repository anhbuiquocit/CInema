import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonCustom } from "../FormLogin/Button";
const FlimDetailContainer = styled.div`
  margin-top: 80px;
`;
const StyledTitle = styled.div`
  display: flex;
`;

const DetailContent = styled.div`
  display: flex;
  & img {
    width: 260px;
    height: 400px;
    border-radius: 20px;
    margin: 15px 50px 0 0;
  }
`;
const DetailContentDes = styled.div``;
const AuthorContainer = styled.div``;
const RowContainerAuthor = styled.div`
  display: flex;
  align-items: center;
`;
const StyledBold = styled.div`
  font-weight: 700;
  margin: 5px 10px 0 0;
`;
const StyledNormal = styled.div``;
const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;
export const FlimDetail = (props) => {
  const { data } = props;

  const handleClick = () => {};
  return (
    <FlimDetailContainer>
      <StyledTitle>
        <h4>Trang chủ > </h4>
        <h4>{data.name}</h4>
      </StyledTitle>
      <DetailContent>
        <a href="#">
          <img src={data.link_img} alt="loading" />
        </a>
        <DetailContentDes>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <AuthorContainer>
            <RowContainerAuthor>
              <StyledBold>ĐẠO DIỄN:</StyledBold>
              <StyledNormal>{data.director}</StyledNormal>
            </RowContainerAuthor>
            <RowContainerAuthor>
              <StyledBold>DIỄN VIÊN:</StyledBold>
              <StyledNormal>{data.actor}</StyledNormal>
            </RowContainerAuthor>
            <RowContainerAuthor>
              <StyledBold>THỂ LOẠI:</StyledBold>
              <StyledNormal>{data.category}</StyledNormal>
            </RowContainerAuthor>
            <RowContainerAuthor>
              <StyledBold>THỜI LƯỢNG:</StyledBold>
              <StyledNormal>{data.time} phút</StyledNormal>
            </RowContainerAuthor>
            <RowContainerAuthor>
              <StyledBold>NGÔN NGỮ:</StyledBold>
              <StyledNormal>{data.language}</StyledNormal>
            </RowContainerAuthor>
            <RowContainerAuthor>
              <StyledBold>NGÀY KHỞI CHIẾU:</StyledBold>
              <StyledNormal>{data.date_show}</StyledNormal>
            </RowContainerAuthor>
            <StyledLink to={`/booktickets/${data.id}`}>
              <ButtonCustom
                content="Book now"
                bgc="rgb(230, 230, 230) !important"
                icon="fas fa-book"
                icolor="#fff"
              />
            </StyledLink>
          </AuthorContainer>
        </DetailContentDes>
      </DetailContent>
    </FlimDetailContainer>
  );
};
