import { Helmet } from "react-helmet-async";
import ImageBgTop from "../../components/background/image";
import Background from "../../assets/images/acomodacao/acomodacao-bg.jpg";
import {
  Container,
  GlobalTitle,
  GlobalTitleContent,
} from "../../assets/styles/global";
import { AcomContent } from "../../assets/styles/acomodacao";

const Acomodacao = () => {
  return (
    <>
      <Helmet>
        <title>Vila Picinguaba - Acomodação</title>
        <meta name="description" content="Uma vila de pescadores preservada entre o mar e a floresta." />
      </Helmet>
      <ImageBgTop background={Background} title={"Acomodação"} />
      <AcomContent>
        <Container>
          <GlobalTitleContent>
            <GlobalTitle color={false}>Acomodações</GlobalTitle>
          </GlobalTitleContent>
        </Container>
      </AcomContent>
    </>
  );
};

export default Acomodacao;
