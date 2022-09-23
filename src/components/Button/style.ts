import styled from "styled-components";

export const Button = styled.button.attrs(() => ({
  type: "button"
}))`
  cursor: pointer;
  font-size: 0.75rem; /* 12px */
  background-color: ${({theme}) => theme.color.button};
  color: ${({theme}) => theme.color.buttonLabel};
  border: 0.125rem solid ${({theme}) => theme.color.buttonBorder}; /* 2px */
  border-radius: 9999px;
  box-shadow: 0 0 0 0 ${({theme}) => theme.color.buttonShadow};
  font-weight: 800;
  padding-block: 0.75rem; /* 12px */
  padding-inline: 2.5rem; /* 40px */
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  appearance: none;
  outline-offset: 0.25rem; /* 4px */

  &:hover {
    color: ${({theme}) => theme.color.buttonLabelHover};
  }

  &:not(:active):hover {
    box-shadow: 0 0 0 0.375rem ${({theme}) => theme.color.buttonShadow}; /* 6px */
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      color 150ms ease,
      box-shadow 150ms ease,
      outline-offset 150ms ease;
  }
`;