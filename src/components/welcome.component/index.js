import React, { Component } from "react";
import { Text, View, AsyncStorage } from "react-native";
import styled from "styled-components";
import Slides from './Slide.js';

const SLIDE_DATA = [
  { text: "Spindle! The Rider in you", color: "#fff" },
  { text: "Measure your daily driving", color: "#fff" },
  { text: "Rank your skills with peeps in your city/state/country", color: "#fff" },
  { text: "Get your driving skill Rating", color: "#fff" }
];

class Welcome extends Component {
  state = {
    hasViewedWelcome: false
  };

  componentWillMount = async () => {
    // const hasViewedWelcome = await AsyncStorage.getItem("hasViewedWelcome");
    // this.setState({ hasViewedWelcome });
    // if(this.state.hasViewedWelcome){
    //   this.props.navigation.navigate("home");
    // }
  };

  onWelcomeEnd = async () => {
    await AsyncStorage.setItem("hasViewedWelcome", "true");
    this.setState({ hasViewedWelcome: true });
    this.props.navigation.navigate("home");
  };

  render() {
    if(this.state.hasViewedWelcome)
      return this.props.navigation.navigate("home");
    else
      return <Slides data={SLIDE_DATA} onWelcomeEnd={this.onWelcomeEnd} />;
  }
}

export default Welcome;
