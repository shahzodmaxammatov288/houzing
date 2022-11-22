import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "light":
      return {
        background: "#fff",
        border: "1px solid #e6e9ec",
        color: "#0d263b",
      };
    case "primary":
      return {
        background: "#0061df",
        border: "none",
        color: "#fff",
      };
    default:
      return {
        background: "#0061df",
        border: "none",
        color: "#fff",
      };
  }
};

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;

  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  outline: none;
  border: 1px solid #e6e9ec;
  padding-left: ${({ icon }) => (icon ? "35px" : "20px")};
  /* ${getType} */
`;

const Wrapper = styled.div`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export { Container, Wrapper, Icon };
