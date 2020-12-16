import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { color } from "react-native-reanimated";
import colorTheme from "../data/colorTheme";
import userData from "../data/userData";
import { TouchableOpacity } from "react-native-gesture-handler";

class SubscribeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subscribed: 0, // 0 if not subscribed, 1 if subscribed
    };
  }

  componentDidMount() {}

  subscribed = () => {
    if (this.state.subscribed == 1) {
      return true;
    }
    return false;
  };

  handleSubscribeClick = () => {
    this.props.openPopUp;
    if (this.state.subscribed == 0) {
      this.setState({ subscribed: 1 });
    } else {
      this.setState({ subscribed: 0 });
    }
  };

  render() {
    return (
      <Container>
        <SubscribeButtonContainer subscribed={this.subscribed()}>
          <TouchableOpacity
            style={{
              width: 500,
              height: "100%",
              backgroundColor: this.subscribed()
                ? colorTheme.accentGray
                : colorTheme.accent,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={this.handleSubscribeClick}
          >
            <SubscribeText subscribed={this.subscribed()}>
              {this.subscribed() ? "Subscribed" : "Subscribe"}
            </SubscribeText>
          </TouchableOpacity>
        </SubscribeButtonContainer>
      </Container>
    );
  }
}

export default SubscribeContainer;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  height: 36px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

const SubscribeButtonContainer = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const SubscribeText = styled.Text`
  color: ${(props) =>
    props.subscribed ? colorTheme.mainContent : colorTheme.bg};
  font-size: 16px;
  font-weight: 300;
`;
