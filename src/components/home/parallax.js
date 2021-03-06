import { useEffect, useRef } from "react";
import { gsapFadeMove } from "utils/gsapEffect";
import {
  VilaParallaxBG,
  VilaParallaxBorder,
  VilaParallaxContainer,
  VilaParallaxContent,
  VilaParallaxDescription,
  VilaParallaxTitle,
} from "assets/styles/home";

export const VilaParallax = ({ id, bg, bdBg, bdColor, bgColor, title, desc }) => {

  const animate = useRef();

  useEffect(() => {
    gsapFadeMove(animate.current);
  }, [animate]);
  
  return (
    <>
      <VilaParallaxBG gradient={id === 1 ? true : false} bg={bg} />
      <VilaParallaxBorder bdBg={bdBg} bdColor={bdColor} />
      <VilaParallaxContainer bgColor={bgColor}>
        <VilaParallaxContent ref={animate}>
          <VilaParallaxTitle>{title}</VilaParallaxTitle>
          <VilaParallaxDescription>{desc}</VilaParallaxDescription>
        </VilaParallaxContent>
      </VilaParallaxContainer>
    </>
  );
};
