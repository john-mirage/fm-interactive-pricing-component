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
      ${({theme}) => theme.color.rangeTrackEmpty} 0%
    ), ${({theme}) => theme.color.rangeTrackFull} fixed;
`;

const thumbStyle = css`
  margin-top: var(--thumb-offset);
  appearance: none;
  cursor: ew-resize;
  width: var(--thumb-size);
  height: var(--thumb-size);
  border-radius: 9999px;
  border: none;
  background-color: ${({theme}) => theme.color.rangeThumb};
  background-image: url(${sliderIcon});
  background-repeat: no-repeat;
  background-position: center;
  box-shadow:
    0 0 0 var(--thumb-highlight-size) ${({theme}) => theme.color.rangeThumbHighlight},
    0 0.75rem 1.25rem 0.5rem ${({theme}) => theme.color.rangeThumbShadow};

  &:hover,
  &:active {
    --thumb-highlight-size: 0.5rem;
  }
  
  &:active {
    background-color: ${({theme}) => theme.color.rangeThumbActive};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 100ms ease, background-color 100ms ease;
  }
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  height: auto;
`;

export const Range = styled.input`
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
`;