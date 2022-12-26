import React from "react";
import GenCarousel from "../Carousel";
import { Container } from "./style";
import Category from "../Category";
import Recommended from "../Recommended";
import Why from "../Why";
import Recent from "../Recent";
import Banner from "../Banner";

const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Recent />
    </Container>
  );
};

export default Home;
