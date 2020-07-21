import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import colorTheme from "../data/colorTheme";

const EditProfileButton = () => (
  <Container>
    <TouchableOpacity>
      <EditProfile>
        <Text>Edit Profile</Text>
      </EditProfile>
    </TouchableOpacity>
  </Container>
);

export default EditProfileButton;

const Container = styled.View`
  width: 100%;
`;

const EditProfile = styled.View`
  width: 90%;
  margin-left: 5%;
  height: 48px;
  background: ${colorTheme.accentGray};
  border: 0.5px solid ${colorTheme.midGray};
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const Text = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: ${colorTheme.mainContent};
`;
