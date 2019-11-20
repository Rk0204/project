import React, { Component } from "react";
import styled from "styled-components";
import { Text, ActivityIndicator } from "react-native";
import { ScreenWrapper } from "../../UI/wrapper";
import BottomTab from "../bottomTab.component";
import Icon from "react-native-vector-icons/FontAwesome";
// import { Location, Permissions } from "expo";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import _ from "lodash";

const Wrapper = styled.View`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const Container = styled.View`
  display: flex;
  flex: 1;
`;

const User = styled.View`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const CurrentLocation = styled.View`
  flex: 1;
`;

class HomeScreen extends Component {
  state = {
    error: null,
    stop: {
      lat: null,
      long: null,
      country: null,
      city: null,
      street: null,
      postalcode: null,
      name: null,
      region: null
    },
    start: {
      lat: null,
      long: null,
      country: null,
      city: null,
      street: null,
      postalCode: null,
      name: null,
      region: null
    }
  };

  componentDidMount = async () => {
    await this._locationPermission();
    await this.props.getCurrentLocation();
  };
  _onStart = () => this.props.navigation.navigate("start");

  _locationPermission = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   }
    return true;
  };

  _onPress = () => this.props.navigation.navigate("start");

  render() {
    const { start } = this.state;
    const { location } = this.props;
    return (
      <ScreenWrapper>
        <Wrapper>
          <Container>
            <User>
              <Text
                style={{ paddingRight: 16, fontSize: 18, fontWeight: "bold" }}
              >
                Hi User
              </Text>
              <Text>
                <Icon name="trophy" size={21} color={"#44bd32"} solid />
              </Text>
            </User>
            <CurrentLocation>
              <Text>Your Location : </Text>

              {!_.isEmpty(location) ? (
                <Text>
                  {location.street},{location.postalCode}, {location.region}
                </Text>
              ) : (
                <ActivityIndicator size="large" color="#0000ff" />
              )}
            </CurrentLocation>
          </Container>

          <BottomTab
            active={"home"}
            main={"start"}
            navigation={this.props.navigation}
            _onPress={this._onPress}
          />
        </Wrapper>
      </ScreenWrapper>
    );
  }
}

export default HomeScreen;
