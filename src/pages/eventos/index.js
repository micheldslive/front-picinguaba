import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import ImageBgTop from "components/background/image";
import Background from "assets/images/eventos/eventos-bg.jpg";

export default class Eventos extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Vila Picinguaba - Eventos</title>
          <meta name="description" content="Uma vila de pescadores preservada entre o mar e a floresta."/>
        </Helmet>
        <ImageBgTop background={Background} title={"Eventos"} />
      </>
    );
  }
}
