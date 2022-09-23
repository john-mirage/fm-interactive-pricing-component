import styled from "styled-components";

export const Switch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({theme}) => theme.screen.sm}) {
    flex-direction: row;
  }
`;

export const Plan = styled.p`
  position: relative;
  font-size: 0.75rem; /* 12px */
  font-weight: 600;
  color: ${({theme}) => theme.color.text};
`;

export const Badge = styled.span`
  position: absolute;
  right: -0.25rem; /* -4px */
  top: 50%;
  transform: translate(100%, -50%);
  display: block;
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  font-weight: 800;
  background-color: ${({theme}) => theme.color.discountBackground};
  color: ${({theme}) => theme.color.discountText};
  border-radius: 9999px;
`;

export const Label = styled.label`
  margin-left: 0.75rem; /* 12px */
  margin-right: 0.75rem; /* 12px */
`;

export const Checkbox = styled.input.attrs(() => ({
  type: "checkbox",
  role: "switch"
}))`
  --track-size: calc(var(--thumb-size) * 2);
  --track-padding: 0.25rem; /* 4px */

  --track-inactive: hsl(80 0% 80%);
  --track-active: hsl(80 60% 45%);

  --track-color-inactive: var(--track-inactive);
  --track-color-active: var(--track-active);

  --thumb-size: 0.875rem; /* 14px */
  --thumb: hsl(0 0% 100%);
  --thumb-highlight: hsl(0 0% 0% / 25%);

  --thumb-color: var(--thumb);
  --thumb-color-highlight: var(--thumb-highlight);

  appearance: none;
  inline-size: var(--track-size);
  block-size: var(--thumb-size);
  padding: var(--track-padding);

  display: grid;
  align-items: center;
  grid: [track] 1fr / [track] 1fr;

  &:before {
    content: "";
    grid-area: track;
    inline-size: var(--thumb-size);
    block-size: var(--thumb-size);
  }
`;
