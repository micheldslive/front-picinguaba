import styled from "styled-components";
import { Link } from "react-router-dom";
import BgTexture from "../images/alimentacao/bg-texture.png";

export const AlContent = styled.div`
  padding: 4em 0;
  background: url(${BgTexture}) no-repeat;
  background-position: center;
  background-size: cover;
`;

export const AlContainer = styled.section`
  display: flex;
  @media (max-width: 1079px) {
    flex-direction: column;
  }
`;

export const AlGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1079px) {
    width: 100%;
  }

  @media (min-width: 1080px) {
    &:nth-child(1),
    &:nth-child(3) {
      width: 30%;
    }
    &:nth-child(2) {
      width: 40%;
    }
  }
`;

export const AlCardContent = styled.div`
  margin: 0 auto;
  height: 310px;
  width: 100%;
  max-width: 350px;
  position: relative;
  perspective: 1000px;
`;

export const AlCardRow = styled.div`
  position: relative;
  z-index: 1;
  transition: 0.7s;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  perspective: inherit;
`;

export const AlCardLink = styled(Link)`
  padding-bottom: 25px;
`;

export const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotate(0);
  transition: 0.7s;
  perspective: inherit;
  transform-style: preserve-3d;

  ${AlCardRow}:hover & {
    z-index: 900;
    transform: rotateY(180deg);
  }
`;

export const CardBack = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
  transition: 0.7s;
  perspective: inherit;
  transform-style: preserve-3d;

  ${AlCardRow}:hover & {
    z-index: 1000;
    transform: rotateY(0deg);
  }
`;

export const AlCard = styled.div`
  background: #ffffff;
  box-shadow: 2px 4px 13px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 20px;
`;

export const AlImg = styled.img`
  border-radius: 15px;
  width: 100%;
`;

export const AlImgCenter = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding-bottom: 25px;
`;

export const AlTitleContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-bottom: 15px;
`;

export const AlIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const AlTitle = styled.h1`
  font-family: "Staatliches", cursive;
  font-weight: normal;
  font-size: 28px;
  text-transform: uppercase;
  color: var(--darkBlue);
`;

export const AlDescContent = styled.div`
  width: 100%;
  height: 200px;
  perspective: inherit;
`;
export const AlDesc = styled.p`
  font-size: 16px;
`;
