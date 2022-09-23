import { FunctionComponent, useEffect, useRef } from "react";
import * as Styled from "./style";

interface Props {
  className?: string;
  updatePageViews: (newPageViews: string) => void;
}

const Range: FunctionComponent<Props> = ({ className, updatePageViews }) => {
  const rangeInput = useRef<HTMLInputElement>(null);
  const hasNotBeenMountedOnce = useRef<Boolean>(true);

  const rangeToPercent = (slider: HTMLInputElement) => {
    const max = Number(slider.getAttribute('max')) || 10;
    const percent = (Number(slider.value) / max) * 100;
    return `${String(percent)}%`;
  };

  useEffect(() => {
    if (hasNotBeenMountedOnce.current && rangeInput.current) {
      rangeInput.current.style.setProperty('--track-fill', rangeToPercent(rangeInput.current));
      hasNotBeenMountedOnce.current = false;
    }
  }, []);

  function handleInputChange() {
    if (rangeInput.current) {
      rangeInput.current.style.setProperty('--track-fill', rangeToPercent(rangeInput.current));
      switch (rangeInput.current.value) {
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
  }

  return (
    <Styled.Label className={className} aria-label="page views">
      <Styled.Range
        ref={rangeInput}
        onInput={handleInputChange}
        defaultValue="2"
      />
    </Styled.Label>
  );
}

export default Range;