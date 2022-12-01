import React from "react";
import GenCarousel from "../Carousel";
import HouseCard from "../HouseCard";
import CategoryCard from "../CategoryCard";
import { Container } from "./style";
import Category from "../Category";

const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <Category />
    </Container>
  );
};

export default Home;
