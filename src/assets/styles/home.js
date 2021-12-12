import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import BigBG from "assets/images/home-bg-b.jpg";
import MediumBG from "assets/images/home-bg-m.jpg";
import SmallBG from "assets/images/home-bg-s.jpg";
import { ReactComponent as ArrowButton } from "assets/images/arrow-b.svg";
import HoldCards from "assets/images/holding-card.png";

export { ArrowButton, HoldCards };

export const HomeContent = styled.div`
  padding: 80px 0;
  position: relative;
  background-size: cover;
  background-position: center;
  width: 100%;
  background-image: url(${BigBG});

  @media (min-width: 769px) and (max-width: 1180px) {
    background-image: url(${MediumBG});
  }

  @media (max-width: 768px) {
    background-image: url(${SmallBG});
  }
`;

export const Container = styled.section``;

export const HomeRow = styled(Row)`
  padding: 0 24px;
  align-items: center;
`;

export const HomeCol = styled(Col)`
  padding: 0;
  margin-bottom: 35px;
`;

export const HomeTitle = styled.h1`
  font-size: 48px;
  color: white;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const HomeSubtitle = styled.h2`
  font-size: 24px;
  color: white;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Form = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: white;
  max-width: 330px;
  margin: auto;
`;

export const FormContent = styled.div`
  padding: 24px;
`;

export const FormTitle = styled.h3`
  padding-bottom: 32px;
  font-size: 20px;
`;

export const FormGroup = styled.div`
  position: relative;
`;

export const FormInput = styled.input`
  background-color: transparent;
  border-width: 0px 0px 1px;
  box-sizing: border-box;
  color: rgb(17, 17, 17);
  caret-color: currentcolor;
  display: block;
  margin: 0px;
  padding: 8px 0px;
  text-align: left;
  outline: none;
  width: 100%;
  border-bottom-style: solid;
  border-bottom-color: rgba(17, 17, 17, 0.2);
  --inputCurrentColor: #111111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FormLabel = styled.label`
  position: absolute;
  display: inline-block;
  color: #004d40;
  top: 100px;
  pointer-events: none;
  font-size: ${({ valid }) => (valid ? "12px" : "14px")};
  transition: all 0.125s cubic-bezier(0.2, 0, 0.03, 1);
  position: relative;
  top: ${({ valid }) => (valid ? "-60px" : "-30px")};

  ${FormInput}:focus ~ & {
    top: -60px;
    font-size: 12px;
  }
`;

export const FormButton = styled.button`
  border-radius: 100px;
  background: var(--orange);
  color: white;
  height: 48px;
  display: flex;
  width: calc(100% - 40px);
  padding: 0 20px;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  overflow: hidden;
  position: relative;
  border: 0px;
  transition: all 0.2s ease;

  &:hover {
    background: var(--orange2);
  }
`;

export const CardContent = styled.div`
  padding: 64px 0;
  background-color: white;
`;

export const CardTitle = styled.h2`
  font-size: 48px;
  color: var(--orange);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const CardSubtitle = styled.span`
  font-size: 48px;
  line-height: 48px;
`;

export const CardImage = styled.img`
  width: 100%;
`;
