import { Container, Plan, Input, Badge, Label } from "@components/PlanSelector/PlanSelector.style";

function PlanSelector({ updatePeriod }) {
  
  function handleInputChange(event: InputEvent) {
    updatePeriod(event.currentTarget.checked ? "year" : "month");
  }
  
  return (
    <Container>
      <Plan>Monthly Billing</Plan>
      <Label>
        <Input onChange={handleInputChange}></Input>
      </Label>
      <Plan>
        Yearly Billing
        <Badge>-25%</Badge>
      </Plan>
    </Container>
  );
}

export default PlanSelector;