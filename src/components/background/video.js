import { useEffect, useRef } from "react";
import { gsapFadeTop } from "utils/gsapEffect";
import VideoSRC from "assets/video/video-picinguaba.mp4";
import {
  Refugio,
  Title,
  TitleContent,
  VideoContainer,
  VideoContent,
  VideoElement,
} from "assets/styles/background";

const Video = () => {
  const animate = useRef();

  useEffect(() => {
    gsapFadeTop(animate.current);
  });

  return (
    <VideoContainer>
      <Title>
        <TitleContent>
          <Refugio />
        </TitleContent>
      </Title>
      <VideoContent>
        <VideoElement ref={animate} src={VideoSRC} autoPlay muted loop data-object-fit="cover" />
      </VideoContent>
    </VideoContainer>
  );
};

export default Video;
