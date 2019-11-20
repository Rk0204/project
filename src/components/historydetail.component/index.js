import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { BackHandler } from 'react-native';
import { LinearGradient } from "expo";

// const Wrapper = styled.View`
//   display: flex;
//   flex: 1;
//   padding: 10px;
//   flex-direction: column;
// `;

const MainView = styled(LinearGradient)`
  flex: 1;
  display: flex;
`;
const Header = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 20px;
`;
const Title = styled.Text`
  font-size: 26;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;


const Body = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px;
`;

const LeftSide = styled.View`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 50%;
`;

const RightSide = styled.View`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 50%;
`;

const Key = styled.Text`
margin-top: 15px;
margin-bottom: 15px;
font-size: 20px;
color: #fff;
font-weight: bold;
`;

const Value = styled.Text`
margin-top: 15px;
margin-bottom: 15px;
font-size: 20px;
color: #fff;
`;








class HistoryDetailScreen extends Component {

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  state = {
    loaded: false
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.history != this.props.history) {
      this.setState({ loaded: true });
    }
  }

  handleBackButtonClick() {
    this.props.navigation.navigate('profile');
    return true;
  }

  componentDidMount = () => {
    // this.props.getHistory();
  }
                                                                        

  ProductDetailHandler = (pid) => {
    this.props.navigation.navigate("detail")
  }


  render() {
    return (
          <MainView 
          colors={["rgba(237, 124, 149, 0.8)", "rgba( 86, 4, 22, 0.8)"]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          >
           
            <Header>
                 <Title> History</Title>
            </Header>
            <Body>
                <LeftSide>
                    <Key>Total Duration  :</Key>
                    <Key>Start location  :</Key>
                    <Key>Stop location  :</Key>
                    <Key>Start Time  :</Key>
                    <Key>Stop Time  :</Key>
                    <Key>Top Speed  :</Key>
                    <Key>No of 0-60  :</Key>
                </LeftSide>
                <RightSide>
                    <Value>56 minute</Value>
                    <Value>8th cross Road</Value>
                    <Value>hsr sector-4</Value>
                    <Value>05:05pm</Value>
                    <Value>10:30pm</Value>
                    <Value>87 Kmph</Value>
                    <Value>4</Value>
                </RightSide>
            </Body>
          </MainView>
    );
  }
}

export default HistoryDetailScreen;
