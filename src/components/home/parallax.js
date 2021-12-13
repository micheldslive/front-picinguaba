import {
  VilaParallaxBG,
  VilaParallaxBorder,
  VilaParallaxContainer,
  VilaParallaxContent,
  VilaParallaxDescription,
  VilaParallaxTitle,
} from "assets/styles/home";

export const VilaParallax = ({ id, bg, bdBg, bdColor, bgColor, title, desc }) => {
  
  return (
    <>
      <VilaParallaxBG gradient={id === 1 ? true : false} bg={bg} />
      <VilaParallaxBorder bdBg={bdBg} bdColor={bdColor} />
      <VilaParallaxContainer bgColor={bgColor}>
        <VilaParallaxContent>
          <VilaParallaxTitle>{title}</VilaParallaxTitle>
          <VilaParallaxDescription>{desc}</VilaParallaxDescription>
        </VilaParallaxContent>
      </VilaParallaxContainer>
    </>
  );
};
