import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import NotFound from "pages/404";

export default class Routers extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}
