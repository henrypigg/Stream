import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { View, ScrollView } from "react-native";
import Avatar from "../components/Avatar";
import { TouchableOpacity } from "react-native-gesture-handler";

const FavArtists = (props) => (
  <Container>
    <Title>Favorite Artists</Title>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <ArtistsWrapper>
        {props.artists.map((artist, index) => (
          <ArtistCard key={index}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.push("Account");
              }}
            >
              <Avatar image={artist.image} size={144} />
            </TouchableOpacity>
            <Artist>{artist.name}</Artist>
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
  color: #1b1b1b;
  margin: 20px;
  margin-bottom: 10px;
`;

const ArtistsWrapper = styled.View`
  flex-direction: row;
`;

const Artist = styled.Text`
  font-size: 12px;
  font-weight: 800;
`;

const ArtistCard = styled.View`
  align-items: center;
`;
