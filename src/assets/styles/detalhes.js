import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import DetailBG from "assets/images/detalhes/detalhes.png";
import BgTexture from "assets/images/home/home-texture.png";

export const DetailContent = styled.div`
  padding: 4em 0;
  background: url(${BgTexture}) no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const DetailRow = styled(Row)`
`;

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
