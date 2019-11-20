import React, { Component } from "react";
import { Alert, Share, BackHandler, Text } from "react-native";
import styled from "styled-components";
// import Layout from "../RepeatedComponents/layout";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import BottomTab from "../bottomTab.component";
import NoLogin from "./nologin";

const Wrapper = styled.ScrollView`
  display: flex;
  padding: 30px;
`;
const Header = styled.TouchableOpacity`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1;
  border-bottom-color: #eee;
`;
const Info = styled.View`
  display: flex;
  flex-direction: column;
`;
const Name = styled.Text`
  color: #333;
  font-size: 26;
  text-transform: capitalize;
`;
const Email = styled.Text`
  color: ${props => props.theme.primary};
  font-size: 18;
`;
const NavItem = styled.TouchableOpacity`
  padding-top: 20;
  padding-bottom: 20;
  border-bottom-width: 1;
  border-bottom-color: #eee;
`;

class Profile extends Component {
  logoutAlert = () => {
    Alert.alert(
      "Log Out!",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => this.logoutHandler()
        }
      ],
      {
        cancelable: false
      }
    );
    return true;
  };
  logoutHandler = async () => {
    this.props.logout();
    this.props.navigation.navigate("profile");
  };

  render() {
    const { user, navigation, token } = this.props;
    return (
      <>
        {token ? (
          <Wrapper>
            <Header onPress={this.accountHandler}>
              <Info>
                <Name>{user.name}</Name>
                <Email>{user.email}</Email>
              </Info>
              <MaterialIcons
                name="edit"
                size={20}
                // style={{ position: "absolute", right: 20, top: 20 }}
                color="#ff632a"
              />
            </Header>
          
            <NavItem onPress={() => this.props.navigation.navigate("history")}>
              <Text
                style={{
                  color: "#666",
                  fontSize: 18
                }}
              >
                History
              </Text>
            </NavItem>
            
            <NavItem onPress={this.logoutAlert}>
              <Text
                style={{
                  
                  color: "#FF632A",
                  fontSize: 18
                }}
              >
                Logout
              </Text>
            </NavItem>
          </Wrapper>
        ) : (
          <NoLogin navigation={navigation} />
        )}
        <BottomTab navigation={this.props.navigation} active={"profile"} />
      </>
    );
  }
}

export default Profile;
