import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import colorTheme from "../data/colorTheme";

const FollowersAndFollowing = (props) => (
  <Container>
    <TouchableOpacity>
      <Wrapper>
        <Number>{props.posts}</Number>
        <Text>Posts</Text>
      </Wrapper>
    </TouchableOpacity>
    <TouchableOpacity>
      <Wrapper>
        <Number>{props.fans}</Number>
        <Text>FANS</Text>
      </Wrapper>
    </TouchableOpacity>
    <TouchableOpacity>
      <Wrapper>
        <Number>{props.following}</Number>
        <Text>FOLLOWING</Text>
      </Wrapper>
    </TouchableOpacity>
  </Container>
);

export default FollowersAndFollowing;

const Container = styled.View`
  flex-direction: row;
  padding-top: 30px;
  justify-content: center;
`;

const Wrapper = styled.View`
  margin-right: 4%;
  margin-left: 4%;
  width: 80px;
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
