import { Container, Header, PageViews, PricePerPeriod, Price, Period, Footer, ConfirmButton } from "@components/Card/Card.style";
import FeatureList from "@components/FeatureList/FeatureList";
import PageViewsSelector from "@components/PageViewsSelector/PageViewsSelector";
import PlanSelector from "@components/PlanSelector/PlanSelector";
import { useEffect, useState } from "react";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Card() {
  const [pageViews, setPageViews] = useState("100k");
  const [period, setPeriod] = useState("month");
  const [price, setPrice] = useState(16);

  function getPeriodPrice(currentPrice: number, currentPeriod: string) {
    switch (currentPeriod) {
      case "month":
        return currentPrice;
      case "year":
        const discount = (currentPrice * 12) * 0.25;
        return (currentPrice * 12) - discount;
      default:
        throw new Error("The period is not valid");
    }
  }

  useEffect(() => {
    switch (pageViews) {
      case "10k":
        setPrice(getPeriodPrice(8, period));
        break;
      case "50k":
        setPrice(getPeriodPrice(12, period));
        break;
      case "100k":
        setPrice(getPeriodPrice(16, period));
        break;
      case "500k":
        setPrice(getPeriodPrice(24, period));
        break;
      case "1m":
        setPrice(getPeriodPrice(36, period));
        break;
      default:
        throw new Error("The page views value is not valid");
    }
  }, [pageViews, period]);

  console.log(price, period);

  return (
    <Container>
      <Header>
        <PageViews>{pageViews} pageviews</PageViews>
        <PageViewsSelector setPageViews={setPageViews} />
        <PricePerPeriod>
          <Price>{priceFormatter.format(price)}</Price>
          <Period> / {period}</Period>
        </PricePerPeriod>
        <PlanSelector setPeriod={setPeriod} />
      </Header>
      <Footer>
        <FeatureList />
        <ConfirmButton>Start my trial</ConfirmButton>
      </Footer>
    </Container>
  );
}

export default Card;