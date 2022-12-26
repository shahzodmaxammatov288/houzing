import { Container, Content, Img } from "./style";
import noimg from "../../assets/img/noimg.jpg";
import category from "../../assets/img/category.png";
import { Blur } from "../Carousel/style";

const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={category || noimg} />
      <Blur />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
};

export default CategoryCard;
