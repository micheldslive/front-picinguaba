import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Texture } from "./produtos";

export const EventosContent = styled.div`
  padding: 3em 0 4em;
  background: url(${Texture});
  background-size: cover;
`;

export const EventosContainer = styled.section`
  max-width: 900px;
`;

export const EventoRow = styled(Row)``;

export const EventoCol = styled(Col)``;

export const EventoLink = styled(Link)`
  &:hover > div {
    background-color: var(--gray);
    box-shadow: 3px 5px 17px rgba(0, 0, 0, 0.25);
    transition: 300ms;
  }
`;

export const EventoCard = styled.div`
  transition: 300ms;
  border-radius: 15px;
  text-align: center;
  padding: 40px;
`;

export const EventoIMG = styled.img`
  padding-bottom: 15px;
`;

export const EventoTitle = styled.h1`
  text-transform: uppercase;
  font-family: "Staatliches", cursive;
  font-size: 40px;
  font-weight: 100;
  color: var(--darkBlue);
`;

export const EventoDesc = styled.p``;
