import styled from "styled-components";

const Container = styled.div`
  height: fit-content;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Blur = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

Content.Title = styled.h1`
  /* Heading/H4/Semibold/Desktop */

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  /* or 129% */

  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;
  max-width: 555px;
  width: 100%;
`;

export { Container, Img, Blur, Content };
