import React from "react";
import styled from "styled-components";
import ArtistBackground from "../components/ArtistBackground";
import { ScrollView } from "react-native-gesture-handler";
import ArtistFollowersAndFollowing from "../components/ArtistFollowersAndFollowing";
import FollowSubscribeContainer from "../components/FollowSubscribeContainer";
import ArtistInfo from "../components/ArtistInfo";
import ArtistTabBar from "../components/ArtistTabBar";
import ImagePost from "../components/posts/ImagePost";

class AccountView extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <Container>
        <ArtistBackground
          artist={require("../assets/ProfileFiller/PlayboiCarti.png")}
        />
        <ArtistInfo />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ArtistName>Playboi Carti</ArtistName>
          <Content>
            <ArtistFollowersAndFollowing
              posts={"106"}
              fans={"3.9M"}
              following={"413"}
            />
            <FollowSubscribeContainer following={true} />
            <Bio>
              *+!:)!!{"\n"}whole * ! *:)lotta red **{"\n"}!++ ++** +:) love !
              lit **!++
            </Bio>
            <ArtistTabBar />
            {posts.map((post, index) => (
              <ImagePost key={index} post={post} />
            ))}
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default AccountView;

const Container = styled.View`
  flex: 1;
`;

const Content = styled.View`
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: 10px;
  background-color: #f8f8f8;
`;

const ArtistName = styled.Text`
  font-size: 48px;
  font-weight: 800;
  color: white;
  margin-top: 182px;
  margin-left: 20px;
`;

const Bio = styled.Text`
  margin-left: 10%;
`;

const posts = [
  {
    name: "Playboi Carti",
    avatar: require("../assets/ProfileFiller/PlayboiCarti.png"),
    online: 3,
    image: require("../assets/ProfileFiller/PlayboiCarti2.png"),
    caption: ".opium <3 /",
    comments: 4275,
    firstComment: "Drop!!!",
    secondComment: "album?",
    firstUser: "dakotacilenti",
    secondUser: "yaboifran",
  },
  {
    name: "Playboi Carti",
    avatar: require("../assets/ProfileFiller/PlayboiCarti.png"),
    online: 3,
    image: require("../assets/ProfileFiller/PlayboiCarti2.png"),
    caption: ".opium <3 /",
    comments: 4275,
    firstComment: "Drop!!!",
    secondComment: "album?",
    firstUser: "dakotacilenti",
    secondUser: "yaboifran",
  },
  {
    name: "Playboi Carti",
    avatar: require("../assets/ProfileFiller/PlayboiCarti.png"),
    online: 3,
    image: require("../assets/ProfileFiller/PlayboiCarti2.png"),
    caption: ".opium <3 /",
    comments: 4275,
    firstComment: "Drop!!!",
    secondComment: "album?",
    firstUser: "dakotacilenti",
    secondUser: "yaboifran",
  },
  {
    name: "Playboi Carti",
    avatar: require("../assets/ProfileFiller/PlayboiCarti.png"),
    online: 3,
    image: require("../assets/ProfileFiller/PlayboiCarti2.png"),
    caption: ".opium <3 /",
    comments: 4275,
    firstComment: "Drop!!!",
    secondComment: "album?",
    firstUser: "dakotacilenti",
    secondUser: "yaboifran",
  },
  {
    name: "Playboi Carti",
    avatar: require("../assets/ProfileFiller/PlayboiCarti.png"),
    online: 3,
    image: require("../assets/ProfileFiller/PlayboiCarti2.png"),
    caption: ".opium <3 /",
    comments: 4275,
    firstComment: "Drop!!!",
    secondComment: "album?",
    firstUser: "dakotacilenti",
    secondUser: "yaboifran",
  },
  {
    name: "Playboi Carti",
    avatar: require("../assets/ProfileFiller/PlayboiCarti.png"),
    online: 3,
    image: require("../assets/ProfileFiller/PlayboiCarti2.png"),
    caption: ".opium <3 /",
    comments: 4275,
    firstComment: "Drop!!!",
    secondComment: "album?",
    firstUser: "dakotacilenti",
    secondUser: "yaboifran",
  },
];
