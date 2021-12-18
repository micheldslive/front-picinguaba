import styled from "styled-components";
import BgTexture from "assets/images/roteiros/bg-texture.png";
import LineLeft from "assets/images/roteiros/line-left.png";
import LineRight from "assets/images/roteiros/line-right.png";
import { Link } from "react-router-dom";

export const RoteirosContent = styled.div`
  padding: 4em 0;
  background: url(${BgTexture}) no-repeat;
  background-position: center;
`;

export const CardIMG = styled.img`
  height: 100%;
  width: 100%;
  max-width: 290px;
  transition: 300ms;

  @media (max-width: 1180px) {
    width: 150px;
    height: 150px;
  }
`;

export const CardInfo = styled.div``;

export const CardNumber = styled.div`
  position: absolute;
  width: 25%;
  text-align: center;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const CardContent = styled.div`
  position: relative;
  transition: opacity 0.5s;
  display: flex;
  align-items: center;
  gap: 35px;
  transition: 300ms;

  @media (max-width: 560px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CardTitle = styled.h1`
  text-transform: uppercase;
  color: var(--darkBlue);
  font-family: "Staatliches", cursive;
  font-size: 35px;
  font-weight: 100;
  transition: 300ms;

  @media (max-width: 1180px) {
    font-size: 25px;
  }
`;

export const CardDesc = styled.p`
  color: var(--gray4);
`;

export const Number = styled.h1`
  font-family: "Sue Ellen Francisco", cursive;
  color: var(--gray3);
  font-size: 170px;
  transition: 300ms;
  font-weight: 100;

  @media (max-width: 1180px) {
    font-size: 120px;
    line-height: 150px;
  }
`;

export const RoteiroCard = styled(Link)`
  padding-bottom: 55px;
  display: flex;
  position: relative;

  &:nth-child(1) ${CardNumber}, &:nth-child(3) ${CardNumber}, &:nth-child(5n) ${CardNumber}, &:nth-child(7n) ${CardNumber}  {
    left: 0;
  }

  &:nth-child(2) ${CardNumber}, &:nth-child(4) ${CardNumber}, &:nth-child(6n) ${CardNumber}, &:nth-child(8n) ${CardNumber} {
    right: 0;
  }

  @media (min-width: 1180px) {
    &:nth-child(1) ${CardContent}::before, &:nth-child(3) ${CardContent}::before, &:nth-child(5n) ${CardContent}::before, &:nth-child(7n) ${CardContent}::before {
      content: "";
      background: url(${LineLeft});
      left: 600px;
      bottom: -76px;
      height: 162px;
      width: 52px;
      position: absolute;
      transform: rotate(-25deg);
      transition: 300ms;

      @media (min-width: 1181px) and (max-width: 1280px) {
        left: 570px;
      }
    }

    &:nth-child(2) ${CardContent}::before, &:nth-child(6n) ${CardContent}::before, &:nth-child(4) ${CardContent}::before, &:nth-child(8n) ${CardContent}::before {
      content: "";
      background: url(${LineRight});
      left: 510px;
      bottom: -76px;
      height: 162px;
      width: 52px;
      position: absolute;
      transform: rotate(25deg);
      transition: 300ms;

      @media (min-width: 1280px) and (max-width: 1336px) {
        left: 460px;
      }

      @media (min-width: 1180px) and (max-width: 1279px) {
        left: 415px;
      }
    }

    &:last-child ${CardContent}::before {
      display: none;
    }
  }


  @media (min-width: 770px) {
    &:nth-child(1) ${CardContent}, &:nth-child(3) ${CardContent}, &:nth-child(5n) ${CardContent}, &:nth-child(7n) ${CardContent} {
      padding-left: 25%;
    }

    &:nth-child(2) ${CardContent}, &:nth-child(4) ${CardContent}, &:nth-child(6n) ${CardContent}, &:nth-child(8n) ${CardContent} {
      padding-right: 25%;
    }
  }

  @media (min-width: 561px) {
    &:nth-child(1)
      ${CardIMG},
      &:nth-child(3)
      ${CardIMG},
      &:nth-child(2)
      ${CardInfo},
      &:nth-child(4)
      ${CardInfo},
      &:nth-child(5n)
      ${CardIMG},
      &:nth-child(7n)
      ${CardIMG},
      &:nth-child(6n)
      ${CardInfo},
      &:nth-child(8n)
      ${CardInfo} {
      order: 1;
    }

    &:nth-child(2)
      ${CardIMG},
      &:nth-child(4)
      ${CardIMG},
      &:nth-child(1)
      ${CardInfo},
      &:nth-child(3)
      ${CardInfo},
      &:nth-child(6n)
      ${CardIMG},
      &:nth-child(8n)
      ${CardIMG},
      &:nth-child(5n)
      ${CardInfo},
      &:nth-child(7n)
      ${CardInfo} {
      order: 2;
    }
  }

  &:hover ${Number}, &:hover ${CardTitle} {
    color: var(--orange);
  }

  &:hover ${CardIMG} {
    animation-name: rotateCard;
    animation-duration: 0.3s;
    animation-timing-function: linear;
  }

  @keyframes rotateCard {
    from {
      transform: rotate3d(0, 1, 0, 120deg);
    }
    to {
      transform: rotate3d(0, 1, 0, 0deg);
    }
  }
`;