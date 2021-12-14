import { Component } from "react";
import { Helmet } from "react-helmet-async";
import {
  MainError,
  Container,
  Error,
  ErrorText,
  Link,
} from "../../assets/styles/404";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Página não encontrada</title>
          <meta name="description" content="Página não encontrada." />
        </Helmet>
        <MainError>
          <Container>
            <Error>Ops!</Error>
            <ErrorText>
              Não conseguimos encontrar a página que você está procurando.
            </ErrorText>
            <ErrorText>
              Não se preocupe pois ela está em boa companhia com outras coisas
              que não existem em nossa Vila.
            </ErrorText>
            <Link to="/">
              Voltar para a página principal
            </Link>
          </Container>
        </MainError>
      </>
    );
  }
}
