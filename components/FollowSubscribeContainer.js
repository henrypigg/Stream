import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { color } from "react-native-reanimated";
import colorTheme from "../data/colorTheme";
import userData from "../data/userData";
import { TouchableOpacity } from "react-native-gesture-handler";

class FollowSubscribeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relationship: 0, // 0 if not following, 1 if following, and 2 if subscribed
    };
  }

  componentDidMount() {
    if (userData.subscribedArtists.includes(this.props.artist.id)) {
      this.setState({ relationship: 2 });
    } else if (userData.followingArtists.includes(this.props.artist.id)) {
      this.setState({ relationship: 1 });
    }
  }

  following = () => {
    if (this.state.relationship >= 1) {
      return true;
    }
    return false;
  };

  handleFollowClick = () => {
    if (this.state.relationship >= 1) {
      this.setState({ relationship: 0 });
    } else {
      this.setState({ relationship: 1 });
    }
    console.log(this.state.relationship);
    userData.followingArtists = ["test"];
    console.log(userData.followingArtists);
  };

  render() {
    return (
      <Container>
        <FollowButtonContainer following={this.following()}>
          <TouchableOpacity
            style={{
              width: 500,
              height: "100%",
              backgroundColor: this.following()
                ? colorTheme.accentGray
                : colorTheme.accent,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => this.handleFollowClick()}
          >
            <FollowText following={this.following()}>
              {this.following() ? "Following" : "Follow"}
            </FollowText>
          </TouchableOpacity>
        </FollowButtonContainer>
        {this.following() && (
          <SubscribeButtonContainer following={this.following()}>
            <SubscribeText>{this.following() ? "Subscribe" : ""}</SubscribeText>
          </SubscribeButtonContainer>
        )}
      </Container>
    );
  }
}

export default FollowSubscribeContainer;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  height: 48px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  width: 100%;
`;

const FollowButtonContainer = styled.View`
  width: ${(props) => (props.following ? "42%" : "90%")};
  border-radius: 15px;
  margin-right: ${(props) => (props.following ? "3%" : "0")};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SubscribeButtonContainer = styled.View`
  width: 42%;
  border-radius: 15px;
  margin-left: 3%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  background-color: #1075b7;
  align-items: center;
  justify-content: center;
`;

const FollowText = styled.Text`
  color: ${(props) =>
    props.following ? colorTheme.mainContent : colorTheme.bg};
  font-size: 16px;
  font-weight: 300;
`;

const SubscribeText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 200;
`;
