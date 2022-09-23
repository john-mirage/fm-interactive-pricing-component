import styled from "styled-components";
import BaseRange from "@components/Range";
import BaseSwitch from "@components/Switch";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 2.25rem; /* 36px */

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "pageViews      pricePerMonth"
                         "pageViewsRange pageViewsRange"
                         "periodSwitch   periodSwitch";
    padding-left: 2.75rem; /* 44px */
    padding-right: 2.75rem; /* 44px */
    padding-bottom: 2.5rem; /* 40px */
  }
`;

export const PageViews = styled.p`
  margin-bottom: 1rem; /* 16px */
  font-size: 0.75rem; /* 12px */
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1rem; /* 1.6px */
  color: ${({theme}) => theme.color.textBody};

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    margin: 0;
    grid-area: pageViews;
    justify-self: left;
  }
`;

export const Range = styled(BaseRange)`
  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    margin-top: 1.5rem; /* 24px */
    margin-bottom: 2.5rem; /* 40px */
    grid-area: pageViewsRange;
  }
`;

export const PriceForPeriod = styled.p`
  margin-top: 1.5rem; /* 24px */
  margin-bottom: 2rem; /* 32px */
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    margin: 0;
    grid-area: pricePerMonth;
    justify-self: right;
  }
`;

export const Price = styled.span`
  margin-right: 0.5rem; /* 8px */
  font-size: 2rem; /* 32px */
  font-weight: 800;
  letter-spacing: -0.0625rem; /* -1px */
  color: ${({theme}) => theme.color.textHeading};
`;

export const Period = styled.span`
  font-size: 0.875rem; /* 14px */
  font-weight: 600;
  color: ${({theme}) => theme.color.textBody};
`;

export const Switch = styled(BaseSwitch)`
  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    grid-area: periodSwitch;
  }
`;