import {
  ProdutoImg,
  ProdutoLink,
  ProdutosCol,
  ProdutosContainer,
  ProdutosContent,
  ProdutosRow,
  ProdutoTitle,
} from "assets/styles/produtos";
import { BorderBrushTop, BorderBrushBottom } from "assets/styles/bordas";
import { paginas } from "services/produtos";

const Produtos = () => {
  return (
    <>
      <BorderBrushTop />
      <ProdutosContent>
        <ProdutosContainer>
          <ProdutosRow>
            {paginas.map(({ id, imagem, title, to }) => (
              <ProdutosCol key={id} lg={6} md={6}>
                <ProdutoLink to={to}>
                  <ProdutoImg src={imagem} alt={title} />
                  <ProdutoTitle>{title}</ProdutoTitle>
                </ProdutoLink>
              </ProdutosCol>
            ))}
          </ProdutosRow>
        </ProdutosContainer>
      </ProdutosContent>
      <BorderBrushBottom />
    </>
  );
};

export default Produtos;
