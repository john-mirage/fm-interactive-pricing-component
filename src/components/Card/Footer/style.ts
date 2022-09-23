import styled from "styled-components";

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

export const List = styled.ul`
  margin: 0 0 2rem 0; /* 32px */
  padding: 0;
  list-style: none;

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    margin: 0;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 0.75rem; /* 12px */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.75rem; /* 12px */
  font-weight: 600;
  color: ${({theme}) => theme.color.text};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Icon = styled.svg.attrs(() => ({
  stroke: "currentColor",
}))`
  margin-right: 0.75rem; /* 12px */
  width: 0.75rem; /* 12px */
  height: 0.75rem; /* 12px */
`;


export const Button = styled.button.attrs(() => ({
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