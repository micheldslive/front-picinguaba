import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import ImageBgTop from "components/background/image";
import Background from "assets/images/roteiros/roteiros-bg.jpg";
import {
  RoteiroCard,
  RoteiroCol,
  RoteiroDesc,
  RoteiroIMG,
  RoteiroRow,
  RoteirosContent,
  RoteiroTitle,
} from "assets/styles/roteiros";
import { Container } from "assets/styles/global";
import  Mapa  from "utils/map";

export default class Roteiros extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Vila Picinguaba - Roteiros</title>
          <meta name="description" content="Uma vila de pescadores preservada entre o mar e a floresta." />
        </Helmet>
        <ImageBgTop background={Background} title={"Roteiros"} />
        <RoteirosContent>
          <Container>
            <RoteiroRow>
              <RoteiroCol lg={6} md={12}>
                <RoteiroCard>
                  <RoteiroIMG src="" alt="" />
                  <RoteiroTitle></RoteiroTitle>
                  <RoteiroDesc></RoteiroDesc>
                </RoteiroCard>
              </RoteiroCol>
            </RoteiroRow>
          </Container>
          <Mapa/>
        </RoteirosContent>
      </>
    );
  }
}
