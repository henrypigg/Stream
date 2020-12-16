import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { View, ScrollView, StyleSheet, Modal, Text } from "react-native";
import AlbumCover from "../components/AlbumCover";
import Avatar from "../components/Avatar";
import { TouchableOpacity } from "react-native-gesture-handler";
import colorTheme from "../data/colorTheme";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closePopUp: () =>
      dispatch({
        type: "CLOSE_POPUP",
      }),
  };
}

class SubscribePopUp extends React.Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.subscribeVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <SubscribePopUpContainer>
          <ModalPopUp>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </ModalPopUp>
        </SubscribePopUpContainer>
      </Modal>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubscribePopUp);

const SubscribePopUpContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const ModalPopUp = styled.View`
  background-color: ${colorTheme.accentGray};
  width: 100%;
  height: 30%;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
