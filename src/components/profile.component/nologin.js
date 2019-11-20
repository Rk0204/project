import React, { Component } from "react";
import {
  Alert,
  Share,
  BackHandler,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import styled from "styled-components";
// import images from "../../assets/img";

const Wrapper = styled.ScrollView`
  flex: 1;
`;
const TopSection = styled.View`
  height: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border-bottom-width: 1;
  border-bottom-color: #eee;
`;
const LoginText = styled.Text`
  font-size: 18;
  color: #333;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 10;
`;
const Login = styled.Text`
  font-size: 20;
  color: ${props => props.theme.primary};
  text-align: center;
`;
const Container = styled.View`
  padding: 30px;
  padding-top: 0;
`;
const NavItem = styled.TouchableOpacity`
  padding-top: 20;
  padding-bottom: 20;
  border-bottom-width: 1;
  border-bottom-color: #eee;
`;

class NoLogin extends Component {
  render() {
    return (
      <Wrapper>
        <TopSection>
          {/* <Image
            source={images.profile_empty}
            style={{ height: 250, width: 300, resizeMode: "contain" }}
          /> */}
          <LoginText>
            Keep a track on your Daily Drive Skills
          </LoginText>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("auth")}
          >
            <Login>Login / Register</Login>
          </TouchableOpacity>
        </TopSection>
        <Container>
          {/* <NavItem onPress={() => this.props.navigation.navigate("history")}>
            <Text
              style={{  color: "#666", fontSize: 18 }}
            >
              History
            </Text>
          </NavItem>
          <NavItem onPress={() => this.props.navigation.navigate("contact")}>
            <Text
              style={{  color: "#666", fontSize: 18 }}
            >
              Contact Us
            </Text>
          </NavItem>
          <NavItem onPress={() => this.props.navigation.navigate("about")}>
            <Text
              style={{  color: "#666", fontSize: 18 }}
            >
              About Us{" "}
            </Text>
          </NavItem> */}
          {/* <NavItem>
                        <Text style={{ fontFamily: 'Karla-Bold', color: "#666", fontSize: 18 }}>Share</Text>
                    </NavItem> */}
        </Container>
      </Wrapper>
    );
  }
}

export default NoLogin;
