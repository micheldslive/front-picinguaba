import styled from "styled-components";
import Texture from "assets/images/home/home-texture.png";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export { Texture };

export const ProdutosContent = styled.div`
  min-height: 800px;
  background: url(${Texture});
  background-size: cover;
  padding: 2em 0;
`;

export const ProdutosContainer = styled.section`
  max-width: 1000px;
`;

export const ProdutosRow = styled(Row)``;

export const ProdutosCol = styled(Col)`
  padding-bottom: 40px;
`;

export const ProdutoImg = styled.img`
  width: 100%;
  border-radius: 15px;
`;

export const ProdutoTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-family: "Staatliches", cursive;
  font-size: 35px;
  font-weight: 100;
`;

export const ProdutoLink = styled(Link)`
  transition: 300ms;
  &:hover {
    opacity: 0.8;
  }
`;
