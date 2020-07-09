import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

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
              size={36}
              color={this.state.notify ? "#1075b7" : "#cbcbcb"}
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
  width: 100%;
`;

const Container = styled.View`
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
  justify-content: center;
`;
