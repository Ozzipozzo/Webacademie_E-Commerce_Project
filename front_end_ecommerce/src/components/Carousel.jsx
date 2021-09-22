import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const CarouselStyle = styled.div`
    .carousel_img {
        width: 60%;
        height: 30rem;
        margin: 0 auto;
        border-radius: 05%;
    }
`;

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <CarouselStyle>
        <img className="carousel_img" src="https://quality-green-cbd.fr/wp-content/uploads/2020/09/wallpaper-1.jpg" alt="" />
      </CarouselStyle>
      <CarouselStyle>
        <img className="carousel_img" src="https://t3.ftcdn.net/jpg/03/82/98/72/360_F_382987262_MzhgI3rl5EaMfqcgc4G7GLgAUQDw85XL.jpg" alt="" />
      </CarouselStyle>
      <CarouselStyle>
        <img className="carousel_img" src="https://cdn.radiofrance.fr/s3/cruiser-production/2021/06/512cbeec-938c-40ff-a961-a56ce4fbf68f/870x489_gettyimages-1195219587.webp" alt="" />
      </CarouselStyle>
      
    </Slider>
  );
}