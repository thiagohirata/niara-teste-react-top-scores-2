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
    rgb(21, 21, 21) 0%,
    rgb(61, 61, 61) 51%,
    rgb(21, 21, 21) 100%
  );
  background-size: 50px 50px;
  color: white;
  height: 500px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #aaf;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuItem = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: #ddd;
  font-size: 40px;
  padding: 10px;
  width: 300px;
  &:hover {
    color: #fff;
  }
`;
