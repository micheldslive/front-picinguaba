import { useEffect, useRef } from "react";
import { gsapFadeTop } from "utils/gsapEffect";
import { BorderBrushTop } from "assets/styles/bordas";
import {
  ImageContainer,
  ImageContent,
  ImageTitle,
} from "assets/styles/background";

const ImageBgTop = ({ background, title }) => {
  const animate = useRef();

  useEffect(() => {
    gsapFadeTop(animate.current);
  });

  return (
    <>
      <ImageContainer background={background} ref={animate}>
        <ImageContent>
          <ImageTitle>{title}</ImageTitle>
        </ImageContent>
      </ImageContainer>
      <BorderBrushTop />
    </>
  );
};

export default ImageBgTop;
