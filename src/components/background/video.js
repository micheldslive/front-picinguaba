import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Refugio,
  Title,
  TitleContent,
  VideoContainer,
  VideoContent,
  VideoElement,
} from "assets/styles/background";
import VideoSRC from "assets/video/video-picinguaba.mp4";

const Video = () => {
  const animate = useRef();

  useEffect(() => {
    gsap.fromTo(animate.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  });

  return (
    <VideoContainer ref={animate}>
      <Title>
        <TitleContent>
          <Refugio />
        </TitleContent>
      </Title>
      <VideoContent>
        <VideoElement src={VideoSRC} autoPlay muted loop data-object-fit="cover" />
      </VideoContent>
    </VideoContainer>
  );
};

export default Video;
