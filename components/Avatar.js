import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Avatar = (props) => (
  <Image
    source={props.image}
    style={{
      height: props.size,
      width: props.size,
      borderRadius: props.size / 2,
      margin: props.size / 15,
    }}
  />
);

export default Avatar;

const Image = styled.Image``;
