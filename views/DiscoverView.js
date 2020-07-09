import React from "react";
import styled from "styled-components";
import { TextInput } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

class DiscoverView extends React.Component {
  static navigationOptions = {
    title: "Discover",
  };

  render() {
    return (
      <Container>
        <Text>TRENDING SEARCHES</Text>
        <TrendingSearchContainer>
          {searches.map((search, index) => (
            <TrendingSearch key={index}>
              <Search>{search.search}</Search>
            </TrendingSearch>
          ))}
        </TrendingSearchContainer>
        <SearchWrapper>
          <TouchableOpacity style={{ width: "100%", height: "100%" }}>
            <TextInput
              style={{
                height: "100%",
                width: "100%",
                paddingLeft: 20,
                backgroundColor: "#ffffff",
                borderRadius: 15,
              }}
              defaultValue={<Search>Searching ...</Search>}
            />
          </TouchableOpacity>
        </SearchWrapper>
      </Container>
    );
  }
}

export default DiscoverView;

const TrendingSearchContainer = styled.View`
  flex-direction: row;
  height: 32px;
  margin-top: 10px;
`;

const TrendingSearch = styled.View`
  background-color: white;
  height: 100%;
  margin-left: 5%;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
`;

const Search = styled.Text`
  color: #9b9b9b;
  margin-left: 20px;
  margin-right: 20px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
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
  margin: 5%;
  height: 48px;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
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
