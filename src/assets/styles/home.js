import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import VilaImageJPG from "assets/images/home/pescador-rede.jpg";

export { VilaImageJPG };

export const Container = styled.section``;

export const HomeRow = styled(Row)`
  padding: 0 24px;
  align-items: center;
`;

export const HomeCol = styled(Col)`
  padding: 0;
  margin-bottom: 35px;
`;


// VILA - COMPONENT HOME PAGE

export const VilaContent = styled.div`
  padding: 8em 0;
  background-color: var(--darkBlue);
`;

export const VilaRow = styled(Row)``;

export const VilaCol = styled(Col)`
  padding: 0;
  margin-bottom: 35px;
  padding: 0 35px;

  @media (max-width: 1180px) {
    padding: 0 15px;
  }
`;

export const VilaDescription = styled.p`
  padding-top: 15px;
  color: var(--gray2);
  line-height: 22px;
`;

export const VilaImageContent = styled.div`
  position: relative;
`;

export const VilaImage = styled.img`
  border-radius: 20px;
  width: 100%;
  filter: drop-shadow(6px 4px 20px rgba(0, 0, 0, 0.46));
`;

export const VilaTitleContent = styled.div`
  position: absolute;
  bottom: -40px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const VilaTitle = styled.h1`
  color: white;
  font-family: "Staatliches", cursive;
  font-size: 80px;
  font-weight: 100;
  line-height: 80px;
  transition: 300ms;

  @media (max-width: 500px) {
    font-size: 50px;
    line-height: 50px;
  }
`;

export const VilaParallaxBG = styled.div`
  height: ${({ gradient }) => (gradient ? "650px" : "500px")};
  width: 100%;
  background: url(${({ bg }) => (bg ? bg : "")});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: relative;

  ${({ gradient }) => gradient &&
  `
  &::after {
    content: "";
    position: absolute;
    top: 0;
    background: linear-gradient(
      180deg,
      rgba(19, 55, 84, 1) -1%,
      rgba(19, 55, 84, 0) 100%
    );
    width: 100%;
    height: 300px;
    margin-top: -1px;
  }
  `
  }
`;

export const VilaParallaxBorder = styled.div`
  height: 70px;
  background: url(${({ bdBg }) => (bdBg ? bdBg : "")}) ${({ bdColor }) => (bdColor ? bdColor : "")};
  background-size: cover;
  background-position: center;
`;

export const VilaParallaxContainer = styled.div`
  background: ${({ bgColor }) => (bgColor ? bgColor : "")};
`;

export const VilaParallaxContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4em 20px;
  text-align: center;
  color: white;
`;

export const VilaParallaxTitle = styled.h1`
  font-family: "Staatliches", cursive;
  font-size: 50px;
  font-weight: 100;
  line-height: 80px;
  transition: 300ms;

  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

export const VilaParallaxDescription = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const VilaParallaxEnd = styled.div`
  height: 130px;
  margin-bottom: -130px;
  width: 100%;
  background-color: var(--green1);
`;