import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

const ReleaseFilter = (props) => (
  <Container>
    <CollapsedView expanded={props.expanded}>
      <FilterIcon>
        <Ionicons name="md-funnel" size={28} color="#1075b7" />
      </FilterIcon>
    </CollapsedView>
  </Container>
);

export default ReleaseFilter;

const Container = styled.View``;

const CollapsedView = styled.View`
  background: white;
  height: ${(props) => (props.expanded ? 250 : 60)};
  margin: 5%;
  width: 90%;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
  justify-content: flex-start;
`;

const FilterIcon = styled.View`
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 12px;
  padding: 10px;
`;
