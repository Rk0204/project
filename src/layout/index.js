import React, { Component } from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

class Layout extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <View>{this.props.children}</View>

        <Text>Footer</Text>
      </Wrapper>
    );
  }
}

export default Layout;
