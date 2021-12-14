import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { gsapEffect } from "utils/gsapEffect";
import { Api } from "services/api";
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

const Eventos = () => {
  const animate = useRef();
  const [produtos, setProdutos] = useState([]);
  const category = 1;

  useEffect(() => {
    gsapEffect(animate.current);
    Api.get(`/produtos/categoria/${category}`).then((res) => {
      setProdutos(res.data);
    });
  }, [category]);

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
        <GlobalTitle color={false}>Eventos</GlobalTitle>
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
                    <EventoDesc>
                      {descricao}
                    </EventoDesc>
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
