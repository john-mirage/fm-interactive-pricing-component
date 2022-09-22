import { Container, Header, PageViews, PricePerPeriod, Price, Period, Footer, ConfirmButton } from "@components/Card/Card.style";
import FeatureList from "@components/FeatureList/FeatureList";
import PageViewsRange from "@components/PageViewsRange/PageViewsRange";
import { useState } from "react";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Card() {
  const [pageViews, setPageViews] = useState("100k");
  const [period, setPeriod] = useState("month");
  const [price, setPrice] = useState(16);

  return (
    <Container>
      <Header>
        <PageViews>{pageViews} pageviews</PageViews>
        <PricePerPeriod>
          <Price>{priceFormatter.format(price)}</Price>
          <Period> / {period}</Period>
        </PricePerPeriod>
        <PageViewsRange />
      </Header>
      <Footer>
        <FeatureList />
        <ConfirmButton>Start my trial</ConfirmButton>
      </Footer>
    </Container>
  );
}

export default Card;