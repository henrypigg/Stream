import React from "react";
import styled from "styled-components";
import { TextInput } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import DiscoverCards from "../components/DiscoverCards";
import RecommendedCards from "../components/RecommendedCards";
import colorTheme from "../data/colorTheme";

class DiscoverView extends React.Component {
  static navigationOptions = {
    title: "Discover",
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
          <Text>TRENDING SEARCHES</Text>
          <ScrollWrapper>
            <ScrollView
              horizontal={true}
              style={{ width: "100%", height: "100%" }}
              showsHorizontalScrollIndicator={false}
            >
              <TrendingSearchContainer>
                {searches.map((search, index) => (
                  <TrendingSearch key={index}>
                    <Search>{search.search}</Search>
                  </TrendingSearch>
                ))}
              </TrendingSearchContainer>
            </ScrollView>
          </ScrollWrapper>
          <SearchWrapper>
            <TextInput
              style={{
                height: "100%",
                width: "100%",
                color: "#8b8b8b",
                paddingLeft: 20,
                borderRadius: 15,
                fontWeight: "200",
                fontSize: 18,
              }}
              defaultValue={"Search"}
            />
          </SearchWrapper>
          <Text>DISCOVER NEW ARTISTS</Text>
          <DiscoverCards />
          <Text>RECOMMENDED</Text>
          <RecommendedCards />
        </ScrollView>
      </Container>
    );
  }
}

export default DiscoverView;

const ScrollWrapper = styled.View`
  margin-top: 10px;
  height: 36px;
`;

const TrendingSearchContainer = styled.View`
  flex-direction: row;
  height: 36px;
  width: 600px;
`;

const TrendingSearch = styled.View`
  flex: 1;
  background-color: ${colorTheme.accentGray};
  border: 0.5px solid ${colorTheme.midGray};
  height: 90%;
  margin-left: 10px;
  max-width: 150px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

const Search = styled.Text`
  color: #9b9b9b;
  margin-left: 20px;
  margin-right: 20px;
`;

const Container = styled.View`
  flex: 1;
  background-color: ${colorTheme.bg};
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 200;
  color: #9b9b9b;
  margin: 5%;
  margin-bottom: 0;
`;

const SearchWrapper = styled.View`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 20px;
  height: 48px;
  border-radius: 15px;
  background-color: ${colorTheme.accentGray};
`;

const searches = [
  {
    search: "LIL BABY",
  },
  {
    search: "ATLANTA RAP",
  },
  {
    search: "TRAP",
  },
  {
    search: "UK DRILL",
  },
];
