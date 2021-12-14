import { Component } from "react";
import {
  PreloaderMain,
  PreloaderContainer,
  PicinguabaSun,
} from "../../assets/styles/preloader";

export default class Preloader extends Component {
  render() {
    return (
      <PreloaderContainer>
        <PreloaderMain>
          <PicinguabaSun width="156" height="85" />
        </PreloaderMain>
      </PreloaderContainer>
    );
  }
}
