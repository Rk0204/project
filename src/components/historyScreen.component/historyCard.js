import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Wrapper = styled.TouchableOpacity`
height: 100px;
width: 100%;
background: #612527;
border: 1px solid #eee;
border-radius: 10px;
z-index: 5;
padding: 10px;
margin-top: 20px;
`;



const DistanceView = styled.View`
display: flex;
justify-content: flex-end;
align-items: flex-end;
height: 25px;
`;

const DistanceValue = styled.Text`
font-size: 16px;
color: #fff;
font-weight: bold;
`;

const SpeedView = styled.View`
display: flex;
justify-content: center;
align-items: center;
height: 30px;
`;

const SpeedValue = styled.Text`
font-size: 15px;
color: #fff;
font-weight: bold;
`;

const DateView = styled.View`
display: flex;
height: 25px;
justify-content: flex-start;
align-items: flex-start;
`;

const DateValue = styled.Text`
font-size: 22px;
color: #eee;
font-weight: bold;
`;

class HistoryCard extends Component {

    
                                                                          
  historyHandler = () => {
    this.props.navigation.navigate("details")
  }

  
  
    render() {
   
      return (  
                  <Wrapper onPress={this.historyHandler}>
                  <DateView>
                          <DateValue>15th Nov 2019: 17:05</DateValue>
                      </DateView>
                      <SpeedView>
                          <SpeedValue>Top Speed : 68KMPH</SpeedValue>
                      </SpeedView>
                      <DistanceView>
                          <DistanceValue>44 KM</DistanceValue>
                      </DistanceView>
                  </Wrapper>
      );
    }
  }
  
  export default HistoryCard;
  