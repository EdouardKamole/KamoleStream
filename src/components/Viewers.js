import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="Disney Viewer" />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-marvel.png" alt="Marvel Viewer" />
      </Wrap>

      <Wrap>
        <img
          src="/images/viewers-national.png"
          alt="National Geographic Viewer"
        />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-pixar.png" alt="Pixar Viewer" />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-starwars.png" alt="Star Wars Viewer" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px; /* Add gap between items */
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden; /* Ensure the image stays inside the border */
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; /* Smooth transitions */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 250ms ease-in-out; /* Add a zoom effect */
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05); /* Slightly enlarge the Wrap */
    border-color: rgba(249, 249, 249, 0.8);

    img {
      transform: scale(1.1); /* Zoom effect on hover */
    }
  }
`;
