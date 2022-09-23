import * as Styled from "@components/Card/Header/Checkbox/style";

function Checkbox({ updatePeriod }) {
  
  function handleInputChange(event: InputEvent) {
    updatePeriod(event.currentTarget.checked ? "year" : "month");
  }
  
  return (
    <Styled.Container>
      <Styled.Plan>Monthly Billing</Styled.Plan>
      <Styled.Label>
        <Styled.Checkbox onChange={handleInputChange} />
      </Styled.Label>
      <Styled.Plan>
        Yearly Billing
        <Styled.Badge>-25%</Styled.Badge>
      </Styled.Plan>
    </Styled.Container>
  );
}

export default Checkbox;