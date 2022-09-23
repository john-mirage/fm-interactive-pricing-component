import { FunctionComponent, SyntheticEvent, useRef } from "react";
import * as Styled from "./style";

interface Props {
  className: string;
  updatePeriod: (newPeriod: string) => void;
}

const Switch: FunctionComponent<Props> = ({ className, updatePeriod }) => {
  const checkboxRef = useRef(null);

  function handleCheckboxChange() {
    updatePeriod(checkboxRef.current.checked ? "year" : "month");
  }

  function handleCheckboxKeyUp(event) {
    if (event.key === "Enter") {
      checkboxRef.current.checked = !checkboxRef.current.checked;
    }
  }
  
  return (
    <Styled.Switch className={className}>
      <Styled.Plan>Monthly Billing</Styled.Plan>
      <Styled.Label>
        <Styled.Checkbox
          ref={checkboxRef}
          onChange={handleCheckboxChange}
          onKeyUp={handleCheckboxKeyUp}
        />
      </Styled.Label>
      <Styled.Plan>
        Yearly Billing
        <Styled.Badge>25%</Styled.Badge>
      </Styled.Plan>
    </Styled.Switch>
  );
}

export default Switch;