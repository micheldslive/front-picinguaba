import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Video from "components/background/video";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.cpf = React.createRef();
    this.state = { valid: false };
  }


  render() {

    return (
      <>
        <Helmet>
          <title>Vila Picinguaba - Uma vila de pescadores preservada entre o mar e a floresta.</title>
          <meta name="description" content="Vila Picinguaba - Uma vila de pescadores preservada entre o mar e a floresta." />
        </Helmet>
        <Video />
      </>
    );
  }
}