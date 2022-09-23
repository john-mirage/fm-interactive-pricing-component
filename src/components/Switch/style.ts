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
  color: ${({theme}) => theme.color.textBody};
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
  background-color: ${({theme}) => theme.color.badge};
  color: ${({theme}) => theme.color.badgeLabel};
  border-radius: 9999px;

  &::before {
    display: inline-block;
    content: "-";
    
    @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
      display: none;
    }
  }

  &::after {
    display: none;
    
    @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
      display: inline-block;
      margin-left: 0.5ch;
      content: "discount";
    }
  }
`;

export const Label = styled.label`
  margin-left: 0.75rem; /* 12px */
  margin-right: 0.75rem; /* 12px */
  display: block;
`;

export const Checkbox = styled.input.attrs(() => ({
  type: "checkbox",
  role: "switch"
}))`
  --switch-transition-duration: 150ms;

  --track-size: 2.75rem; /* 44px */
  --track-padding: 0.25rem; /* 4px */
  --track-color-inactive: ${({theme}) => theme.color.switchTrackInactive};
  --track-color-hover: ${({theme}) => theme.color.switchTrackHover};
  --track-color-active: ${({theme}) => theme.color.switchTrackActive};

  --thumb-size: 0.875rem; /* 14px */
  --thumb-color: ${({theme}) => theme.color.switchThumb};
  --thumb-highlight-color: ${({theme}) => theme.color.switchThumbHighlight};
  --thumb-highlight-size: 0;
  --thumb-position: 0%;

  margin: 1rem 0;
  display: block;
  appearance: none;
  width: var(--track-size);
  height: calc(var(--thumb-size) + (var(--track-padding) * 2));
  padding: var(--track-padding);
  cursor: pointer;
  border: none;
  background-color: var(--track-color-inactive);
  border-radius: 9999px;
  outline-offset: 0.25rem; /* 4px */
  transition: background-color var(--switch-transition-duration) ease;
  transform: rotate(90deg);

  &:checked {
    background-color: var(--track-color-active);
    --thumb-position: calc(var(--track-size) - (var(--track-padding) * 2) - 100%);
  }

  &::before {
    content: "";
    display: block;
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--thumb-color);
    border-radius: 9999px;
    box-shadow: 0 0 0 var(--thumb-highlight-size) var(--thumb-highlight-color);
    transform: translateX(var(--thumb-position));
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    @media (prefers-reduced-motion: no-preference) {
      transition:
        transform var(--switch-transition-duration) ease,
        box-shadow var(--switch-transition-duration) ease;
    }
  }

  &:hover {
    --thumb-highlight-size: 0.5rem; /* 8px */
  }

  &:not(:checked):hover {
    background-color: var(--track-color-hover);
  }

  @media screen and (min-width: ${({theme}) => theme.screen.sm}) {
    margin: 0;
    transform: none;
  }
`;
