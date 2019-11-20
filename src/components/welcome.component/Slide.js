import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions, Animated, Image } from "react-native";
import styled from "styled-components/native";
import { Button } from "react-native-elements";
// import Images from '../../assets/img';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const MainView = styled.View`
  flex: 1;
  align-items: center;
`;
const ContentView = styled.View`
  width: ${SCREEN_WIDTH};
  height:${SCREEN_HEIGHT};
  align-items: center;
  justify-content: center;
`;
const Content = styled.Image`
  width: ${SCREEN_WIDTH};
  height: 70%;
`;
const Overlay = styled.View`
  position:absolute;
  top: 0;
  background: rgba(37,47,57,0.6);
  height: 70%;
  width: ${SCREEN_WIDTH};
`;
const CustomText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fefefe;
`;
const ContentItems = styled.View`
  height: 30%;
  width: ${SCREEN_WIDTH};
  elevation: 3;
  align-items: center;
  padding-top: 15%;
  text-align:center;
  background: rgb(37,47,57);
`;
// const StartedButton = styled.Button`
//   padding: 100px;
// `;

class Slides extends Component {
  renderLastSlide = index => {
    if (index === this.props.data.length - 1) {
      return (
        <View style={{flex: 1}}>
          <Button title="Get Started" raised onPress={this.props.onWelcomeEnd} />
        </View>
      );
    } 
    onSlidesComplete = () => {
      this.props.navigation.navigate("home");
    };
  };

  scrollX = new Animated.Value(0);

  renderSlides = () => {
    return this.props.data.map((slide, index) => {
      return (
        <>
          <ContentView key={index} style={{ backgroundColor: slide.color }}>
            {/* <Content source={Images.welcome[index]} /> */}
            <Overlay></Overlay>
            <ContentItems>
              <CustomText key={`text`+index}>{slide.text}</CustomText>
              {this.renderLastSlide(index)}
            </ContentItems>
          </ContentView>
        </>
      );
    });
  };

  render() {
    let position = Animated.divide(this.scrollX, SCREEN_WIDTH);
    return (
      <MainView style={{ opacity: 1, backgroundColor: "rgb(37,47,57)" }}>
        <ScrollView
          horizontal
          style={{ flex: 1 }}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.scrollX } } }
          ])}
          scrollEventThrottle={16}
        >
          {this.renderSlides()}
        </ScrollView>
        <View style={{ flexDirection: "row" }}>
          {this.props.data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],

              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={i}
                style={{
                  zIndex: 5,
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "#fff",
                  margin: 8,
                  borderRadius: 5
                }}
              />
            );
          })}
        </View>
      </MainView>
    );
  }
}

export default Slides;
