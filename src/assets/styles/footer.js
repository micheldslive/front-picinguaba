import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as FaceSVG } from "assets/images/facebook.svg";
import { ReactComponent as InstaSVG } from "assets/images/instagram.svg";
import { ReactComponent as LinkedSVG } from "assets/images/linkedin.svg";
import { ReactComponent as YouTubeSVG } from "assets/images/youtube.svg";
import LogoSVG from "assets/images/logo-picinguaba-white.webp";

export { LogoSVG };

export const LogoPicinguabaIMG = styled.img`
  width: 100%;
  max-width: 240px;
`;

export const FooterAnimation = styled.div`
  position: relative;
  height: 130px;
`;

export const FooterContent = styled.footer`
  & ${FooterAnimation}::after, & ${FooterAnimation}::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    content: "";
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    transition: clip-path 1s;
  }

  & ${FooterAnimation}::after {
    background-color: black;
    height: calc(100% + 2px);
  }

  & ${FooterAnimation}::before {
    background-color: var(--orange);
  }

  &:hover ${FooterAnimation}::before {
    clip-path: polygon(0 60%, 100% 0, 100% 100%, 0% 100%);
  }
  &:hover ${FooterAnimation}::after {
    clip-path: polygon(0 0, 100% 60%, 100% 100%, 0% 100%);
  }
`;

export const FooterMain = styled.div`
  background-color: black;
  padding-bottom: 96px;
`;

export const FooterRow = styled(Row)`
  max-width: 800px;
  margin: 0 auto;
`;

export const FooterCol = styled(Col)`
  padding: 0;

  @media (max-width: 767px) {
    max-width: 270px;
    margin: 0 auto 40px auto;
  }
`;

export const ColTitle = styled.p`
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 22px;
  line-height: 1.32;
  color: var(--orange);
  padding-bottom: 15px;
`;

export const Paragraph = styled.p`
  padding: 10px 0;
  color: white;
`;

export const ColLink = styled(Link)`
  display: block;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 32px;
  color: white;

  &:hover {
    color: var(--orange3);
  }
`;

export const CopyMain = styled.div`
  padding: 10px 0;
  background-color: var(--orange);
  border-top: 1px solid var(--black);
  display: flex;
  align-items: center;
`;

export const CopyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const CopyText = styled.span`
  color: white;
`;

export const CopyLink = styled.a`
  color: white;
  transition: 300ms;

  &:hover {
    color: black;
  }
`;

export const RS = styled.div`
  display: flex;
  -webkit-box-pack: end;
  gap: 24px;
`;

export const RSLink = styled.a`
  svg path {
    fill: white;
  }
  &:hover svg path {
    fill: var(--orange3);
  }
`;

export const Facebook = styled(FaceSVG)``;

export const Instagram = styled(InstaSVG)``;

export const Linkedin = styled(LinkedSVG)``;

export const Youtube = styled(YouTubeSVG)``;
