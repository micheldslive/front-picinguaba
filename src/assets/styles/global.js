import "bootstrap/dist/css/bootstrap-grid.min.css";
import styled, { createGlobalStyle } from "styled-components";
import TitleSVG from "assets/images/title-wave.svg";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Livvic:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap');

:root {
  --gray: #F7F6F2;
  --gray2: #F1F1F1;
  --gray3: #ccc;
  --darkBlue: #133754;
  --blue: #0194C6;
  --blue1: #2EC6EF;
  --orange: #EA772A;
  --orange1: #FFC62F;
  --orange2: #e15e0a;
  --orange3: #ea914b;
  --green: #51734B;
  --green1: #75BD81;
  --black: #191919;
  --black1: #222222;
  --black2: #a2a2a2;
}

body,
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: 'Livvic', sans-serif;
  background-color: white;

  @media (max-width: 1080px) {
    font-size: 93.75%
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-thumb {
  background-color: var(--orange);
  outline: 1px solid var(--orange);
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
  text-decoration: none;
  list-style: none;
}

a, a:hover {
  color: var(--darkBlue);
}

section {
  width: 85%;
  margin: 0 auto;
  max-width: 1180px;

  @media (max-width: 600px) {
    width: 90%;
  }
}

.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}

`;

export const Container = styled.section``;

export const GlobalTitle = styled.h1`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  color: white;
  font-family: "Staatliches", cursive;
  gap: 20px;
  font-size: 40px;
  font-weight: 100;

  &::before {
    content: "";
    background: url(${TitleSVG});
    width: 100px;
    height: 13px;
    background-repeat: no-repeat;
  }
`;
