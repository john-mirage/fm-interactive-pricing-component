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
  display: flex;
  flex-direction: row;
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  font-weight: 800;
  background-color: ${({theme}) => theme.color.discountBackground};
  color: ${({theme}) => theme.color.discountText};
  border-radius: 9999px;

  &::after {
    display: none;
    
    @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
      display: inline-block;
      margin-left: 1ch;
      content: "discount";
    }
  }
`;

export const Label = styled.label`
  margin-left: 0.75rem; /* 12px */
  margin-right: 0.75rem; /* 12px */
  min-block-size: calc(var(--track-size) + calc(var(--track-padding) * 2));

  @media screen and (min-width: ${({theme}) => theme.screen.sm}) {
    min-block-size: 0;
  }
`;

export const Checkbox = styled.input.attrs(() => ({
  type: "checkbox",
  role: "switch"
}))`
  --track-size: 2.25rem; /* 36px */
  --track-padding: 0.25rem; /* 4px */

  --track-inactive: ${({theme}) => theme.color.toggleBackground};
  --track-active: ${({theme}) => theme.color.fullSliderBar};

  --track-color-inactive: var(--track-inactive);
  --track-color-active: var(--track-active);

  --thumb-size: 0.875rem; /* 14px */
  --thumb: ${({theme}) => theme.color.pricingComponentBackground};
  --thumb-highlight: ${({theme}) => theme.color.thumbHighlight};
  --thumb-highlight-size: 0.25rem; /* 4px */

  --thumb-color: var(--thumb);
  --thumb-color-highlight: var(--thumb-highlight);

  --thumb-position: 0%;

  --thumb-transition-duration: 150ms;

  margin: 1rem 0;
  appearance: none;
  inline-size: var(--track-size);
  block-size: var(--thumb-size);
  padding: var(--track-padding);

  display: grid;
  align-items: center;
  grid: [track] 1fr / [track] 1fr;

  border: none;
  outline-offset: 0.25rem; /* 4px */
  box-sizing: content-box;

  padding: var(--track-padding);
  background: var(--track-color-inactive);
  inline-size: var(--track-size);
  block-size: var(--thumb-size);
  border-radius: var(--track-size);

  transition: background-color 150ms ease;
  transform: rotate(90deg);
  touch-action: pan-y;

  &:checked {
    background: var(--track-color-active);
    --thumb-position: calc(var(--track-size) - 100%);
  }

  &::before {
    content: "";
    grid-area: track;
    inline-size: var(--thumb-size);
    block-size: var(--thumb-size);
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background: var(--thumb-color);
    border-radius: 50%;

    box-shadow: 0 0 0 var(--highlight-size) var(--thumb-color-highlight);
    transform: translateX(var(--thumb-position));

    @media (prefers-reduced-motion: no-preference) {
      transition:
        transform var(--thumb-transition-duration) ease,
        box-shadow .25s ease;
    }
  }

  &:not(:disabled):hover::before {
    --highlight-size: 0.25rem; /* 8px */
  }

  @media screen and (min-width: ${({theme}) => theme.screen.sm}) {
    margin: 0;
    transform: none;
  }
`;
