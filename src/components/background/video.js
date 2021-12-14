import { useEffect, useRef } from "react";
import { gsapTopEffect } from "../../utils/gsapEffect";
import {
  Refugio,
  Title,
  TitleContent,
  VideoContainer,
  VideoContent,
  VideoElement,
} from "../../assets/styles/background";
import VideoSRC from "../../assets/video/video-picinguaba.mp4";

const Video = () => {
  const animate = useRef();

  useEffect(() => {
    gsapTopEffect(animate.current);
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
