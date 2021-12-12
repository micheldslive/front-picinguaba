import { Component } from "react";
import { VideoContainer, VideoContent, VideoElement } from "assets/styles/video";
import VideoSRC from "assets/video/video-picinguaba.mp4";

export default class Video extends Component {
  render() {
    return (
      <VideoContainer>
        <VideoContent>
          <VideoElement src={VideoSRC} autoPlay muted loop data-object-fit="cover"/>
        </VideoContent>
      </VideoContainer>
    );
  }
}
