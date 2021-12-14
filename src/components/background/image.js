import { useEffect, useRef } from "react";
import {
  ImageContainer,
  ImageContent,
  ImageTitle,
} from "assets/styles/background";
import { BorderBrushTop } from "assets/styles/bordas";
import { gsapTopEffect } from "utils/gsapEffect";

const ImageBgTop = ({ background, title }) => {
  const animate = useRef();

  useEffect(() => {
    gsapTopEffect(animate.current);
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
