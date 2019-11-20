import React from "react";
import styled from "styled-components";
import { TextInput, View, Text } from "react-native";

const Wrapper = styled.View`
  margin-bottom: 0.75rem;
`;
const Container = styled.View`
  font-size: 1rem;
  position: relative;
  text-align: left;
`;

const CustomInput = styled.TextInput`
  padding-right: 2.25em;
  padding-left: 2.25em;
  touch-action: manipulation;
  color: #777;
  border: 1px #b2b2b2 solid;
  margin: 0;
  resize: none;
  border-radius: 3px;
  box-sizing: border-box;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  max-width: 100%;
  width: 100%;
  background-color: white;
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  align-items: center;
`;

const Input = props => {
  return (
    <Wrapper>
      <Container>
        <CustomInput {...props} />
      </Container>
    </Wrapper>
  );
};

export default Input;
