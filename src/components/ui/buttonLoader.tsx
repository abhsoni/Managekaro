"use Client";
import React from "react";
import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dashAnimation = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
`;

const StyledSvg = styled.svg`
  width: ${(props) => props.width || "32px"};
  height: ${(props) => props.height || "32px"};
  transform-origin: center;
  animation: ${rotateAnimation} 2s linear infinite;
`;

const StyledCircle = styled.circle`
  fill: none;
  stroke: ${(props) => props.color || "hsl(214, 97%, 59%)"};
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: ${dashAnimation} 1.5s ease-in-out infinite;
`;

const ButtonLoader = ({ width = "32px", height = "32px", color = "#fff" }) => {
  return (
    <StyledSvg width={width} height={height} viewBox="25 25 50 50">
      <StyledCircle r="20" cy="50" cx="50" color={color} />
    </StyledSvg>
  );
};

export default ButtonLoader;
