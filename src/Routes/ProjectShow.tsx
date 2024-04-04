import styled from "styled-components";
import bgImg from "../IMG/ProjectShow/bag.jpeg";
import showImg from "../IMG/ProjectShow/show1.jpeg";
import { useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

interface ProjectImgBox {
  rotateX: number;
  rotateY: number;
}

const ProjectImgBox = styled.div<ProjectImgBox>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) perspective(3000px);
  transform-style: preserve-3d;
  will-change: transform;
`;

const ProjectImg = styled.div`
  position: relative;
  width: 60vw;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

function ProjectShow() {
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [link, setLink] = useState(false);

  const mouseMove = function (e: React.MouseEvent<HTMLDivElement>) {
    const pageX = e.pageX;
    const pageY = e.pageY;

    const standardX = window.innerWidth / 2 - pageX;
    const standardY = window.innerHeight / 2 - pageY;

    const newRotateX = standardX / 20;
    const newRotateY = standardY / 20;

    setRotateX(newRotateY);
    setRotateY(newRotateX);

    gsap.to(".ProjectImgBox", {
      duration: 0.3,
      rotateX: newRotateY,
      rotateY: newRotateX,
    });
  };

  const mouseOut = () => {
    gsap.to(".ProjectImgBox", {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    });
  };

  return (
    <Wrapper>
      <ProjectImgBox
        className="ProjectImgBox"
        rotateX={rotateX}
        rotateY={rotateY}
        onMouseMove={mouseMove}
        onMouseOut={mouseOut}
      >
        <ProjectImg>
          <Link to="/project01">
            <img src={showImg} />
          </Link>
        </ProjectImg>
      </ProjectImgBox>
    </Wrapper>
  );
}
export default ProjectShow;
