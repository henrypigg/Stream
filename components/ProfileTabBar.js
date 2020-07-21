import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const ProfileTabBar = (props) => (
  <Container>
    <AllWrapper>
      <All>My Music</All>
      <Underline />
    </AllWrapper>
    <TouchableOpacity>
      <Exclusive>Reposts</Exclusive>
    </TouchableOpacity>
  </Container>
);

export default ProfileTabBar;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const AllWrapper = styled.View`
  margin: 20px;
  align-items: center;
`;

const All = styled.Text`
  font-size: 18px;
  font-weight: 800;
  color: #1075b7;
`;

const Exclusive = styled.Text`
  margin: 20px;
  font-size: 18px;
  font-weight: 800;
  color: #cbcbcb;
`;

const Underline = styled.View`
  width: 30%;
  height: 2px;
  background-color: #1075b7;
`;
