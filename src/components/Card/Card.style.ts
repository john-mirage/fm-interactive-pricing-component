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
`;

export const PageViews = styled.p`
  margin-bottom: 1rem; /* 16px */
  font-size: 0.75rem; /* 12px */
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1rem; /* 1.6px */
  color: ${({theme}) => theme.color.text};
`;

export const PricePerPeriod = styled.p`
  margin-bottom: 2rem; /* 32px */
  display: flex;
  flex-direction: row;
  align-items: center;
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
`;

export const ConfirmButton = styled.button.attrs(props => ({
  type: "button"
}))`
  
`;