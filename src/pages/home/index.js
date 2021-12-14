import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Video from "../../components/background/video";
import Produtos from "../../components/produtos";
import Vila from "../../components/home/vila";

export default class Home extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Vila Picinguaba - Uma vila de pescadores preservada entre o mar e a floresta.</title>
          <meta name="description" content="Uma vila de pescadores preservada entre o mar e a floresta."/>
        </Helmet>
        <Video />
        <Produtos />
        <Vila />
      </>
    );
  }
}
