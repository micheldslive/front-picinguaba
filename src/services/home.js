import Sport from "assets/images/home/picinguaba-stand-up-sport.jpg";
import Ocean from "assets/images/home/picinguaba-mar-barcos.jpg";
import Nature from "assets/images/home/picinguaba-barco-natureza.jpg";
import Wave1 from "assets/images/home/waves-1.png";
import Wave2 from "assets/images/home/waves-2.png";
import Wave3 from "assets/images/home/waves-3.png";

export const parallax = [
  {
    id: 1,
    bg: Sport,
    bdBg: Wave1,
    bdColor: "var(--orange)",
    bgColor: "var(--orange1)",
    title: "Pesca",
    desc: "O peixe ainda vem salgado de mar. O caminho é curto até a cozinha. O tempo faz mudar o que vem nas redes e varas dos pescadores: anchova, baquara, carapeva; no inverno tem sororoca; mas pargo, vermelho, robalo e garoupa são dos que têm todo tempo.",
  },
  {
    id: 2,
    bg: Ocean,
    bdBg: Wave2,
    bdColor: "var(--blue)",
    bgColor: "var(--blue1)",
    title: "Mar e Floresta",
    desc: "O tempo corre suavemente em Picinguaba. Mesmo assim ele parecerá sempre pouco para aproveitar tudo que a Vila de Pescadores e toda a região têm para nos contar. Passeios de escuna, caiaque ou stand-up paddle nos levam às praias desertas; caminhadas pela floresta nos ensinam sobre o canto dos pássaros que ecoam no verde e revelam cenários e cachoeiras. Os nativos convidam para pescar vieiras e prová-las em toda potência de sabor. Os roteiros para cidades vizinhas como Paraty podem nos ensinar mais sobre culturas, histórias e tudo que chamamos de riqueza.",
  },
  {
    id: 3,
    bg: Nature,
    bdBg: Wave3,
    bdColor: "var(--green)",
    bgColor: "var(--green1)",
    title: "preservação",
    desc: "O Núcleo Picinguaba contribui na regulação da qualidade do ar e do clima, na proteção dos morros, encostas, solos e da paisagem cultural, no turismo e na capacidade de proporcionar lazer e bem-estar aos visitantes e moradores do entorno. O núcleo preserva rios importantes, que são utilizados, tanto para o abastecimento da cidade de Ubatuba, quanto para atividades recreativas e de lazer.",
  },
];
