import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import ImageBgTop from "components/background/image";
import Background from "assets/images/acomodacao/acomodacao-bg.jpg";

export default class Acomodacao extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Vila Picinguaba - Acomodação</title>
          <meta name="description" content="Uma vila de pescadores preservada entre o mar e a floresta."/>
        </Helmet>
        <ImageBgTop background={Background} title={"Acomodação"} />
      </>
    );
  }
}
