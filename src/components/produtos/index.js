import { Component } from "react";
import { ProdutosContainer, ProdutosContent } from "../../assets/styles/produtos";
import { BorderBrushTop, BorderBrushBottom } from "../../assets/styles/bordas";

export default class Produtos extends Component {
  render() {
    return (
      <>
        <BorderBrushTop />
        <ProdutosContent>
          <ProdutosContainer></ProdutosContainer>
        </ProdutosContent>
        <BorderBrushBottom />
      </>
    );
  }
}
