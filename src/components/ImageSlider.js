import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="Slider Image 1" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="Slider Image 2" />
      </Wrap>
      {/* Add more slides as needed */}
    </Carousel>
  );
}

export default ImageSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Ensures the image does not overflow */
  border-radius: 10px; /* Rounded corners */
  margin: 10px; /* Add spacing between wraps */

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 4px solid transparent;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }

  }
`;
