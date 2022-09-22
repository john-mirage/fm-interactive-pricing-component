import { RangeInput } from "@components/PageViewsSelector/PageViewsSelector.style";
import { useEffect, useRef } from "react";

function PageViewsSelector({ setPageViews }) {
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
    event.currentTarget.style.setProperty('--track-fill', rangeToPercent(event.currentTarget));
    switch (event.currentTarget.value) {
      case "0":
        setPageViews("10k");
        break;
      case "1":
        setPageViews("50k");
        break;
      case "2":
        setPageViews("100k");
        break;
      case "3":
        setPageViews("500k");
        break;
      case "4":
        setPageViews("1m");
        break;
      default:
        throw new Error("the value is not valid");
    }
  }

  return (
    <RangeInput ref={rangeInput} onInput={handleInputChange} defaultValue="2" />
  );
}

export default PageViewsSelector;