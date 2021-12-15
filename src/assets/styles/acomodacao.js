import styled from "styled-components";
import { Container } from "assets/styles/global";
import BgTexture from "assets/images/acomodacao/bg-texture.png";
import Fish from "assets/images/acomodacao/fish.png";
import Net from "assets/images/acomodacao/net.png";
import { Link } from "react-router-dom";

export { Fish, Net };

export const AcomContent = styled.div`
  padding: 5em 0;
  background: url(${BgTexture}) no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const AcomContainer = styled(Container)`
  max-width: 900px;
`;

export const AcomCard = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
  padding-bottom: 55px;
  transition: 300ms;

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }
`;

export const AcomCardLink = styled(Link)`
  &:hover ${AcomCard} {
    transform: scale(1.05);
  }
`;

export const AcomIMG = styled.img`
  width: 100%;
  max-width: 210px;
`;

export const AcomInfo = styled.div``;

export const AcomTitle = styled.h1`
  text-transform: uppercase;
  color: var(--darkBlue);
  font-family: "Staatliches", cursive;
  gap: 20px;
  font-size: 35px;
  font-weight: 100;
`;

export const AcomDesc = styled.p``;

export const AcomFish = styled.img`
  position: absolute;
  right: 0;
  max-width: 150px;
  width: 100%;
  top: -35px;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const AcomNet = styled.img`
  position: absolute;
  left: 0;
  max-width: 250px;
  width: 100%;
  bottom: -35px;

  @media (max-width: 1050px) {
    display: none;
  }
`;
