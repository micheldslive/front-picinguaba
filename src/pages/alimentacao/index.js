import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import ImageBgTop from "components/background/image";
import Background from "assets/images/alimentacao/alimentacao-bg.jpg";
import { Container, GlobalTitle, GlobalTitleContent } from "assets/styles/global";
import { AliContent } from "assets/styles/alimentacao";

export default class Alimentacao extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Vila Picinguaba - Alimentação</title>
          <meta name="description" content="Uma vila de pescadores preservada entre o mar e a floresta."/>
        </Helmet>
        <ImageBgTop background={Background} title={"Restaurantes"} />
        <AliContent>
        <Container>
          <GlobalTitleContent>
            <GlobalTitle color={false}>Acomodações</GlobalTitle>
          </GlobalTitleContent>
        </Container>
      </AliContent>
      </>
    );
  }
}
