import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { gsapFadeMove } from "utils/gsapEffect";
import ImageBgTop from "components/background/image";
import Background from "assets/images/eventos/eventos-bg.jpg";
import { GlobalTitle, GlobalTitleContent } from "assets/styles/global";
import {
  EventoCard,
  EventoCol,
  EventoDesc,
  EventoIMG,
  EventoLink,
  EventoRow,
  EventosContainer,
  EventosContent,
  EventoTitle,
} from "assets/styles/eventos";
import Api from "services/Api.js";

const Eventos = () => {
  const animate = useRef(),
    [produtos, setProdutos] = useState([]),
    category = 1;

  useEffect(() => {
    Api.get(`/produtos/categoria/${category}`).then((res) => {
      setProdutos(res.data);
    });
    gsapFadeMove(animate.current);
  }, [category, animate]);

  return (
    <>
      <Helmet>
        <title>Vila Picinguaba - Eventos</title>
        <meta
          name="description"
          content="Uma vila de pescadores preservada entre o mar e a floresta."
        />
      </Helmet>
      <ImageBgTop background={Background} title={"Eventos"} />
      <GlobalTitleContent>
        <GlobalTitle color={0}>Eventos</GlobalTitle>
      </GlobalTitleContent>
      <EventosContent>
        <EventosContainer>
          <EventoRow ref={animate}>
            {produtos?.map(({ id, nome, descricao, imagem_thumb }) => (
              <EventoCol key={id} lg={6} md={6}>
                <EventoLink to={`/detalhes/${id}`}>
                  <EventoCard>
                    <EventoIMG src={imagem_thumb} alt={nome} />
                    <EventoTitle>{nome}</EventoTitle>
                    <EventoDesc>{descricao}</EventoDesc>
                  </EventoCard>
                </EventoLink>
              </EventoCol>
            ))}
          </EventoRow>
        </EventosContainer>
      </EventosContent>
    </>
  );
};

export default Eventos;
