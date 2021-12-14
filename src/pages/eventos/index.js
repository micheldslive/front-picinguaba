import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { gsapEffect } from "utils/gsapEffect";
import ImageBgTop from "components/background/image";
import Background from "assets/images/eventos/eventos-bg.jpg";
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
import Event01 from "assets/images/eventos/event-1.png";
import { GlobalTitle, GlobalTitleContent } from "assets/styles/global";

const Eventos = () => {
  const animate = useRef();

  useEffect(() => {
    gsapEffect(animate.current);
  });

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
      <EventosContent>
        <EventosContainer>
          <GlobalTitleContent>
            <GlobalTitle color={false}>Eventos</GlobalTitle>
          </GlobalTitleContent>
          <EventoRow ref={animate}>
            <EventoCol lg={6} md={6}>
              <EventoLink to="/">
                <EventoCard>
                  <EventoIMG src={Event01} alt="" />
                  <EventoTitle>Corrida de Canoa</EventoTitle>
                  <EventoDesc>
                    A tradicional corrida de canoa caiçara acontece no proximo
                    dia 15/12, seguindo a tradicao e mantendo viva a memoria
                    ancestral contida em cada movimento. Para alem da competicao
                    e premiacao, o bem maior que se cultiva atraves desse evento
                    é o valor em reconhecer que muita historia e muitas maos
                    foram precisas para que hoje pudessemos usufruir desse meio
                    de transporte, que ate pouco tempo era meio de
                    sobrevivencia.
                  </EventoDesc>
                </EventoCard>
              </EventoLink>
            </EventoCol>
          </EventoRow>
        </EventosContainer>
      </EventosContent>
    </>
  );
};

export default Eventos;
