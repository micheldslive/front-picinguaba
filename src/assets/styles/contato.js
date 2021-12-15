import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

export const ContatoContent = styled.div`
  padding-top: 40px;
  margin-bottom: -70px;
  background-color: var(--green1);
`;

export const FormRow = styled(Row)`
  margin: 0;
`;

export const FormCol = styled(Col)`
  padding: 0;
`;

export const Form = styled.form`
  position: relative;
  z-index: 1;
  background-color: white;
  box-shadow: 0px 0px 20px -4px rgb(0 0 0 / 63%);
  text-align: center;
  padding: 30px;
  border-radius: 15px;
`;

export const Input = styled.input`
  border: 1px solid var(--gray2);
  padding: 15px;
  margin: 0 0 15px;
  width: calc(100% - 30px);
  border-radius: 10px;
  background-color: var(--gray);
`;
export const Textarea = styled.textarea`
  border: 1px solid var(--gray2);
  padding: 15px;
  margin: 0 0 15px;
  width: calc(100% - 30px);
  border-radius: 10px;
  background-color: var(--gray);
`;

export const Send = styled.button`
  padding: 15px;
  display: block;
  width: calc(100% - 30px);
  background-color: var(--darkBlue);
  color: white;
  cursor: pointer;
  margin: 10px auto;
  border-radius: 10px;
  transition: 300ms;

  &:hover {
    opacity: 0.8;
  }
`;
