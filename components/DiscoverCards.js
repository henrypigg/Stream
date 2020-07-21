import React from "react";
import styled from "styled-components";

const DiscoverCards = () => (
  <Container>
    <TopRow>
      <MapCard>
        <Image source={require("../assets/gradients/Gradient2.png")} />
        <Title>Local Heat</Title>
      </MapCard>
      <ActivityCard>
        <Image source={require("../assets/gradients/Gradient6.png")} />
        <Title>Top Activity</Title>
      </ActivityCard>
    </TopRow>
    <BottomRow>
      <HashtagCard>
        <Image source={require("../assets/gradients/Gradient5.png")} />
        <Title>Trending Hashtags</Title>
      </HashtagCard>
      <ChartsCard>
        <Image source={require("../assets/gradients/Gradient3.png")} />
        <Title>Top Charts</Title>
      </ChartsCard>
    </BottomRow>
  </Container>
);

export default DiscoverCards;

const Container = styled.View`
  width: 100%;
  height: 350px;
  align-items: center;
`;

const TopRow = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  width: 100%;
  height: 45%;
`;

const MapCard = styled.View`
  width: 38%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  margin-left: 4%;
  margin-right: 2%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.Image`
  position: absolute;
  width: 100%;
  height: 50%;
  align-self: flex-end;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 800;
  width: 80%;
  color: white;
  text-align: center;
`;

const ActivityCard = styled.View`
  width: 48%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  margin-left: 2%;
  margin-right: 4%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const BottomRow = styled.View`
  margin-top: 10px;
  flex-direction: row;
  width: 100%;
  height: 45%;
`;

const HashtagCard = styled.View`
  width: 48%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  margin-left: 4%;
  margin-right: 2%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const ChartsCard = styled.View`
  width: 38%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  margin-left: 2%;
  margin-right: 4%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
