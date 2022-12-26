import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/cardMessage.svg";
import { ReactComponent as calculator } from "../../assets/icons/cardCalculate.svg";
import { ReactComponent as cardHouse } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  margin-top: 48px;
  padding: 48px 130px;
  background: #f5f7fc;
`;

const Content = styled.div`
  width: 100%;
  max-width: 235px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 40px;
`;

const Icon = styled.div``;
Icon.Email = styled(email)`
  & path {
    fill: #0061df;
  }
  margin-bottom: 24px;
`;
Icon.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;
Icon.CardHouse = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icon.CardMaps = styled(cardMaps)`
  margin-bottom: 24px;
`;

export { Container, Content, Wrapper, Icon };
