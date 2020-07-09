import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const ProfileBackground = (props) => (
  <Container>
    <MyMusicWrapper>
      <TouchableOpacity>
        <MyMusic>My Music</MyMusic>
      </TouchableOpacity>
    </MyMusicWrapper>
    <RepostsWrapper>
      <TouchableOpacity>
        <Reposts>Reposts</Reposts>
      </TouchableOpacity>
    </RepostsWrapper>
  </Container>
);

export default ProfileBackground;

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const MyMusicWrapper = styled.View`
  background-color: #1075b7;
  height: 36px;
  width: 120px;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
`;

const MyMusic = styled.Text`
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
`;

const RepostsWrapper = styled.View``;

const Reposts = styled.Text`
  font-size: 18px;
  font-weight: 800;
  color: #cbcbcb;
  margin: 20px;
`;
