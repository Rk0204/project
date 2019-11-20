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
const RegisterButton = styled.TouchableOpacity`
  width: 100%;
  font-size: 18;
  padding: 15px;
  background: #fff;
  border-radius: 5;
`;
const RegisterText = styled.Text`
  text-align: center;
  font-size: 18;
`;

class Register extends Component {
  state = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    password2: ""
  };
  registerHandler = () => {
    let data = {};
    data.name = this.state.name;
    data.email = this.state.email;
    data.mobile = this.state.mobile;
    data.password = this.state.password;
    data.password2 = this.state.password2;
    this.props.register(data, this.callBack);
  };
  callBack = () => {
    this.props.updateLoader(false);
  };
  render() {
    return (
      <Wrapper>
        <CustomInput
          placeholder="Full name"
          onChangeText={name => this.setState({ name })}
          placeholderTextColor="#fff"
        />
        <CustomInput
          placeholder="Email ID"
          onChangeText={email => this.setState({ email })}
          placeholderTextColor="#fff"
        />
        <CustomInput
          placeholder="Mobile Number"
          onChangeText={mobile => this.setState({ mobile })}
          placeholderTextColor="#fff"
        />
        <CustomInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
          placeholderTextColor="#fff"
        />
        <CustomInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={password2 => this.setState({ password2 })}
          placeholderTextColor="#fff"
        />
        <RegisterButton onPress={this.registerHandler}>
          <RegisterText>Register</RegisterText>
        </RegisterButton>
      </Wrapper>
    );
  }
}

export default Register;
