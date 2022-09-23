import { useState } from "react";
import * as Styled from "@components/Card/Header/style";
import Range from "@components/Card/Header/Range";
import Checkbox from "@components/Card/Header/Checkbox";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Header() {
  const [pageViews, setPageViews] = useState("100k");
  const [period, setPeriod] = useState("month");
  const [price, setPrice] = useState(16);

  function getPrice(newPageViews: string) {
    switch (newPageViews) {
      case "10k":
        return 8;
      case "50k":
        return 12;
      case "100k":
        return 16;
      case "500k":
        return 24;
      case "1m":
        return 36;
      default:
        throw new Error("The page views are not valid");
    }
  }

  function getPeriodPrice(newPrice: number, newPeriod: string) {
    switch (newPeriod) {
      case "month":
        return newPrice;
      case "year":
        return (newPrice * 12) * 0.75;
      default:
        throw new Error("The period is not valid");
    }
  }

  function updatePageViews(newPageViews: string) {
    setPageViews(newPageViews);
    const newPrice = getPrice(newPageViews);
    const newPeriodPrice = getPeriodPrice(newPrice, period);
    setPrice(newPeriodPrice);
  }

  function updatePeriod(newPeriod: string) {
    setPeriod(newPeriod);
    const newPrice = getPrice(pageViews);
    const newPeriodPrice = getPeriodPrice(newPrice, newPeriod);
    setPrice(newPeriodPrice);
  }

  return (
    <Styled.Header>
      <Styled.PageViews>{pageViews} pageviews</Styled.PageViews>
      <Range updatePageViews={updatePageViews} />
      <Styled.PriceForPeriod>
        <Styled.Price>{priceFormatter.format(price)}</Styled.Price>
        <Styled.Period> / {period}</Styled.Period>
      </Styled.PriceForPeriod>
      <Checkbox updatePeriod={updatePeriod} />
    </Styled.Header>
  );
}

export default Header;