import styled from "styled-components";
import { ReactComponent as RefugioSVG } from "../images/refugio.svg";

export const VideoContainer = styled.div`
  margin-bottom: -5px;
  position: relative;
`;

export const VideoContent = styled.div`
  position: relative;
  z-index: -1;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const VideoElement = styled.video`
  object-fit: cover;
  width: 100%;
  max-height: 600px;
`;

export const Title = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

export const TitleContent = styled.div`
  display: flex;
  justify-content: center;
`;
export const Refugio = styled(RefugioSVG)`
  max-width: 450px;
  width: 100%;

  @media (max-width: 700px) {
    width: 75%;
  }
`;

// IMAGE TOP BACKGROUND COMPONENT

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  background: url(${({ background }) => (background ? background : "")});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -2;
  }
`;

export const ImageContent = styled.div`
  padding: 14em 0;
  transition: 300ms;

  @media (max-width: 1079px) {
    padding: 7em 0;
  }
`;

export const ImageTitle = styled.h1`
  text-transform: uppercase;
  color: white;
  font-family: "Staatliches", cursive;
  gap: 20px;
  font-size: 60px;
  font-weight: 100;
  transition: inherit;

  @media (max-width: 1079px) {
    font-size: 45px;
  }
`;
