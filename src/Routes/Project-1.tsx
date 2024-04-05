import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import img from "../IMG/project-1/show-1.jpeg";
import img1 from "../IMG/project-1/img-1.jpeg";
import img2 from "../IMG/project-1/img-2.jpeg";
import img3 from "../IMG/project-1/img-3.jpeg";

gsap.registerPlugin(ScrollTrigger);

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
  font-family: "Shadows Into Light", cursive;
  color: white;
  background-color: #1b1b1b;
  .Header {
    height: 28.2rem;
    position: relative;
    padding: 1.25rem;
    h1 {
      position: absolute;
      bottom: 0;
      text-align: center;
      font-stretch: expanded;
      font-size: 7.5vw;
      font-style: normal;
    }
    .Header-grid {
      display: grid;
      grid-template-columns: 1.3fr 0.5fr 0.5fr;
      text-align: center;
      font-size: 1.7vw;
      h2 {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        font-family: "Moirai One", system-ui;
      }
      h3 {
        font-size: 2.4vw;
        display: flex;
        align-items: flex-end;
        &:first-child {
          font-size: 3.5vw;
          font-weight: bold;
        }
      }
    }
  }
  .section-1 {
    .section-1__img {
      img {
        object-fit: cover;
        width: 100vw;
        height: 75vh;
      }
    }
    .section-1__text {
      padding: 1.9rem;
      margin: 12.5rem 0;
      display: flex;
      justify-content: space-between;
      h2 {
        font-size: 2.1vw;
      }
      p {
        width: 62%;
        font-size: 3.5vw;
      }
    }
    .section-1__img__box {
      padding: 1.9rem;
      position: relative;
      margin-bottom: 15rem;
      .img-1-box {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 50%;
        gap: 5px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .img-2-box {
        position: absolute;
        top: 0;
        right: 1.9rem;
        width: 20%;
        height: 20%;
        img {
          width: 100%;
        }
      }
      footer {
        position: absolute;
        font-size: 1.65vw;
        right: 1.25rem;
        bottom: 4rem;
        width: 30%;
      }
    }
  }
  .section-2 {
    padding: 1.9rem;
    padding-top: 9.4rem;
    background-color: #444;
    height: 100%;
    .section-2__item {
      position: relative;
      h1 {
        text-align: center;
        font-size: 10vw;
      }
    }
  }
  .section-3 {
    height: 100vh;
  }
`;
const TopBox = styled.div``;

function Project01() {
  const [videoEnd, setVideoEnd] = useState(true);
  const [clock, setClock] = useState("");
  const onClick = () => {
    gsap.to(".VideoBoxClass", { x: -1800, duration: 4 });
    setTimeout(() => {
      setVideoEnd(false);
    }, 3000);
  };
  setInterval(() => {
    setClock(new Date().toLocaleTimeString());
  });

  // const fixText = useRef(null);
  // useEffect(() => {
  //   const el = fixText.current;
  //   gsap.to(el, {
  //     // duration: 1,
  //     scrollTrigger: {
  //       trigger: el,
  //       start: "top 60%",
  //       pin: true,
  //       scrub: 10,
  //       markers: true,
  //     },
  //   });
  // }, []);

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
          <div className="Header">
            <h1>FW 2024 Womenswear Look Book</h1>
            <div className="Header-grid">
              <h3>PRADA</h3>
              <h3>Find Your Own</h3>
              <h2>{clock}</h2>
            </div>
          </div>
          <div className="section-1">
            <div className="section-1__img">
              <img src={img} alt="" />
            </div>
            <div className="section-1__text">
              <h2>PRADA 2024 FW</h2>
              <p>
                Fashion, far from being confined to fleeting trends, is an
                enduring manifestation of grace and elegance, a timeless
                testament to the artistry and innovation of the human spirit.
              </p>
            </div>
            <div className="section-1__img__box">
              <div className="img-1-box">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
              </div>
              <div className="img-2-box">
                <img src={img3} alt="" />
              </div>
              <footer>
                Modernity is not a rejection of tradition but rather a
                celebration of diversity, an acknowledgment of the myriad voices
                and perspectives that contribute to the rich tapestry of
                contemporary culture.
              </footer>
            </div>
          </div>
          <div className="section-2">
            <div className="section-2__item">
              <h1>Simplicity is the ultimate sophistication</h1>
            </div>
          </div>
          <div className="section-3">
            <div>
              <h1>Simplicity is the ultimate sophistication.</h1>
            </div>
          </div>
        </StartBox>
      )}
    </Wrapper>
  );
}

export default Project01;
