import { useEffect, useRef } from "react";
import { gsapFadeMove } from "utils/gsapEffect";
import { Container } from "assets/styles/global";
import {
  ContatoContent,
  FormCol,
  Form,
  Input,
  FormRow,
  Send,
  Textarea,
} from "assets/styles/contato";

const Contato = () => {
  const animate = useRef();

  useEffect(() => {
    gsapFadeMove(animate.current);
  }, [animate]);
  return (
    <ContatoContent>
      <Container>
        <Form ref={animate}>
          <FormRow>
            <FormCol lg={6}>
              <Input type="text" placeholder="Nome"></Input>
            </FormCol>
            <FormCol lg={6}>
              <Input type="text" placeholder="Email"></Input>
            </FormCol>
            <FormCol lg={6}>
              <Input type="text" placeholder="Telefone"></Input>
            </FormCol>
            <FormCol lg={6}>
              <Input type="text" placeholder="Assunto"></Input>
            </FormCol>
            <FormCol lg={12}>
              <Textarea type="text" placeholder="Mensagem" rows="7"></Textarea>
            </FormCol>
            <Send>Enviar</Send>
          </FormRow>
        </Form>
      </Container>
    </ContatoContent>
  );
};

export default Contato;
