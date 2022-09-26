import { FunctionComponent, useRef } from "react";
import * as Styled from "./style";

interface Props {
  className?: string;
  updatePeriod: (newPeriod: string) => void;
}

const Switch: FunctionComponent<Props> = ({ className, updatePeriod }) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleCheckboxChange = () => {
    if (checkboxRef.current) {
      const isChecked = checkboxRef.current.checked;
      updatePeriod(isChecked ? "year" : "month");
      checkboxRef.current.setAttribute("aria-checked", isChecked ? "true" : "false");
    }
  }

  const handleCheckboxKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
    }
  }
  
  return (
    <Styled.Switch className={className}>
      <Styled.Plan>Monthly Billing</Styled.Plan>
      <Styled.Label aria-label="Yearly billing">
        <Styled.Checkbox
          ref={checkboxRef}
          onChange={handleCheckboxChange}
          onKeyUp={handleCheckboxKeyUp}
          aria-checked="false"
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