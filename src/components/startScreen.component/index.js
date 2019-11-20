import React, { Component } from "react";
import { Text, ActivityIndicator } from "react-native";
import styled from "styled-components";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScreenWrapper } from "../../UI/wrapper";

import BottomTab from "../bottomTab.component";
// import { Location, Permissions } from "expo";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import _ from "lodash";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import { LinearGradient } from "expo";


const MainView = styled(LinearGradient)`
  flex: 1;
  display: flex;
`;
const Container = styled.View`
  width: 80%;
  margin: 0 auto;
  padding: 8px;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  position: relative;
  flex: 1;
  margin-top: 30px;
`;

const LiveSpeed = styled.View`
  border: 1px solid #eee;
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Location1 = styled.View`
  margin-top: 24px;
`;
const Time = styled.View`
  margin-top: 24px;
`;

let count=0;
let temp =0;
let temp2=60.00;
let temp3=60.30;
let temp4=0;
class StartScreen extends Component {
  state = {
    time: null,
    liveSpeed: null,
    duration:null,
    sixtyCount: 0,
    start_location:null,
    top_speed:null,
    run_method: true,
    lat:null,
    lon:null,
    lat1:null,
    lon1:null
  };



  _onPress =async () => {
    this.setState({
      run_method: false
    })
    var stop_time = Math.floor(Date.now() / 1000);
    console.warn(stop_time);
    let data1 ={};
    data1.start_time=this.state.time;
    data1.start_location=this.state.start_location;
    data1.stop_time= stop_time;
    data1.distance=0;
    data1.duration=this.state.time;
    data1.lat1=this.state.lat;
    data1.lon1=this.state.lon;
    data1.lat2 = this.state.lat1;
    data1.lon2 = this.state.lon1;
  await  this.props.saveData(data1);
   await console.warn(data1,count);
    // this.props.gotSixtyCount(data);
    this.props.navigation.navigate("stats");
  }

  componentDidMount = async () => {
    // await this.props.getCurrentLocation();
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   }
    await this._liveLocation("start");
    await this._currentLocation();
    this.setState({
      start_location: this.props.location
    })
  };
  // componentWillUpdate = async () => {
  //   if(this.state.run_method){
  //   await this._liveLocation();
  //   }
  // };

  componentWillMount = async () => {
    await this._liveLocation("stop");
  };

  // componentWillUnmount = async () => {
  //   await this._liveLocation("stop");
  // }

  _liveLocation = async (type) => {
    // if(this.state.run_method){
      if(type == "start"){
    await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.Balanced,
        timeInterval: 300,
        distanceInterval: 0
      },
      loc => {
        // console.warn(loc.coords.speed);
        this.setState({ 
          liveSpeed: loc.coords.speed,
          duration: loc.timestamp,
          lat: loc.coords.latitude,
          lon: loc.coords.longitude
        
        });
      
        }
    );
      } else if(type== "stop"){
        let data ={};
        await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.Balanced,
            timeInterval: 300,
            distanceInterval: 0
          },
          loc => {
            // console.warn(loc.coords.speed);
            this.setState({ 
              liveSpeed: loc.coords.speed,
              duration: loc.timestamp,
              lat1: loc.coords.latitude,
              lon1: loc.coords.longitude
            
            });
            if(loc.coords.longitude){
            data.lat=loc.coords.latitude;
            data.lon = loc.coords.longitude;
            this.props.saveStopLocation(data);
            }
          
            }
        );
      }
  };

  _topSpeed = (speed) =>{
    // if(this.state.run_method){
    if(speed > temp){
      temp = speed;
      this.props.gotTopSpeed(temp);
    }
    
    // this.setState({
    //   topSpeed: temp
    // })
    
  // }
  return temp;
  }

  _frequency = (speed) =>{
    // if(this.state.run_method){
   if(Math.round(speed) >=temp2 && Math.round(speed) <= temp3){
     count = count+1;
     
   }
   this.props.gotSixtyCount(count);
   
  // }
  return count;
  }

  _currentLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});

    this.setState({
      time: Math.floor(Date.now() / 1000)
    });

    // console.warn(new Date(Number(location.timestamp)).getDate());
    // console.warn(new Date(Number(location.timestamp)).getMonth());
    // // console.warn(new Date(Number(location.timestamp)).getDay());
    // console.warn(new Date(Number(location.timestamp)).getFullYear());
    // console.warn(new Date(Number(location.timestamp)).getHours());
    // console.warn(new Date(Number(location.timestamp)).getMinutes());
    // console.warn(new Date(Number(location.timestamp)).getSeconds());
  };

  // componentWillUnmount() {
  //   navigator.geolocation.clearWatch(this.watchId);
  // }

  render() {
    const { location } = this.props;
    const { time, liveSpeed } = this.state;
    // console.warn(this.state.time)

    return (
      <MainView 
          colors={["rgba(69, 156, 238, 0.8)", "rgba( 26, 30, 163, 0.8)"]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          >
      <ScreenWrapper>
        <Container>
          <LiveSpeed>
            <Text>Live Speed :{liveSpeed}</Text>
          </LiveSpeed>
          <LiveSpeed>
            <Text>topSpeed:{this._topSpeed(liveSpeed)}</Text>
          </LiveSpeed>
          <LiveSpeed>
            <Text>frequency :{this._frequency(liveSpeed)}</Text>
          </LiveSpeed>
          <Location1>
            <Text>
              Start Location: {location.street},{location.postalCode},{" "}
              {location.region}
            </Text>
          </Location1>
          <Time>
            <Text>Start Time :{time ? _.toString(time) : "loading..."}</Text>
          </Time>
        </Container>
        <BottomTab
          active={"home"}
          main={"stop"}
          navigation={this.props.navigation}
          _onPress={this._onPress}
        />
      </ScreenWrapper>
      </MainView>
    );
  }
}

export default StartScreen;
