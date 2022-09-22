import styled, { css } from "styled-components";
import sliderIcon from "@images/icon-slider.svg";

const trackStyle = css`
  appearance: none;
  cursor: pointer;
  width: 100%;
  height: var(--track-height);
  border-radius: 9999px;
  background: linear-gradient(
      to right,
      transparent var(--track-fill),
      ${({theme}) => theme.color.emptySliderBar} 0%
    ), ${({theme}) => theme.color.fullSliderBar} fixed;
`;

const thumbStyle = css`
  margin-top: var(--thumb-offset);
  appearance: none;
  cursor: ew-resize;
  width: var(--thumb-size);
  height: var(--thumb-size);
  border-radius: 9999px;
  border: none;
  background-color: ${({theme}) => theme.color.sliderBackground};
  background-image: url(${sliderIcon});
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 0 var(--thumb-highlight-size) ${({theme}) => theme.color.sliderShadow}, 0 0.5rem 2rem 0.5rem ${({theme}) => theme.color.sliderShadow};

  &:hover,
  &:active {
    --thumb-highlight-size: 0.5rem;
    
  }
  
  &:active {
    background-color: ${({theme}) => theme.color.sliderGrab};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 100ms ease, background-color 100ms ease;
  }
`;

export const RangeInput = styled.input.attrs(() => ({
  type: "range",
  min: "0",
  max: "4",
  step: "1",
}))`
  --track-height: 0.5rem; /* 8px */
  --track-fill: 0%;
  --thumb-size: 2.5rem;
  --thumb-offset: -1rem;
  --thumb-highlight-size: 0px;

  appearance: none;
  display: block;
  width: 100%;
  margin: 1rem 0; /* 16px */
  background: transparent;
  outline-offset: 0.25rem; /* 4px */

  &::-webkit-slider-runnable-track {
    ${trackStyle}
  }

  &::-webkit-slider-thumb {
    ${thumbStyle}
  }

  &::-moz-range-track {
    ${trackStyle}
  }

  &::-moz-range-thumb {
    ${thumbStyle}
  }

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    margin-bottom: 2.5rem; /* 40px */
    grid-area: pageViewsSelector;
  }
`;