import styled from "styled-components";
import img from "../IMG/myImg.jpeg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyBox = styled.div`
  width: 900px;
  height: 300px;
  margin-top: 100px;
  border: 3px solid rgba(0, 0, 0, 0.6);
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.3);
`;

const MyImg = styled.div`
  position: absolute;
  top: -50px;
  left: -100px;
  img {
    border: 1px solid black;
    background-size: cover;
    background-position: center center;
  }
`;

const MyLink = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  a {
    font-size: 20px;
    padding-bottom: 25px;
    &:hover {
      color: pink;
    }
    &:active {
      color: blue;
    }
  }
`;

const MyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 30px;
  span {
    font-size: 20px;
    margin-right: 60px;
    text-decoration: underline 1px solid black;
    text-underline-offset: 5px;
  }
`;

const MyWork = styled.div`
  width: 600px;
  height: 100%;
  margin: 80px 0px;
  padding: 30px;
  background-color: burlywood;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const MyStory = styled.div`
  width: 700px;
  height: 500px;

  border: 1px solid black;
  padding: 20px;
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

const NextBtn = styled.button`
  font-size: 30px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 5px 20px;
  background-color: pink;
  color: white;
  transition: all 0.5s linear;
  &:hover {
    background-color: black;
    color: skyblue;
  }
`;

function Home() {
  return (
    <>
      <Wrapper>
        <MyBox>
          <MyImg>
            <img src={img} />
          </MyImg>
          <MyLink>
            <a href="https://github.com/KIMGANGYEON">깃허브 구경 가기♥️</a>
          </MyLink>
          <MyText>
            <span>이름</span>
            <span>생년월일 = 2000년 9월 23일</span>
            <span>전화번호</span>
            <span>주소</span>
            <span>메일 = rkddus3177@naver.com</span>
          </MyText>
        </MyBox>
        <MyWork>
          <h1>학력 및 경력</h1>
          <span>진주중학교</span>
          <span>진주기계공업고등학교</span>
          <span>육군 병장 만기 전역(경기도 남양주)</span>
          <span>뷔페,주방,서빙,카페,귀금속,노가다 알바경험</span>
        </MyWork>
        <MyStory>
          <h1>코딩을 시작한 이유</h1>
          <p>dkdkdkdddddddsasdfasdfasdfssk</p>
        </MyStory>
        <Link to="/projectshow">
          <NextBtn>포토폴리오 보기</NextBtn>
        </Link>
      </Wrapper>
    </>
  );
}
export default Home;
