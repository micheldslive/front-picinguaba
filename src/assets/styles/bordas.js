import styled from "styled-components";
import TextureTopImage from "assets/images/brush-div-top.png";
import TextureBottomImage from "assets/images/brush-div-bottom.png";

export const TextureTop = styled.div`
  height: 48px;
  width: 100%;
  background: url(${TextureTopImage});
  background-size: cover;
  background-position: center;
  margin-top: -48px;
  transition: 300ms;

  @media (max-width: 399px) {
    height: 25px;
    margin-top: -25px;
  }
`;

export const TextureBottom = styled.div`
  height: 48px;
  width: 100%;
  background: url(${TextureBottomImage});
  background-size: cover;
  background-position: center;
  margin-bottom: -48px;

  @media (max-width: 399px) {
    height: 25px;
    margin-top: -25px;
  }
`;
