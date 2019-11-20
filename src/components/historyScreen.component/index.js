import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import NoLogin from '../profile.component/nologin';
import { BackHandler } from 'react-native';
import { LinearGradient } from "expo";
import HistoryCard from "./historyCard";

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
padding: 10px;
`;







class HistoryScreen extends Component {

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
    const { loaded } = this.state;
    const { history, token, navigation, getDetails } = this.props;
    if (!this.props.token) {
      return (<NoLogin navigation={this.props.navigation} />)
    }
    return (
          <MainView 
          colors={["rgba(69, 156, 238, 0.8)", "rgba( 26, 30, 163, 0.8)"]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          >
           
            <Header>
                 <Title>Drive History</Title>
            </Header>
            <Body>
                <HistoryCard navigation={this.props.navigation} />
                <HistoryCard navigation={this.props.navigation}/>
                <HistoryCard navigation={this.props.navigation}/>
                <HistoryCard navigation={this.props.navigation}/>
            </Body>
          </MainView>
    );
  }
}

export default HistoryScreen;
