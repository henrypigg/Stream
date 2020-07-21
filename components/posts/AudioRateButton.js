import React from "react";
import styled from "styled-components";
import colorTheme from "../../data/colorTheme";
import { TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";

class AudioRateButton extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
    };
  }

  isColored = (button) => {
    if (this.state.rating < button) {
      return colorTheme.accentGray;
    } else {
      if (this.state.rating == 1) {
        return "#db0000";
      } else if (this.state.rating == 2) {
        return "#db7900";
      } else if (this.state.rating == 3) {
        return "#dbd000";
      } else if (this.state.rating == 4) {
        return "#8bdb00";
      } else if (this.state.rating == 5) {
        return "#21db00";
      }
    }
  };

  render() {
    return (
      <Container>
        <TouchableOpacity
          style={{ width: "20%", height: "100%" }}
          onPress={() => {
            this.setState({ rating: 1 });
            this.props.unlock();
          }}
        >
          <One color={this.isColored(1)} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "20%", height: "100%" }}
          onPress={() => {
            this.setState({ rating: 2 });
            this.props.unlock();
          }}
        >
          <Two color={this.isColored(2)} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "20%", height: "100%" }}
          onPress={() => {
            this.setState({ rating: 3 });
            this.props.unlock();
          }}
        >
          <Three color={this.isColored(3)} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "20%", height: "100%" }}
          onPress={() => {
            this.setState({ rating: 4 });
            this.props.unlock();
          }}
        >
          <Four color={this.isColored(4)} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "20%", height: "100%" }}
          onPress={() => {
            this.setState({ rating: 5 });
            this.props.unlock();
          }}
        >
          <Five color={this.isColored(5)} />
        </TouchableOpacity>
      </Container>
    );
  }
}

export default AudioRateButton;

const Container = styled.View`
  height: 64px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const One = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.color};
  border: 1px solid ${colorTheme.bg};
`;

const Two = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.color};
  border: 1px solid ${colorTheme.bg};
`;

const Three = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.color};
  border: 1px solid ${colorTheme.bg};
`;

const Four = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.color};
  border: 1px solid ${colorTheme.bg};
`;

const Five = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.color};
  border: 1px solid ${colorTheme.bg};
`;
