import styled, { keyframes } from "styled-components";

const backgroundKeyframes = keyframes`
{
  from {
    background-position-y: 0px;
    background-position-x: 0px;
  }
  to {
    background-position-y: 200px;
    background-position-x: 200px;
  }
}
`;

export const BackButton = styled.button`
  position: absolute;
  font-size: 20px;
  top: 20px;
  left: 20px;
  cursor: pointer;
  border: none;
  padding: 5px;
  color: white;
  background: transparent;
  border-radius: 4px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
export const Container = styled.div`
  &,
  * {
    font-family: "Permanent Marker", cursive;
  }
  animation: ${backgroundKeyframes} 5s infinite linear;
  padding: 20px;
  background-color: rgb(2, 0, 36);
  background-image: linear-gradient(
    324deg,
    rgba(25, 31, 75, 1) 0%,
    rgba(10, 13, 54, 1) 51%,
    rgba(28, 46, 79, 1) 100%
  );
  background-size: 50px 50px;
  color: white;
  height: 500px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridLine = styled.div`
  display: flex;
  font-size: 26px;
  flex-direction: row;
  margin-top: 20px;
`;

export const GridCell = styled.div`
  width: 200px;
  &.points {
    text-align: right;
  }
  &.actions {
    padding-left: 10px;
    text-align: right;
    width: 120px;
  }
`;

export const ReportButton = styled.button`
  cursor: pointer;
  border: 1px solid white;
  padding: 5px;
  color: white;
  background: transparent;
  border-radius: 4px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const LoadingMessage = styled.div`
  height: 200px;
  text-align: center;
  margin-top: 100px;
`;
