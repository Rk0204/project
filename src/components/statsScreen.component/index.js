import React, { Component } from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScreenWrapper } from "../../UI/wrapper";
import BottomTab from "../bottomTab.component";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { LinearGradient } from "expo";


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


class StatsScreen extends Component {
  state = {
    lat: null,
    lon: null
  };

  componentDidMount = async () => {
    
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   }
   await this._liveLocation();
   
    this.saveData();
  }

  componentWillMount = async () => {
    
  }

  saveData = async () =>{
    
    let distance =await this.getDistance();
    const {speedCount,topSpeed,savedData,location,stopData} = this.props;
    console.warn("Data==",stopData)
    let data={};
    let data1={};
    let data2 ={};
    if(stopData){
    data1.lat = savedData.lat1;
    data1.lon = savedData.lon1;
    data2.lat= stopData.lat;
    data2.lon = stopData.lon;
    data.start_time = savedData.start_time;
    data.start_location = data1;
    data.stop_time = savedData.stop_time;
    data.stop_location = data2;
    data.topspeed = Math.round(topSpeed);
    data.distance = distance;
    data.frequency = speedCount;
    // if(this.state.lat && this.state.lon){
    console.warn("Data==",data)
    // }
    if(this.props.token){
      this.props.saveHistoryData(data)
    }
  }
  }

  getDistance = () =>{
  
    
    if(this.props.stopData){
      const {lat,lon}=this.state;
    const {savedData,stopData}=this.props;
    var R = 6371; // km (change this constant to get miles)
    var lat1=savedData.lat1;
    var lat2 = stopData.lat;
    var lon1 = savedData.lon1;
    var lon2 = stopData.lon;
    var dLat = (lat2-lat1) * Math.PI / 180;
    var dLon = (lon2-lon1) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return Math.round(d*1000);
    }
  }

  _liveLocation = async () => {
    // if(this.state.run_method){
    await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.Balanced,
        timeInterval: 0,
        distanceInterval: 0
      },
      loc => {
        // console.warn(loc.coords.latitude,loc.coords.longitude);
      this.setState({ 
          lat: loc.coords.latitude,
          lon: loc.coords.longitude
        
        });
      
        }
    );
      // }
  };

  _onclose = () => this.props.navigation.navigate("home");

  render() {
    const {speedCount,topSpeed,savedData,location,stopData} = this.props;
    return (
      <>
      <MainView 
      colors={["rgba(237, 124, 149, 0.8)", "rgba( 86, 4, 22, 0.8)"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      >
       
        <Header>
             <Title>Statistics</Title>
        </Header>
        <Body>
            <LeftSide>
                <Key>Total Duration  :</Key>
                <Key>Distance  :</Key>
                <Key>Start location  :</Key>
                <Key>Stop location  :</Key>
                <Key>Start Time  :</Key>
                <Key>Stop Time  :</Key>
                <Key>Top Speed  :</Key>
                <Key>No of 0-60  :</Key>
            </LeftSide>
            <RightSide>
                <Value>56 minute</Value>
                <Value>20 km</Value>
                <Value>8th cross Road</Value>
                <Value>hsr sector-4</Value>
                <Value>{savedData && savedData.start_time}</Value>
                <Value>{savedData && savedData.stop_time}</Value>
                <Value>{topSpeed && topSpeed}</Value>
                <Value>{speedCount && speedCount}</Value>
            </RightSide>
        </Body>
        
      </MainView>
      <BottomTab
      active={"home"}
      main={""}
      navigation={this.props.navigation}
    />
    </>
    );
  }
}

export default StatsScreen;
