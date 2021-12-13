import {
  ImageContainer,
  ImageContent,
  ImageTitle,
} from "assets/styles/background";
import { BorderBrushTop } from "assets/styles/bordas";
import LazyLoad from "react-lazyload";

const ImageBgTop = ({ background, title }) => {
  return (
    <>
      <LazyLoad height={200}>
        <ImageContainer background={background}>
          <ImageContent>
            <ImageTitle>{title}</ImageTitle>
          </ImageContent>
        </ImageContainer>
        <BorderBrushTop />
      </LazyLoad>
    </>
  );
};

export default ImageBgTop;
