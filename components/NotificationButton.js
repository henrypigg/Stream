import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import colorTheme from "../data/colorTheme";

class NotificationButton extends React.Component {
  constructor() {
    super();
    this.state = {
      notify: false,
    };
  }

  updateNotify = () => {
    this.setState({ notify: !this.state.notify });
  };

  render() {
    return (
      <Wrapper>
        <TouchableOpacity onPress={this.updateNotify}>
          <Container>
            <Ionicons
              name={
                this.state.notify
                  ? "ios-notifications"
                  : "ios-notifications-outline"
              }
              size={48}
              color={this.state.notify ? "#1075b7" : colorTheme.midGray}
            />
          </Container>
        </TouchableOpacity>
      </Wrapper>
    );
  }
}

export default NotificationButton;

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
