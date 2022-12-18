import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard";

import { Container } from "./style";

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
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          {data.map((value) => {
            return (
              <CategoryCard
                onClick={() => navigate(`/properties?category=${value?.name}`)}
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
