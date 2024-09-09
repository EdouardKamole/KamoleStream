import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";

function Home() {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
    </Container>
  );
}

export default Home;
const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative; /* Make sure to use relative positioning for the Container */
  overflow: hidden; /* Hide overflow to ensure background image covers without scroll bars */

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; /* Cover the entire Container */
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    z-index: -1; /* Ensure it is behind the content */
  }
`;
