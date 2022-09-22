import { RangeInput } from "@components/PageViewsRange/PageViewsRange.style";
import React, { useEffect, useRef } from "react";

function PageViewsRange() {
  const rangeInput = useRef(null);

  useEffect(() => {
    if (rangeInput.current) {
      rangeInput.current.style.setProperty('--track-fill', rangeToPercent(rangeInput.current));
    }
  }, []);

  function rangeToPercent (slider: HTMLInputElement) {
    const max = Number(slider.getAttribute('max')) || 10;
    const percent = (Number(slider.value) / max) * 100;
    return `${String(percent)}%`;
  };

  function handleInputChange(event: Event) {
    if (event.currentTarget) {
      event.currentTarget.style.setProperty('--track-fill', rangeToPercent(event.currentTarget));
    }
  }

  return (
    <RangeInput ref={rangeInput} onInput={handleInputChange} defaultValue="2" />
  );
}

export default PageViewsRange;