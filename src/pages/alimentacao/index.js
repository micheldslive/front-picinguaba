import { useEffect, useRef, useState } from "react";
import { gsapEffect } from "utils/gsapEffect";
import { Helmet } from "react-helmet-async";
import ImageBgTop from "components/background/image";
import Background from "assets/images/alimentacao/alimentacao-bg.jpg";
import FoodImage from "assets/images/alimentacao/food.webp";
import IconCard from "assets/images/alimentacao/icon.png";
import {
  GlobalSubtitle,
  GlobalTitle,
  GlobalTitleContent,
} from "assets/styles/global";
import {
  AlCard,
  AlCardContent,
  AlCardLink,
  AlCardRow,
  AlContainer,
  AlContent,
  AlDesc,
  AlDescContent,
  AlGroup,
  AlIcon,
  AlImg,
  AlImgCenter,
  AlTitle,
  AlTitleContent,
  CardBack,
  CardFront,
} from "assets/styles/alimentacao";
import Api from "services/Api.js";

const Alimentacao = () => {
  const animate = useRef();
  const [produtos, setProdutos] = useState([]);
  const category = 3;

  useEffect(() => {
    Api.get(`/produtos/categoria/${category}`).then((res) => {
      setProdutos(res.data);
    });
    gsapEffect(animate.current);
  }, [category]);

  return (
    <>
      <Helmet>
        <title>Vila Picinguaba - Alimentação</title>
        <meta
          name="description"
          content="Uma vila de pescadores preservada entre o mar e a floresta."
        />
      </Helmet>
      <ImageBgTop background={Background} title={"Alimentação"} />
      <GlobalTitleContent>
        <GlobalTitle>Restaurantes</GlobalTitle>
        <GlobalSubtitle>
          Os quiosques e restaurantes são um convite para desfrutar da
          gastronomia local em contato com a cultura da pesca de cerco, que
          todos os dias enche o balaio das espécies mais comuns da região.
        </GlobalSubtitle>
      </GlobalTitleContent>
      <AlContent>
        <AlContainer ref={animate}>
          <AlGroup>
            {produtos?.map(({ id, nome, descricao, imagem_thumb }, index) =>
              index <= 1 ? (
                <AlCardLink key={id} to={`/detalhes/${id}`}>
                  <AlCardContent>
                    <AlCardRow>
                      <CardFront>
                        <AlCard>
                          <AlTitleContent>
                            <AlIcon src={IconCard} alt={nome} />
                            <AlTitle>{nome}</AlTitle>
                          </AlTitleContent>
                          <AlImg src={imagem_thumb} alt="" />
                        </AlCard>
                      </CardFront>
                      <CardBack>
                        <AlCard>
                          <AlTitleContent>
                            <AlIcon src={IconCard} alt={nome} />
                            <AlTitle>Detalhes</AlTitle>
                          </AlTitleContent>
                          <AlDescContent>
                            <AlDesc>{descricao}</AlDesc>
                          </AlDescContent>
                        </AlCard>
                      </CardBack>
                    </AlCardRow>
                  </AlCardContent>
                </AlCardLink>
              ) : (
                ""
              )
            )}
          </AlGroup>
          <AlGroup>
            <AlImgCenter src={FoodImage} alt="" />
          </AlGroup>
          <AlGroup>
            {produtos?.map(({ id, nome, descricao, imagem_thumb }, index) =>
              index > 1 ? (
                <AlCardLink key={id} to={`/detalhes/${id}`}>
                  <AlCardContent>
                    <AlCardRow>
                      <CardFront>
                        <AlCard>
                          <AlTitleContent>
                            <AlIcon src={IconCard} alt={nome} />
                            <AlTitle>{nome}</AlTitle>
                          </AlTitleContent>
                          <AlImg src={imagem_thumb} alt="" />
                        </AlCard>
                      </CardFront>
                      <CardBack>
                        <AlCard>
                          <AlTitleContent>
                            <AlIcon src={IconCard} alt={nome} />
                            <AlTitle>Detalhes</AlTitle>
                          </AlTitleContent>
                          <AlDescContent>
                            <AlDesc>{descricao}</AlDesc>
                          </AlDescContent>
                        </AlCard>
                      </CardBack>
                    </AlCardRow>
                  </AlCardContent>
                </AlCardLink>
              ) : (
                ""
              )
            )}
          </AlGroup>
        </AlContainer>
      </AlContent>
    </>
  );
};

export default Alimentacao;
