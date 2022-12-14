import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import * as Styled from "./style";

interface Props {
  className?: string;
  updatePageViews: (newPageViews: string) => void;
}

const TRACK_FILL_PROPERTY = "--track-fill";

const Range: FunctionComponent<Props> = ({ className, updatePageViews }) => {
  const [rangeValue, setRangeValue] = useState<string>("2");
  const [rangeMaxValue, setRangeMaxValue] = useState<string>("4");
  const range = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (range.current) {
      const nextPosition = `${String((Number(rangeValue) / Number(rangeMaxValue)) * 100)}%`;
      const currentPosition = range.current.style.getPropertyValue(TRACK_FILL_PROPERTY);
      if (nextPosition !== currentPosition) range.current.style.setProperty(TRACK_FILL_PROPERTY, nextPosition);
      switch (rangeValue) {
        case "0": updatePageViews("10k"); break;
        case "1": updatePageViews("50k"); break;
        case "2": updatePageViews("100k"); break;
        case "3": updatePageViews("500k"); break;
        case "4": updatePageViews("1m"); break;
        default: throw new Error("the value is not valid");
      }
    }
  }, [rangeValue]);

  function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    setRangeValue(event.currentTarget.value);
  }

  return (
    <Styled.Label
      className={className}
      aria-label="page views"
    >
      <Styled.Range
        ref={range}
        type= "range"
        min= "0"
        max={rangeMaxValue}
        step= "1"
        value={rangeValue}
        onInput={handleInputChange}
      />
    </Styled.Label>
  );
}

export default Range;