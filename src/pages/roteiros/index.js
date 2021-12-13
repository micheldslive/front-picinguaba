import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import ImageBgTop from "components/background/image";
import Background from "assets/images/roteiros/roteiros-bg.jpg";

export default class Roteiros extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Vila Picinguaba - Roteiros</title>
          <meta name="description" content="Uma vila de pescadores preservada entre o mar e a floresta."/>
        </Helmet>
        <ImageBgTop background={Background} title={"Roteiros"} />
      </>
    );
  }
}
