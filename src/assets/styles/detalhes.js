import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import DetailBG from "assets/images/detalhes/detalhes.png";

export const DetailContent = styled.div``;

export const DetailRow = styled(Row)``;

export const DetailCol = styled(Col)``;

export const DetailImgContent = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  background: url(${DetailBG});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DetailInfos = styled.div``;

export const DetailImg = styled.img`
  border-radius: 100%;
  width: 90%;
`;

export const DetailTitle = styled.h1``;

export const DetailDesc = styled.p``;

export const DetailCategory = styled.p``;
