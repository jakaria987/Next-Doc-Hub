"use client"
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import bgImg from "../../../public/Images/typing-girl.svg";
import { headingAnimationColor, primaryColor } from "../../components/TypingTest/color/color";
import TypingCard from "../../components/TypingTest/TypingCard";
import TypingHead from "../../components/TypingTest/TypingHead";

const Typingtest = () => {
  const [currentSpeed, setCurrentSpeed] = useState(0);

  const homepageCallback = (currentSpeed) => {
    setCurrentSpeed(currentSpeed);
  };

  return (
    <Div>
      <MainDiv>
      <TypingHead currentSpeed={currentSpeed} />
        <MainContainer>
       
          <LeftContainer>
            <TypingCard homepageCallback={homepageCallback} />
          </LeftContainer>
          <RightContainer>
            <Image src={bgImg} alt="typing-gril" width="" height="" />
            <h3>
            
            </h3>
          </RightContainer>
        </MainContainer>
      </MainDiv>
    </Div>
  );
};

export default Typingtest;

const Div = styled.div`
  padding: 10px;
  width: 100%;
  height: auto;

  @media (min-width: 968px) {
    height: 100vh;
    width: 100vw;
  }
`;

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${primaryColor};
  border-radius: 0.8rem;
  box-shadow: 0 0 10px 3px rgba(33, 0, 87, 0.5);
  overflow: hidden;
`;

const MainContainer = styled.div`
  display: grid;
  width: 100%;
  padding: 0 20px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 986px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LeftContainer = styled.div``;
const RightContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    width: 300px;
    position: absolute;
    bottom: 0;
    left: 50%;
    line-height: 2rem;
    transform: translateX(-50%);
    text-align: center;
    color: #ffffff;

    span {
      color: ${headingAnimationColor};
    }
  }
`;