import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { gsapFadeMove, gsapMoveLeft, gsapMoveRight } from "utils/gsapEffect";
import ImageBgTop from "components/background/image";
import Background from "assets/images/acomodacao/acomodacao-bg.jpg";
import {
  GlobalSubtitle,
  GlobalTitle,
  GlobalTitleContent,
} from "assets/styles/global";
import {
  AcomContainer,
  AcomCardLink,
  AcomCard,
  AcomContent,
  AcomDesc,
  AcomIMG,
  AcomInfo,
  AcomTitle,
  AcomFish,
  Fish,
  AcomNet,
  Net,
} from "assets/styles/acomodacao";
import Api from "services/Api";

const Acomodacao = () => {
  const animate = useRef(),
    moveFish = useRef(),
    moveNet = useRef(),
    [produtos, setProdutos] = useState([]),
    category = 4;

  useEffect(() => {
    Api.get(`/produtos/categoria/${category}`).then((res) => {
      setProdutos(res.data);
    });
    gsapFadeMove(animate.current);
    gsapMoveRight(moveFish.current);
    gsapMoveLeft(moveNet.current);
  }, [category]);
  return (
    <>
      <Helmet>
        <title>Vila Picinguaba - Acomodação</title>
        <meta
          name="description"
          content="Uma vila de pescadores preservada entre o mar e a floresta."
        />
      </Helmet>
      <ImageBgTop background={Background} title={"Acomodação"} />
      <GlobalTitleContent>
        <GlobalTitle color={0}>Pousadas</GlobalTitle>
        <GlobalSubtitle>
          As pousadas e casas de aluguel oferecem conforto e paz pra quem
          procura descanso e calmaria, como um verdadeiro refúgio.
        </GlobalSubtitle>
      </GlobalTitleContent>
      <AcomContent>
        <AcomFish src={Fish} alt="" ref={moveFish} />
        <AcomNet src={Net} alt="" ref={moveNet} />
        <AcomContainer ref={animate}>
          {produtos?.map(({ id, imagem_thumb, nome, descricao }) => (
            <AcomCardLink key={id} to={`/detalhes/${id}`}>
            <AcomCard>
              <AcomIMG src={imagem_thumb} alt={nome} />
              <AcomInfo>
                <AcomTitle>{nome}</AcomTitle>
                <AcomDesc>{descricao}</AcomDesc>
              </AcomInfo>
            </AcomCard>
            </AcomCardLink>
          ))}
        </AcomContainer>
      </AcomContent>
    </>
  );
};

export default Acomodacao;
