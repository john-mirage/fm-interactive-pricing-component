import { RangeInput } from "@components/PageViewsSelector/PageViewsSelector.style";
import { useEffect, useRef, useState } from "react";

function PageViewsSelector({ updatePageViews }) {
  const rangeInput = useRef(null);
  const hasNotBeenMountedOnce = useRef(true);

  useEffect(() => {
    if (hasNotBeenMountedOnce.current) {
      rangeInput.current.style.setProperty('--track-fill', rangeToPercent(rangeInput.current));
      hasNotBeenMountedOnce.current = false;
    }
  }, []);

  function rangeToPercent (slider: HTMLInputElement) {
    const max = Number(slider.getAttribute('max')) || 10;
    const percent = (Number(slider.value) / max) * 100;
    return `${String(percent)}%`;
  };

  function handleInputChange(event: Event) {
    event.currentTarget.style.setProperty('--track-fill', rangeToPercent(event.currentTarget));
    switch (event.currentTarget.value) {
      case "0":
        updatePageViews("10k");
        break;
      case "1":
        updatePageViews("50k");
        break;
      case "2":
        updatePageViews("100k");
        break;
      case "3":
        updatePageViews("500k");
        break;
      case "4":
        updatePageViews("1m");
        break;
      default:
        throw new Error("the value is not valid");
    }
  }

  return (
    <RangeInput
      ref={rangeInput}
      onInput={handleInputChange}
      defaultValue="2"
    />
  );
}

export default PageViewsSelector;