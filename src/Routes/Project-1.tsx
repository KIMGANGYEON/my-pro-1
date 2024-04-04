import gsap from "gsap";
import React, { useState } from "react";
import styled from "styled-components";
import img from "../IMG/project-1/show-1.jpeg";

const Wrapper = styled.div`
  overflow: hidden;
`;
const VideoBox = styled.div`
  overflow: hidden;
  position: relative;
  video {
    height: 100vh;
    width: 100vw;
    display: block;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 40px;
    padding: 10px 20px;
    border: none;
    background-color: transparent;
    font-size: 25px;
    color: white;
    transition: all 0.2s linear;
    &:hover {
      scale: 1.1;
      color: gray;
    }
  }
`;
const StartBox = styled.div`
  width: 100%;
  height: 100%;
`;
const TopBox = styled.div``;

function Project01() {
  const [videoEnd, setVideoEnd] = useState(true);

  const onClick = () => {
    gsap.to(".VideoBoxClass", { x: -1800, duration: 4 });
    setTimeout(() => {
      setVideoEnd(false);
    }, 2500);
  };
  return (
    <Wrapper>
      {videoEnd ? (
        <VideoBox className="VideoBoxClass">
          <video controls autoPlay muted>
            <source src="/videos/prada.mp4" type="video/mp4" />
          </video>
          <button onClick={onClick}>Skip</button>
        </VideoBox>
      ) : (
        <StartBox>TopBox</StartBox>
      )}
    </Wrapper>
  );
}

export default Project01;
