import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import colorTheme from "../data/colorTheme";

class ShareButton extends React.Component {
  render() {
    return (
      <Wrapper>
        <TouchableOpacity>
          <Container>
            <Ionicons
              name={"ios-share-alt"}
              size={36}
              color={colorTheme.midGray}
            />
          </Container>
        </TouchableOpacity>
      </Wrapper>
    );
  }
}

export default ShareButton;

const Wrapper = styled.View`
  height: 100%;
  width: 50%;
`;

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
