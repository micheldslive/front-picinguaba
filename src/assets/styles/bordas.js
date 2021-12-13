import styled from "styled-components";
import TextureTopImage from "assets/images/brush-div-top.png";
import TextureBottomImage from "assets/images/brush-div-bottom.png";

export const BorderBrushTop = styled.div`
  height: 48px;
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -35px;
    width: 100%;
    height: 48px;
    background: url(${TextureTopImage});
    background-size: cover;
    background-position: center;
    transition: 300ms;
  }

  @media (max-width: 399px) {
    &::before {
      top: -25px;
      background-position: right;
    }
  }
`;

export const BorderBrushBottom = styled.div`
  height: 48px;
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -35px;
    width: 100%;
    height: 48px;
    background: url(${TextureBottomImage});
    background-size: cover;
    background-position: center;
    transition: 300ms;
  }

  @media (max-width: 399px) {
    &::before {
      bottom: -25px;
      background-position: right;
    }
  }
`;