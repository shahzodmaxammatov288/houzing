import React from "react";
import { Input } from "../Generic";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <h1>Hello</h1>
      <Input placeholder={"text"} width={200} />
    </Container>
  );
};

export default Home;
