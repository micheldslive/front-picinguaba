import {
  ImageContainer,
  ImageContent,
  ImageTitle,
} from "assets/styles/background";
import { BorderBrushTop } from "assets/styles/bordas";

const ImageBgTop = ({background, title}) => {
  return (
    <>
      <ImageContainer background={background}>
        <ImageContent>
          <ImageTitle>{title}</ImageTitle>
        </ImageContent>
      </ImageContainer>
      <BorderBrushTop />
    </>
  );
};

export default ImageBgTop;
