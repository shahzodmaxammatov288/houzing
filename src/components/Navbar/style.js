import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoImg } from "../../assets/icons/logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--colorPrimary);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: var(--padding);
  height: 64px;

  font-size: 16px;
  width: 100%;
  max-width: 1440px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};

  .active {
    color: #b8ff06;
  }
`;

const Logo = styled(LogoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #fff;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  margin: 0 32px;
  color: #fff;
`;

export { Container, Wrapper, Section, Logo, Link, Main };
