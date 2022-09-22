import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 33.75rem; /* 540px */
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-radius: 0.5rem; /* 8px */
  background-color: ${({theme}) => theme.color.pricingComponentBackground};
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "pageViews         pricePerMonth"
                         "pageViewsSelector pageViewsSelector"
                         "planSelector      planSelector";
    padding-left: 2.75rem; /* 44px */
    padding-right: 2.75rem; /* 44px */
  }
`;

export const PageViews = styled.p`
  margin-bottom: 1rem; /* 16px */
  font-size: 0.75rem; /* 12px */
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1rem; /* 1.6px */
  color: ${({theme}) => theme.color.text};

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    grid-area: pageViews;
    justify-self: left;
  }
`;

export const PricePerPeriod = styled.p`
  margin-top: 1.5rem; /* 24px */
  margin-bottom: 2rem; /* 32px */
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    grid-area: pricePerMonth;
    justify-self: right;
  }
`;

export const Price = styled.span`
  margin-right: 0.5rem; /* 8px */
  font-size: 2rem; /* 32px */
  font-weight: 800;
  letter-spacing: -0.0625rem; /* -1px */
`;

export const Period = styled.span`
  font-size: 0.875rem; /* 14px */
  font-weight: 600;
  color: ${({theme}) => theme.color.text};
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem; /* 24px */
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-top: 0.0625rem solid ${({theme}) => theme.color.emptySliderBar};

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2.75rem; /* 44px */
    padding-right: 2.75rem; /* 44px */
  }
`;

export const ConfirmButton = styled.button.attrs(() => ({
  type: "button"
}))`
  cursor: pointer;
  font-size: 0.75rem; /* 12px */
  background: ${({theme}) => theme.color.textAndCtaBackground};
  color: ${({theme}) => theme.color.ctaText};
  border: 0.125rem solid ${({theme}) => theme.color.textAndCtaBackground}; /* 2px */
  border-radius: 9999px;
  box-shadow: 0 0 0 0 ${({theme}) => theme.color.ctaShadow};
  outline-color: ${({theme}) => theme.color.sliderBackground};
  font-weight: 800;
  padding-block: 0.75rem; /* 12px */
  padding-inline: 2.5rem; /* 40px */
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  appearance: none;

  &:not(:active):focus-visible {
    outline-offset: 0.25rem; /* 4px */
  }

  &:hover {
    color: ${({theme}) => theme.color.ctaTextHover};
  }

  &:not(:active):hover {
    box-shadow: 0 0 0 0.25rem ${({theme}) => theme.color.ctaShadow}; /* 4px */
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      color 150ms ease,
      box-shadow 150ms ease,
      outline-offset 150ms ease;
  }
`;