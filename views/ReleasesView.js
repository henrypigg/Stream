import React from "react";
import styled from "styled-components";
import ReleaseFilter from "../components/ReleaseFilter";
import ReleaseCard from "../components/ReleaseCard";
import {
  ScrollView,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";
import releases from "../data/releases";
import colorTheme from "../data/colorTheme";

class ReleasesView extends React.Component {
  constructor() {
    super();

    this.state = { expanded: false };

    if (Platform.OS == "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };

  static navigationOptions = {
    title: "Release Dates",
    headerStyle: {
      shadowColor: "transparent",
      height: 100,
      backgroundColor: colorTheme.bg,
    },
    headerTitleStyle: {
      fontSize: "24",
      fontWeight: "800",
      color: colorTheme.mainContent,
    },
  };

  render() {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={this.changeLayout}>
            <ReleaseFilter expanded={this.state.expanded} />
          </TouchableOpacity>
          {releases.map((release, index) => (
            <Wrapper key={index}>
              <DateContainer>
                <Divider />
                <Date>
                  <Number>{release.day}</Number>
                  <Month>{release.month}</Month>
                </Date>
              </DateContainer>
              <ReleaseCard
                release={release}
                navigation={this.props.navigation}
              />
            </Wrapper>
          ))}
        </ScrollView>
      </Container>
    );
  }
}

export default ReleasesView;

const Container = styled.View`
  background-color: ${colorTheme.bg};
`;

const DateContainer = styled.View`
  height: 25%;
  width: 100%;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
`;

const Divider = styled.View`
  width: 90%;
  height: 1px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10px;
  background-color: ${colorTheme.midGray};
`;

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 330px;
`;

const Number = styled.Text`
  color: #1075b7;
  font-size: 48px;
`;

const Month = styled.Text`
  color: #9b9b9b;
  font-size: 30px;
  font-weight: 200;
`;

const Date = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 5%;
  height: 65%;
`;
