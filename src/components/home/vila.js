import { Component, createRef } from "react";
import { GlobalTitle } from "assets/styles/global";
import {
  Container,
  VilaContent,
  VilaRow,
  VilaCol,
  VilaDescription,
  VilaImage,
  VilaImageJPG,
  VilaImageContent,
  VilaTitleContent,
  VilaTitle,
  VilaParallaxEnd,
} from "assets/styles/home";
import { VilaParallax } from "./parallax";
import { parallax } from "services/home";
import { gsapEffect } from "utils/gsapEffect";

export default class Vila extends Component {
  constructor(props) {
    super(props);
    this.animate = createRef();
  }

  componentDidMount() {
    gsapEffect(this.animate.current);
  }
  render() {
    return (
      <>
        <VilaContent>
          <Container>
            <VilaRow ref={this.animate}>
              <VilaCol lg={6} md={12}>
                <GlobalTitle color={true}>
                  Uma vila preservada entre o mar e a floresta.
                </GlobalTitle>
                <VilaDescription>
                  Em tupi-guarani, Picinguaba quer dizer “refúgio dos peixes”.
                  Picinguaba está localizada em uma tranquila baía no coração do
                  Parque Natural da Mata Atlântica – floresta tropical e
                  costeira, que se estende entre o Rio de Janeiro e São Paulo –
                  Na região de Ubatuba e à meia hora de carro de Paraty. Aos
                  olhos, Picinguaba surge como uma porta de entrada para um
                  Brasil antigo, reconhecida pela UNESCO como patrimônio
                  cultural mundial. Em Picinguaba tudo parece estar em perfeita
                  harmonia. A força suave do vento, que faz o movimento dos
                  barcos no mar e redesenha a linha do horizonte a cada
                  pôr-do-sol, é a mesma que faz voar as folhas das árvores. A
                  sabedoria caiçara é conhecedora de terra e mar. As pessoas se
                  alimentam do que vem na rede do pescador, respeitam os
                  quereres da terra.
                </VilaDescription>
              </VilaCol>
              <VilaCol lg={6} md={12}>
                <VilaImageContent>
                  <VilaImage src={VilaImageJPG} alt="" />
                  <VilaTitleContent>
                    <VilaTitle>
                      Vila de
                      <br />
                      Pescadores
                    </VilaTitle>
                  </VilaTitleContent>
                </VilaImageContent>
              </VilaCol>
            </VilaRow>
          </Container>
        </VilaContent>
        {parallax.map(({ id, bg, bdBg, bdColor, bgColor, title, desc }) => (
          <VilaParallax
            key={id}
            id={id}
            bg={bg}
            bdBg={bdBg}
            bdColor={bdColor}
            bgColor={bgColor}
            title={title}
            desc={desc}
          />
        ))}
        <VilaParallaxEnd />
      </>
    );
  }
}
