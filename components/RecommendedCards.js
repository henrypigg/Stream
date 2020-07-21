import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const RecommendedCards = () => (
  <Container>
    {categories.map((category, index) => (
      <TouchableOpacity key={index} style={{ width: "100%" }}>
        <Card>
          <BG source={category.background} />
          <Category>{category.name}</Category>
        </Card>
      </TouchableOpacity>
    ))}
  </Container>
);

export default RecommendedCards;

const Container = styled.View`
  width: 100%;
  flex: 1;
`;

const Card = styled.View`
  width: 90%;
  height: 64px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  justify-content: center;
  overflow: hidden;
`;

const BG = styled.Image`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Category = styled.Text`
  font-size: 24px;
  font-weight: 800;
  margin-left: 20px;
  color: white;
`;

const categories = [
  {
    name: "Concerts",
    background: require("../assets/gradients/Gradient1.png"),
  },
  {
    name: "Summer 2020",
    background: require("../assets/gradients/Gradient2.png"),
  },
  {
    name: "R&B",
    background: require("../assets/gradients/Gradient3.png"),
  },
  {
    name: "Party",
    background: require("../assets/gradients/Gradient4.png"),
  },
  {
    name: "Atlanta",
    background: require("../assets/gradients/Gradient5.png"),
  },
  {
    name: "New York",
    background: require("../assets/gradients/Gradient6.png"),
  },
  {
    name: "Miami",
    background: require("../assets/gradients/Gradient7.png"),
  },
];
