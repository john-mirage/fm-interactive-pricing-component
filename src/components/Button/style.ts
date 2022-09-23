import styled from "styled-components";

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