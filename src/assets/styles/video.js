import styled from "styled-components";
import { ReactComponent as RefugioSVG } from "assets/images/refugio.svg";

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
