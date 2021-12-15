import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Background from "assets/images/detalhes/detalhes-bg.jpg";
import ImageBgTop from "components/background/image";
import { Container, GlobalTitle } from "assets/styles/global";
import {
  DetailCategory,
  DetailCol,
  DetailContent,
  DetailDesc,
  DetailImg,
  DetailImgContent,
  DetailInfos,
  DetailRow,
  DetailTitle,
} from "assets/styles/detalhes";
import Api from "services/Api.js";
import { gsapFadeMove } from "utils/gsapEffect";

const Detalhes = () => {
  const animate = useRef(),
    [produto, setProduto] = useState(),
    params = useParams();

  useEffect(() => {
    Api.get(`produtos/${params.id}`).then((res) => {
      setProduto(res.data[0]);
    });
    gsapFadeMove(animate.current);
  }, [params, animate]);

  return (
    <>
      <Helmet>
        <title>Vila Picinguaba - Detalhes</title>
        <meta
          name="description"
          content="Uma vila de pescadores preservada entre o mar e a floresta."
        />
      </Helmet>
      <ImageBgTop background={Background} title={produto?.nome} />
      <DetailContent>
        <Container>
          <DetailRow ref={animate}>
            <DetailCol lg={6} md={6}>
              <DetailImgContent>
                <DetailImg src={produto?.imagem} alt={produto?.nome} />
              </DetailImgContent>
            </DetailCol>
            <DetailCol lg={6} md={6}>
              <DetailInfos>
                <GlobalTitle>{produto?.nome}</GlobalTitle>
                <DetailTitle></DetailTitle>
                <DetailDesc>{produto?.descricao}</DetailDesc>
                <DetailCategory>{produto?.nome_categoria}</DetailCategory>
              </DetailInfos>
            </DetailCol>
          </DetailRow>
        </Container>
      </DetailContent>
    </>
  );
};

export default Detalhes;
