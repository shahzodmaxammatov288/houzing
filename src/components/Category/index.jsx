import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard";

import { Container, Content } from "./style";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3,
  speed: 500,
  dots: true,

  appendDots: (dots) => <h1>{dots}</h1>,
};

const Category = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);
  console.log(data);
  return (
    <Container>
      <Content>
        <h1 className="title">Category</h1>
        <p className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </Content>
      <div>
        <Slider {...settings}>
          {data.map((value) => {
            return (
              <CategoryCard
                onClick={() => navigate(`/properties?category_id=${value?.id}`)}
                data={value}
              />
            );
          })}
        </Slider>
      </div>
    </Container>
  );
};

export default Category;
