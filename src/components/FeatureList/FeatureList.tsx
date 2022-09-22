import {List, ListItem, Icon} from "@components/FeatureList/FeatureList.style";

function FeatureList() {
  return (
    <List>
      <ListItem>
        <Icon>
          <use href="#icon-check"/>
        </Icon>
        Unlimited websites
      </ListItem>
      <ListItem>
        <Icon>
          <use href="#icon-check"/>
        </Icon>
        100% data ownership
      </ListItem>
      <ListItem>
        <Icon>
          <use href="#icon-check"/>
        </Icon>
        Email reports
      </ListItem>
    </List>
  );
}

export default FeatureList;