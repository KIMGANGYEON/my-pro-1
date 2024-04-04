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
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  img {
    filter: brightness(70%);
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  h1 {
    position: absolute;
    top: 0;
    color: white;
    padding: 4%;
    font-size: 20vw;
    text-transform: uppercase;
  }
  h2 {
    position: absolute;
    top: 55%;
    right: 10%;
    color: white;
    font-size: 2vw;
    line-height: 40px;
  }
  h3 {
    position: absolute;
    width: 30%;
    top: 75%;
    right: 15%;
    color: #eee8e8;
    font-size: 27px;
    font-weight: 400;
    word-spacing: 2px;
    line-height: 30px;
  }
`;
const HeaderText = styled.div``;

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
        <StartBox>
          <img src={img} />
          <h1>prada</h1>
          <h2>
            FW 2024 Womens Look Book <br />
            FROM MILANO 1913{" "}
          </h2>
          <h3>
            What you wear is how you present yourself to the world especially
            today when human contacts go so fast. Fashion is instant language.
          </h3>
          <HeaderText></HeaderText>
        </StartBox>
      )}
    </Wrapper>
  );
}

export default Project01;
