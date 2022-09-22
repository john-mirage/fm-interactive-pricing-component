import styled from "styled-components";

export const List = styled.ul`
  margin: 0 0 2rem 0; /* 32px */
  padding: 0;
  list-style: none;

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    margin: 0;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 0.75rem; /* 12px */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.75rem; /* 12px */
  font-weight: 600;
  color: ${({theme}) => theme.color.text};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Icon = styled.svg.attrs(() => ({
  stroke: "currentColor",
}))`
  margin-right: 0.75rem; /* 12px */
  width: 0.75rem; /* 12px */
  height: 0.75rem; /* 12px */
`;