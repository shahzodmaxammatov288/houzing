import { Container, Content, Wrapper, Icon } from "./style";

const Why = () => {
  return (
    <Container>
      <Content>
        <h1 className="title">Why Choose Us</h1>
        <p className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </Content>
      <Wrapper>
        <Content>
          <Icon.Email />
          <div className="subTitle">Trusted By Thousands</div>
          <div className="info">
            Trusted By Thousands With over 1 million+ homes for sale available
            on the website, Trulia can match you with a house you will want to
            call home.
          </div>
        </Content>
        <Content>
          <Icon.CardHouse />
          <div className="subTitle">Trusted By Thousands</div>
          <div className="info">
            Trusted By Thousands With over 1 million+ homes for sale available
            on the website, Trulia can match you with a house you will want to
            call home.
          </div>
        </Content>
        <Content>
          <Icon.Calculator />
          <div className="subTitle">Trusted By Thousands</div>
          <div className="info">
            Trusted By Thousands With over 1 million+ homes for sale available
            on the website, Trulia can match you with a house you will want to
            call home.
          </div>
        </Content>
        <Content>
          <Icon.CardMaps />
          <div className="subTitle">Trusted By Thousands</div>
          <div className="info">
            Trusted By Thousands With over 1 million+ homes for sale available
            on the website, Trulia can match you with a house you will want to
            call home.
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Why;
