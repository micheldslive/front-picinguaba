import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ImageContainer,
  ImageContent,
  ImageTitle,
} from "assets/styles/background";
import { BorderBrushTop } from "assets/styles/bordas";

const ImageBgTop = ({ background, title }) => {
  const animate = useRef();

  useEffect(() => {
    gsap.fromTo(animate.current, { opacity: 0 }, { opacity: 1, duration: 1 });
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
