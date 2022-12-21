import styled from "styled-components";
import { Select } from "antd";

import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as filter } from "../../assets/icons/setting-lines.svg";
import { ReactComponent as search } from "../../assets/icons/001-loupe.svg";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;

  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

const Icons = styled.div``;

Icons.Houses = styled(houses)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Search = styled(search)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: #fff;
  border: 1px solid #e6e9ec;
`;

const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

const SelectAnt = styled(Select)`
  min-width: 200px;
  width: 100%;
  max-width: 200px;

  .ant-select-selector {
    height: 44px !important;
  }

  .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
`;

export { Container, Icons, MenuWrapper, Section, SelectAnt };
