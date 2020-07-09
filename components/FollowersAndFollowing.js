import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FollowersAndFollowing = () => (
  <Container>
    <TouchableOpacity>
      <Followers>
        <Number>74</Number>
        <Text>FOLLOWERS</Text>
      </Followers>
    </TouchableOpacity>
    <TouchableOpacity>
      <Following>
        <Number>95</Number>
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
  font-size: 18px;
  font-weight: 300;
`;

const Text = styled.Text`
  font-weight: 200;
`;
