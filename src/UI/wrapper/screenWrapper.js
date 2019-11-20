import React from "react";
import styled from "styled-components";

const Wrapper = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScreenWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ScreenWrapper;
