import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import img from "../IMG/project-1/show-1.jpeg";
import img1 from "../IMG/project-1/img-1.jpeg";
import img2 from "../IMG/project-1/img-2.jpeg";
import img3 from "../IMG/project-1/img-3.jpeg";
import img4 from "../IMG/project-1/img-4.jpeg";
import img5 from "../IMG/project-1/img-5.jpeg";
import img6 from "../IMG/project-1/img-6.jpeg";
import img7 from "../IMG/project-1/img-7.jpeg";
import img8 from "../IMG/project-1/img-8.jpeg";
import img9 from "../IMG/project-1/img-9.jpeg";
import img10 from "../IMG/project-1/img-10.jpeg";
import img11 from "../IMG/project-1/img-11.jpeg";
import img12 from "../IMG/project-1/img-12.jpeg";
import img13 from "../IMG/project-1/img-13.jpeg";
import img14 from "../IMG/project-1/img-14.jpeg";
import img15 from "../IMG/project-1/img-15.jpeg";
import img16 from "../IMG/project-1/img-16.jpeg";
import img17 from "../IMG/project-1/img-17.jpeg";
import img29 from "../IMG/project-1/img-29.jpeg";
import img30 from "../IMG/project-1/img-30.jpeg";
import di1 from "../IMG/project-1/di-1.jpeg";
import di2 from "../IMG/project-1/di-2.jpeg";

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
`;

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
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
              </div>
              <div className="img-2-box">
                <img src={img3} alt="img3" />
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
            <div className="section-2__text">
              <h1>Simplicity is the ultimate sophistication</h1>
            </div>
            <div className="section2__img">
              <div className="section2__imgbox1">
                <img src={img4} alt="img4" />
                <img src={img5} alt="img5" />
              </div>
              <div className="flex-box-1">
                <div className="section2__imgbox2">
                  <img src={img6} alt="img6" />
                  <img src={img7} alt="img7" />
                </div>
              </div>
              <div className="section2__imgbox3">
                <img src={img8} alt="img6" />
                <img src={img9} alt="img7" />
              </div>
              <div className="flex-box-2">
                <div className="section2__imgbox4">
                  <img src={img10} alt="img6" />
                  <img src={img11} alt="img7" />
                </div>
              </div>
              <div className="section2__imgbox5">
                <img src={img12} alt="img6" />
                <img src={img13} alt="img7" />
              </div>
            </div>
          </div>
          <div className="section-3">
            <div className="section-3-imgbox">
              <img src={img29} alt="img28" />
              <img src={img30} alt="img28" />
              <h1>
                True style transcends mere fashion; it is a profound
                understanding of one's identity and an authentic expression of
                self, radiating confidence and individuality.
              </h1>
            </div>
          </div>
          <div className="section-4">
            <div className="slide-box">
              <div className="slide-box-1">
                <div className="title-text">
                  <h1>Look Book 1</h1>
                </div>
                <div className="img">
                  <img src={img14} alt="img14" />
                  <div className="main-text">
                    <h1>Look 1</h1>
                    <p>simple black dress</p>
                  </div>
                </div>
              </div>
              <div className="slide-box-2">
                <div className="title-text">
                  <h1>Look Book 2</h1>
                </div>
                <div className="img">
                  <img src={img15} alt="img15" />
                  <div className="main-text">
                    <h1>Look 2</h1>
                    <p>simple purple dress</p>
                  </div>
                </div>
              </div>
              <div className="slide-box-3">
                <div className="title-text">
                  <h1>Look Book 3</h1>
                </div>
                <div className="img">
                  <img src={img16} alt="img16" />
                  <div className="main-text">
                    <h1>Look 3</h1>
                    <p>simple white jacket</p>
                  </div>
                </div>
              </div>
              <div className="slide-box-4">
                <div className="title-text">
                  <h1>Look Book 4</h1>
                </div>
                <div className="img">
                  <img src={img17} alt="img17" />
                  <div className="main-text">
                    <h1>Look 4</h1>
                    <p>simple purple cardigan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-5">
            <div className="text-box">
              <h1>Womens →</h1>
              <h1>Mens →</h1>
              <h1>Bags →</h1>
              <h1>Gifts →</h1>
            </div>
            <div className="option-box">
              <div className="arrow-box">←</div>
              <div className="text-box2">
                <h1>Womens</h1>
                <div className="text-array">
                  <h2>ready to wear</h2>
                  <h2>bags</h2>
                  <h2>shoes</h2>
                  <h2>accessories</h2>
                  <h2>
                    lifestyle
                    <br />
                    accessories
                  </h2>
                  <h2>travel</h2>
                </div>
              </div>
              <div className="footer-1">
                <h1>PRADA</h1>
              </div>
            </div>
          </div>
          <div className="section-6">
            <div className="director-box ">
              <div className="grid-box">
                <div className="footer">
                  <h1>prada</h1>
                  <h1>prada 2024 fw WomenWear</h1>
                </div>
                <div className="main">
                  <div className="text__box">
                    <h1>our</h1>
                    <h2>designer</h2>
                  </div>
                  <div className="img-box">
                    <img src={di1} alt="" />
                    <img src={di2} alt="" />
                  </div>
                  <div className="name">
                    <h1>RAF SIMONS</h1>
                    <h1>Miuccia Prada Bianchi</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-7">
            <div className="video-box">
              <div className="video-1">
                <video autoPlay muted loop>
                  <source src="/videos/prada-1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="video-2">
                <video autoPlay muted loop>
                  <source src="/videos/prada-4.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="footer">
              <h1>ll</h1>
              <h2>
                A knowledge of history not only informs the contemporaneous, but
                defines it – clothes are referent to different eras, other
                times, synchronous echoes recontextualized. The past is an
                instrument, a tool for learning, used here to try to invent
                something new. Yet rather than an intellectual examination, this
                collection is an emotional reaction, to ideals of beauty that
                still feel resonant.
              </h2>
            </div>
            <div className="video-3">
              <video autoPlay muted loop>
                <source src="/videos/prada-2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </StartBox>
      )}
    </Wrapper>
  );
}

export default Project01;
