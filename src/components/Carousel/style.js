import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  height: 571px;
  position: relative;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  left: ${({ left }) => left && "20px"};
  right: ${({ left }) => !left && "20px"};
  transform: ${({ left }) => (!left ? "rotate(-180deg)" : "rotate(0deg)")};
  width: 50px;
  height: 50px;
  padding: 18px;
  background: rgb(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  :hover {
    background: rgb(255, 255, 255, 0.4);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Blur = styled.div`
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
  /* Display/Bold/Small */

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  /* identical to box height, or 109% */

  letter-spacing: -0.02em;

  color: #ffffff;
`;

Content.Desc = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #ffffff;
`;

Content.Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height, or 129% */

  letter-spacing: -0.02em;

  color: #ffffff;
`;

export { Container, Arrow, Img, Blur, Content };
