import styled from "styled-components";
// import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 96px 130px;
  max-width: 1440px;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 32px;
`;

export { Container, Content };
