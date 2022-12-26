import styled from "styled-components";
import { ReactComponent as map } from "../../assets/icons/map.svg";
import { ReactComponent as email } from "../../assets/icons/email 1.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";

const Container = styled.div`
  height: 417px;
  background: #0d263b;

  position: relative;
  display: flex;
  justify-content: space-around;

  margin: auto;
  width: 100%;
  margin-top: 96 px;
  padding: 48px 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 235px;
  display: flex;
  flex-direction: column;
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Color / 5 */

  color: #ffffff;

  margin-bottom: 32px;
`;

Content.Item = styled.div`
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  /* Color / 5 */

  color: #ffffff;

  margin-bottom: 20px;
`;

const Icon = styled.div``;
Icon.Map = styled(map)`
  width: 54px;
  margin-right: 21px;
  & path {
    fill: #ffffff;
  }
`;
Icon.Email = styled(email)`
  margin-right: 21px;
  & path {
    fill: #ffffff;
  }
`;
Icon.Phone = styled(phone)`
  margin-right: 21px;
  & path {
    fill: #ffffff;
  }
`;

export { Container, Content, Icon };
