import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { gsapFadeMove } from "utils/gsapEffect";
import Api from "services/Api";
import ImageBgTop from "components/background/image";
import Background from "assets/images/roteiros/roteiros-bg.jpg";
import {
  RoteiroCard,
  CardDesc,
  CardIMG,
  CardNumber,
  RoteirosContent,
  CardTitle,
  Number,
  CardContent,
  CardInfo,
} from "assets/styles/roteiros";
import {
  Container,
  GlobalTitle,
  GlobalTitleContent,
} from "assets/styles/global";
import Mapa from "utils/map";

const Roteiros = () => {
  const animate = useRef(),
    [produtos, setProdutos] = useState([]),
    category = 2;

  useEffect(() => {
    Api.get(`/produtos/categoria/${category}`).then((res) => {
      setProdutos(res.data);
    });
    gsapFadeMove(animate.current);
  }, [category, animate]);

  return (
    <>
      <Helmet>
        <title>Vila Picinguaba - Roteiros</title>
        <meta
          name="description"
          content="Uma vila de pescadores preservada entre o mar e a floresta."
        />
      </Helmet>
      <ImageBgTop background={Background} title={"Roteiros"} />
      <GlobalTitleContent>
        <GlobalTitle color={0}>Planejamento Diário</GlobalTitle>
      </GlobalTitleContent>
      <RoteirosContent>
        <Container ref={animate}>
          {produtos?.map(({ id, nome, imagem_thumb, descricao }, index) => (
            <RoteiroCard key={id} to={`/detalhes/${id}`}>
              <CardContent>
                <CardIMG src={imagem_thumb} alt={nome} />
                <CardInfo>
                  <CardTitle>{nome}</CardTitle>
                  <CardDesc>{descricao}</CardDesc>
                </CardInfo>
              </CardContent>
              <CardNumber>
                <Number>0{index + 1}</Number>
              </CardNumber>
            </RoteiroCard>
          ))}
        </Container>
      </RoteirosContent>
      <Mapa />
    </>
  );
};

export default Roteiros;
