import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { View, ScrollView } from "react-native";
import AlbumCover from "../components/AlbumCover";
import Avatar from "../components/Avatar";
import { TouchableOpacity } from "react-native-gesture-handler";

const FavSongs = (props) => (
  <Container>
    <Title>Favorite Songs</Title>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <AlbumWrapper>
        {props.songs.map((album, index) => (
          <AlbumCard index={index}>
            <TouchableOpacity>
              <AlbumCover name={album.title} cover={album.image} />
            </TouchableOpacity>
            <ArtistWrapper>
              {album.artists.map((artist, index) => (
                <ArtistCard>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.push("Account");
                    }}
                  >
                    <Avatar index={index} size={64} image={artist.avatar} />
                  </TouchableOpacity>
                  <Artist>{artist.name}</Artist>
                </ArtistCard>
              ))}
            </ArtistWrapper>
          </AlbumCard>
        ))}
      </AlbumWrapper>
    </ScrollView>
  </Container>
);

export default FavSongs;

const Container = styled.View``;

const AlbumWrapper = styled.View`
  flex-direction: row;
`;

const AlbumCard = styled.View`
  flex-direction: row;
`;

const ArtistCard = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 80px;
`;

const ArtistWrapper = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 50px;
  height: 184px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #1b1b1b;
  margin-left: 20px;
  margin-top: 50px;
`;

const Artist = styled.Text`
  font-size: 12px;
  font-weight: 800;
  text-align: center;
`;
