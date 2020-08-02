import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import colorTheme from "../data/colorTheme";

const FollowersAndFollowing = (props) => (
  <Container>
    <TouchableOpacity>
      <Followers>
        <Number>{props.followers}</Number>
        <Text>FOLLOWERS</Text>
      </Followers>
    </TouchableOpacity>
    <TouchableOpacity>
      <Following>
        <Number>{props.following}</Number>
        <Text>FOLLOWING</Text>
      </Following>
    </TouchableOpacity>
  </Container>
);

export default FollowersAndFollowing;

const Container = styled.View`
  flex-direction: row;
  padding-top: 30px;
  justify-content: center;
`;

const Followers = styled.View`
  padding-right: 50px;
  padding-left: 50px;
  align-items: center;
`;

const Following = styled.View`
  padding-right: 50px;
  padding-left: 50px;
  align-items: center;
`;

const Number = styled.Text`
  color: ${colorTheme.mainContent};
  font-size: 18px;
  font-weight: 300;
`;

const Text = styled.Text`
  color: ${colorTheme.mainContent};
  font-weight: 200;
`;
