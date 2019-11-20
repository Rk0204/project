import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  BackHandler
} from "react-native";
// import Images from "../../assets/img/index";
import styled from "styled-components";
// import * as Font from "expo-font";
// import showToast from "../../utils/ToastAndroid";

const Wrapper = styled.View``;
const CustomInput = styled.TextInput`
  width: 100%;
  font-size: 18;
  padding: 10px;
  padding-left: 30px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5;
  margin-bottom: 20;
`;
const LoginButton = styled.TouchableOpacity`
  width: 100%;
  font-size: 18;
  padding: 15px;
  background: #fff;
  border-radius: 5;
  margin-bottom: 10;
`;
const LoginText = styled.Text`
  text-align: center;
  font-size: 18;
`;
const ForgotPassword = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  text-align: right;
  font-size: 18;
`;
class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  loginHandler = () => {
    let data = {};
    this.props.updateLoader(true);
    if (this.state.email.length && this.state.password.length) {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email) == true) {
        data.email = this.state.email;
        data.password = this.state.password;
        this.props.login(data, this.callCBEmail);
      } else {
        this.props.updateLoader(false);
        // showToast("Please Enter Valid Email Id");
      }
    } else {
      this.props.updateLoader(false);
    //   showToast("Fields cannot be Empty !!");
    }
  };
  callCBEmail = () => {
    this.props.updateLoader(false);
  };
  render() {
    return (
      <Wrapper>
        <CustomInput
          placeholder="Email ID"
          onChangeText={email => this.setState({ email })}
          placeholderTextColor="#fff"
        />
        <CustomInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
          placeholderTextColor="#fff"
        />
        <LoginButton onPress={() => this.loginHandler()}>
          <LoginText>Login</LoginText>
        </LoginButton>
        <ForgotPassword>Forgot Password?</ForgotPassword>
      </Wrapper>
    );
  }
}

export default Login;
