import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { View, ScrollView } from "react-native";
import Avatar from "../components/Avatar";
import { TouchableOpacity } from "react-native-gesture-handler";
import colorTheme from "../data/colorTheme";

const FavArtists = (props) => (
  <Container>
    <Title>Favorite Artists</Title>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <ArtistsWrapper>
        {props.artists.map((artist, index) => (
          <ArtistCard key={index}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.push("Account", {
                  artist: artist.name,
                });
              }}
            >
              <Avatar image={artist.name.avatar} size={144} />
            </TouchableOpacity>
            <Artist>{artist.name.name}</Artist>
          </ArtistCard>
        ))}
      </ArtistsWrapper>
    </ScrollView>
  </Container>
);

export default FavArtists;

const Container = styled.View``;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: ${colorTheme.mainContent};
  margin: 20px;
  margin-bottom: 10px;
`;

const ArtistsWrapper = styled.View`
  flex-direction: row;
`;

const Artist = styled.Text`
  font-size: 12px;
  font-weight: 800;
  color: ${colorTheme.mainContent};
`;

const ArtistCard = styled.View`
  align-items: center;
`;
