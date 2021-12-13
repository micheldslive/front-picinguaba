import { ProdutosContainer, ProdutosContent } from "assets/styles/produtos";
import { BorderBrushTop, BorderBrushBottom } from "assets/styles/bordas";

import { Component } from "react";

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
