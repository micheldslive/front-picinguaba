import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Alimentacao from "pages/alimentacao";
import Acomodacao from "pages/acomodacao";
import Roteiros from "pages/roteiros";
import Eventos from "pages/eventos";
import Detalhes from "pages/detalhes";
import NotFound from "pages/404";

export default class Routers extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/alimentacao" element={<Alimentacao />} />
        <Route exact path="/acomodacao" element={<Acomodacao />} />
        <Route exact path="/roteiros" element={<Roteiros />} />
        <Route exact path="/eventos" element={<Eventos />} />
        <Route exact path="/detalhes/:id" element={<Detalhes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}
