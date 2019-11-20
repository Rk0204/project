import React, { Component } from "react";
import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";

const MainContainer = styled.View`
  width: 100%;
  background: #fff;
  height: 50px;
  flex-flow: row;
  align-items: center;
  justify-content: space-evenly;
  border-top-width: 0.5;
  border-color: #dfe6e9;
  elevation: 1;
`;
const Tab = styled.TouchableOpacity`
  width: 20%;
  justify-content: center;
  align-items: center;
`;
const TabText = styled.Text`
  font-size: ${props => (props.active ? 12 : 9)};
  color: ${props => (props.active ? "#2d3436" : "#111")};
  text-align: center;
`;

const Scan = styled.TouchableHighlight`
  width: 60px;
  height: 60px;
  border-radius: 35px;
  /* box-shadow: 0px 16px 53px -5px; */
  background: ${props => (props.type === "start" ? "#44bd32" : "red")};
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  elevation: 2;
`;

class Footer extends Component {
  toProfile = () => {
    this.props.navigation.navigate("profile");
  };

  toHome = () => {
    this.props.navigation.navigate("home");
  };

  toBarcode = () => {
    this.props.navigation.navigate("barcode");
  };

  toSuggestion = () => {
    this.props.navigation.navigate("suggestion");
  };

  toWishlist = () => {
    this.props.navigation.navigate("wishlist");
  };

  _onStart = () => this.props.navigation.navigate("start");

  render() {
    const { active, main, _onPress } = this.props;
    return (
      <MainContainer>
        <Tab onPress={this.toHome}>
          <Icon
            name="home"
            size={active == "home" ? 22 : 18}
            solid
            color={active == "home" ? "#2d3436" : "#636e72"}
          />
          <TabText active={active == "home"}>home</TabText>
        </Tab>
        {/* <Tab onPress={this.toWishlist}>
          <Icon
            name="history"
            size={active == "history" ? 22 : 18}
            solid
            color={active == "history" ? "rgb(0, 73, 90)" : "#636e72"}
          />
          <TabText active={active == "history"}>history</TabText>
        </Tab> */}
        <Tab>
          <Scan type={main} onPress={_onPress}>
            {/* <Icon name="barcode" size={25} solid color={"rgb(0, 73, 90)"} /> */}
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: "900"
              }}
            >
              {_.capitalize(main)}
            </Text>
          </Scan>
        </Tab>
        {/* <Tab onPress={this.toSuggestion}>
          <Icon
            name="trophy"
            size={active == "championship" ? 22 : 18}
            solid
            color={active == "championship" ? "rgb(0, 73, 90)" : "#636e72"}
          />
          <TabText active={active == "championship"}>championship</TabText>
        </Tab> */}
        <Tab onPress={this.toProfile}>
          <Icon
            name="user"
            size={active == "profile" ? 22 : 18}
            solid
            color={active == "profile" ? "rgb(0, 73, 90)" : "#636e72"}
          />
          <TabText active={active == "profile"}>profile</TabText>
        </Tab>
        {/* <Tab onPress={this.drawerHandler}>
          <Icon name="user-alt" size={20} solid color={"#636e72"} />
        </Tab> */}
      </MainContainer>
    );
  }
}

export default Footer;
