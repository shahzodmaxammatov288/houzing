import { Dropdown } from "antd";
import React, { useRef } from "react";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section } from "./style";

const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input ref={countryRef} placeholder="Country" />
        <Input ref={regionRef} placeholder="Region" />
        <Input ref={cityRef} placeholder="City" />
        <Input ref={zipRef} placeholder="Zip Code" />
      </Section>
      <h1 className="subTitle">Apartment Info</h1>
      <Section>
        <Input ref={roomsRef} placeholder="Rooms" />
        <Input ref={sizeRef} placeholder="Size" />
        <Input ref={sortRef} placeholder="Sort" />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder="Min price" />
        <Input ref={maxPriceRef} placeholder="Max price" />
      </Section>
      <Section footer>
        <h1 className="subTitle">Footer</h1>
      </Section>
    </MenuWrapper>
  );

  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
      >
        <div>
          <Button type={"light"}>
            <Icons.Filter />
            Advanced
          </Button>
        </div>
      </Dropdown>
      <Button type={"primary"}>
        <Icons.Search />
        Search
      </Button>
    </Container>
  );
};

export default Filter;
