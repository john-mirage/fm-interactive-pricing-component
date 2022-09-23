import * as Styled from "./style";

function Switch({ className, updatePeriod }) {
  
  function handleInputChange(event: InputEvent) {
    updatePeriod(event.currentTarget.checked ? "year" : "month");
  }
  
  return (
    <Styled.Switch className={className}>
      <Styled.Plan>Monthly Billing</Styled.Plan>
      <Styled.Label>
        <Styled.Checkbox onChange={handleInputChange} />
      </Styled.Label>
      <Styled.Plan>
        Yearly Billing
        <Styled.Badge>-25%</Styled.Badge>
      </Styled.Plan>
    </Styled.Switch>
  );
}

export default Switch;