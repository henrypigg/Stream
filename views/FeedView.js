import React from "react";
import styled from "styled-components";
import MessageButton from "../components/MessageButton";
import ImagePost from "../components/posts/ImagePost";
import { ScrollView } from "react-native-gesture-handler";

class FeedView extends React.Component {
  static navigationOptions = {
    title: "Subscribed",
    headerTintColor: "#1075b7",
    headerLeft: <MessageButton />,
  };

  render() {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Content>
            {posts.map((post, index) => (
              <ImagePost key={index} post={post} />
            ))}
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default FeedView;

const Wrapper = styled.View`
  padding-left: 20px;
`;

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const Content = styled.View`
  width: 100%;
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
];
