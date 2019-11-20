// // import React, { Component } from "react";
// // import Expo from "expo";
// // import { Text } from "react-native";
// // import { GoogleSignIn } from 'expo-google-sign-in';
// // import styled from "styled-components";
// // import { Input, Button } from "react-native-elements";
// // import Icon from "react-native-vector-icons/FontAwesome";
// // import { ScreenWrapper } from "../../UI/wrapper";
// // import GoogleSignInButton from './googleSignInButton';
// // import * as Google from 'expo-google-app-auth'

// // const Container = styled.View`
// //   width: 80%;
// //   margin: 0 auto;
// //   padding: 8px;
// //   height: 80%;
// //   display: flex;
// //   justify-content: center;
// //   align-content: center;
// //   position: relative;
// // `;

// // const Header = styled.View`
// // height: 20%;
// // display: flex;
// // justify-content: center;
// // align-items: center;
// // `;

// // const Logo = styled.Text`
// // font-size: 20px;
// // font-weight: bold;
// // text-align: center;
// // `;

// // const AuthContainer = styled.View`
// //   margin-bottom: 24px;
// // `;
// // const SocialAuth = styled.View`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   padding: 8px;
// //   flex-flow: row;
// // `;
// // const CloseBar = styled.View`
// //   position: absolute;
// //   top: -10px;
// //   right: -10px;
// // `;
// // const OR = styled.View`
// //   margin-bottom: 16px;
// //   text-align: center;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   opacity: 0.6;
// // `;

// // const GoogleButton = styled.View`
// // width: 100px;
// // height: 70px;
// // background: "red";
// // display: flex;
// // justify-content: center;
// // align-items: center;
// // `;

// // class AuthScreen extends Component {
// //   // state = {};
// //   state = { user: null };

// //   componentDidMount() {
// //     this.initAsync();
// //   }

// //   initAsync = async () => {
// //     await GoogleSignIn.initAsync({
// //       clientId: '<YOUR_IOS_CLIENT_ID>',
// //     });
// //     this._syncUserWithStateAsync();
// //   };

// //   _syncUserWithStateAsync = async () => {
// //     const user = await GoogleSignIn.signInSilentlyAsync();
// //     this.setState({ user });
// //   };

// //   signOutAsync = async () => {
// //     await GoogleSignIn.signOutAsync();
// //     this.setState({ user: null });
// //   };

// //   signInAsync = async () => {
// //     try {
// //       const { type, user, accessToken } = await Expo.Google.logInAsync({
// //         iosClientId: '687916247467-6dt3274n9544kfk53udm2di107vvmahe.apps.googleusercontent.com',
// //       });
// //       // const { type, user } = await GoogleSignIn.signInAsync();
// //       if (type === 'success') {
// //         this._syncUserWithStateAsync();
// //       }
// //     } catch ({ message }) {
// //       alert('login: Error:' + message);
// //     }
// //   };

// //   onPress = () => {
// //     if (this.state.user) {
// //       this.signOutAsync();
// //     } else {
// //       this.signInAsync();
// //     }
// //   };

// //   _onclose = () => this.props.navigation.navigate("home");

// //   get buttonTitle() {
// //     return this.state.user ? 'Sign-Out of Google' : 'Sign-In with Google';
// //   }

// //   render() {
// //     return (
// //       <ScreenWrapper>
// //         <Container>
// //           <CloseBar>
// //             <Button
// //               type="clear"
// //               icon={<Icon name="times" size={24} color="#2d3436" />}
// //               onPress={this._onclose}
// //             />
// //           </CloseBar>
// //           <Header>
// //             <Logo>Welcome to Spindle!</Logo>
// //           </Header>
// //           <GoogleSignInButton onPress={this._toggleAuth}>
// //           {this.buttonTitle}
// //         </GoogleSignInButton>
// //           {/* <AuthContainer>
// //             <Input
// //               leftIcon={<Icon name="phone-square" size={24} color="#eee" />}
// //               textContentType="telephoneNumber"
// //               placeholder="Mobile Number"
// //               leftIconContainerStyle={{ marginLeft: 0, marginRight: 8 }}
// //             />

// //             <Button
// //               type="solid"
// //               title="Login"
// //               buttonStyle={{ backgroundColor: "#2d3436" }}
// //               containerStyle={{ margin: 8, marginBottom: 0 }}
// //             />
// //             <Button
// //               type="clear"
// //               title="New to Spindle ? Sign up"
// //               titleStyle={{
// //                 color: "#2d3436",
// //                 fontSize: 13,
// //                 letterSpacing: -0.3
// //               }}
// //             />
// //           </AuthContainer>
// //           <OR>
// //             <Text>OR</Text>
// //           </OR>

// //           <SocialAuth>
// //             <Button
// //               title="Google"
// //               buttonStyle={{ backgroundColor: "#2d3436" }}
// //               containerStyle={{ marginRight: 16, minWidth: 100 }}
// //             >G<Icon name="google" size={14} color="#fff" /></Button>
// //             <Button
// //               title="Facebook"
// //               buttonStyle={{ backgroundColor: "#2d3436", minWidth: 100 }}
// //             />
// //           </SocialAuth> */}
// //         </Container>
// //       </ScreenWrapper>
// //     );
// //   }
// // }

// // export default AuthScreen;
// import React, { Component } from "react";
// import { Text, View, TouchableOpacity, AsyncStorage, BackHandler } from "react-native";
// // import Images from "../../assets/img/index";
// import styled from "styled-components";
// import { Ionicons, FontAwesome } from "@expo/vector-icons";
// import firebase from "../Firebase/firebase";
// import showToast from '../../utils/ToastAndroid';
// import { GoogleLogin, FacbookLogin } from "../../utils/socialLogin";
// import GoogleSignInButton from './googleSignInButton';

// const Wrapper = styled.ScrollView`
//   padding: 30px;
//   display: flex;
//   flex-direction: column;
//   background: #353e42;
// `;

// const SkipText = styled.TouchableOpacity`
//   color: #fff;
//   top: 20;
//   right: 0;
//   position: absolute;
// `;

// const Logo = styled.Image`
//   width: 100;
//   height: 100;
//   position: absolute;
//   top: 120;
//   right: 50;
// `;
// const LoginContainer = styled.View`
//   display: flex;
//   flex-direction: column;
//   margin-top: 130;
//   margin-bottom: 40;
// `;
// const WelcomeText = styled.Text`
//   font-size: 30;
//   color: #fff;
//   font-weight: bold;
//   margin-top: 100;
// `;
// const MobileInputContainer = styled.View`
//   border-width: 1;
//   border-color: #fff;
//   border-radius: 10;
//   width: 100%;
//   margin-bottom: 20;
//   display: flex;
//   flex-direction: row;
// `;
// const CountryCode = styled.Text`
//   display: flex;
//   width: 20%;
//   color: #fff;
//   justify-content: center;
//   align-items: center;
//   font-size: 18;
//   padding: 15px;
//   border-right-width: 1;
//   border-right-color: #fff;
//   text-align: center;
// `;
// const MobileInput = styled.TextInput`
//   display: flex;
//   width: 80%;
//   font-size: 18;
//   padding: 10px;
//   color: #fff;
// `;
// const LoginButton = styled.TouchableOpacity`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #fff;
//   border-radius: 10;
//   padding: 10px;
//   margin-bottom: 12;
// `;
// const EmailModeText = styled.Text`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 14;
//   text-align: center;
//   color: #fff;
// `;
// const Splitter = styled.View`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   margin-bottom: 30;
// `;
// const Line = styled.View`
//   height: 1;
//   width: 45%;
//   display: flex;
//   background: rgba(255, 255, 255, 0.5);
// `;
// const OR = styled.Text`
//   font-size: 14;
//   color: #fff;
//   padding: 5px;
//   margin-top: -13;
// `;
// const SocialLogin = styled.View`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-top: 300;
// `;
// const GoogleButton = styled.TouchableOpacity`
//   padding-top: 5;
//   padding-bottom: 5;
//   display: flex;
//   flex-direction: row;
//   background: #fff;
//   border-width: 1;
//   border-color: #fff;
//   border-radius: 10;
//   width: 45%;
//   justify-content: center;
// `;
// const FacebookButton = styled.TouchableOpacity`
//   padding-top: 5;
//   padding-bottom: 5;
//   display: flex;
//   flex-direction: row;
//   border-width: 1;
//   border-color: #fff;
//   border-radius: 10;
//   width: 45%;
//   justify-content: center;
// `;
// const CustomInput = styled.TextInput`
//   width: 100%;
//   font-size: 18;
//   padding: 10px;
//   color: #fff;
//   border-width: 1;
//   border-color: #fff;
//   border-radius: 10;
//   margin-bottom: 20;
//   padding-left: 20;
// `;
// const RegisterText = styled.Text`
//   font-size: 16;
//   color: #858585;
//   text-align: center;
// `;

// const MODE = {
//   MOBILE: "mobile",
//   EMAIL: "email"
// };
// class AuthScreen extends Component {

//   constructor(props) {
//     super(props)
//     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
//     this.state = {
//       email: "",
//       mobileNo: "",
//       password: "",
//       loader: false,
//       login: false,
//       logEmail: false,
//       logPhone: false
//     };
//   }

// // componentDidMount=()=>{
// //   GoogleLogin(this.SocialCB);
// // }

//   componentWillMount = async () => {
//     let token = await AsyncStorage.getItem("token");
//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
//     // if (token.length) this.props.navigation.navigate("home");
//   };

//   componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
//   }

//   handleBackButtonClick() {
//     BackHandler.exitApp();
//     return true;
//   }

 
//   modeHandler = mode => {
//     this.setState({ mode });
//   };

//   skipHandler = () => {
//     this.props.navigation.navigate("welcome");
//   };
  
 
//   _loginWithGoogle = async () => {
//     GoogleLogin(this.SocialCB);
//   };
//   SocialCB = (data) => {
//     console.warn("access token=",data.accessToken)
//     this.props.navigation.navigate("welcome")
//   }


//   render() {
//     return (
//         <Wrapper>
//           <SkipText onPress={this.skipHandler}>
//             <FontAwesome name="times" color="#fff" size={20} />
//           </SkipText>
//           {/* <Logo source={Images.loginLogo} /> */}
//           {/* <LoginContainer> */}
//             <WelcomeText>Welcome to Spindle</WelcomeText>
//           <SocialLogin>
//             <GoogleSignInButton onPress={this._loginWithGoogle}>
//               <Text style={{ fontSize: 18, color: "#353E42", paddingLeft: 10 }}>
//                 Continue with Google
//             </Text>
//             </GoogleSignInButton>
//           </SocialLogin>
//         </Wrapper>
//     );
//   }
// }

// export default AuthScreen;

import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  BackHandler,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
// import Images from "../../assets/img/index";
import styled from "styled-components";
// import * as Font from "expo-font";
import { LinearGradient } from "expo";
import Loader from "../loader.component";
import Login from "./login";
import Register from "./register";
import { MaterialIcons } from "@expo/vector-icons";

const MainView = styled(LinearGradient)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.View`
  width: 80%;
  margin-top: 200;
`;
const LogoView = styled.View`
  width: 70%;
  margin-bottom: 50;
`;
const Logo = styled.Image`
  width: 180;
  height: 40;
`;
const ModesContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30;
`;
const Modes = styled.Text`
  margin-right: 40;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
`;
const Mode = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER"
};

class AuthScreen extends Component {
  state = {
    mode: Mode.LOGIN,
    loader: false
  };
  async componentWillMount() {
    let token = await AsyncStorage.getItem("token");
    let skip = await AsyncStorage.getItem("skipAuth");
    if (token || skip) this.props.navigation.navigate("home");
    this.setState({ fontLoaded: true });
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.token) {
      this.setState({ loader: false });
      this.props.navigation.navigate("home");
    }
  };
  modeChange = mode => {
    this.setState({ mode });
  };
  updateLoader = value => {
    this.setState({ loader: value });
  };
  skipHandler = async () => {
    await AsyncStorage.setItem("skipAuth", "true");
    this.props.navigation.navigate("home");
  };
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <MainView
          colors={["rgba(0, 255, 153, 0.8)", "rgba(0, 51, 0, 0.8)"]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <ScrollView
            style={{ flex: 1, width: "100%" }}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <MaterialIcons
              name="close"
              color="#fff"
              size={25}
              style={{ position: "absolute", right: 20, top: 50 }}
              onPress={this.skipHandler}
            />
            <Container>
              {/* <LogoView>
                <Logo
                  source={Images.white_logo}
                  style={{ resizeMode: "contain" }}
                />
              </LogoView> */}
              <ModesContainer>
                <Modes
                  active={Mode.LOGIN == this.state.mode}
                  onPress={() => this.modeChange(Mode.LOGIN)}
                >
                  Login
                </Modes>
                <Modes
                  active={Mode.REGISTER == this.state.mode}
                  onPress={() => this.modeChange(Mode.REGISTER)}
                >
                  Register
                </Modes>
              </ModesContainer>
              <FormContainer>
                {this.state.mode == Mode.LOGIN ? (
                  <Login
                    navigation={this.props.navigation}
                    login={this.props.login}
                    updateLoader={this.updateLoader}
                  />
                ) : (
                  <Register
                    navigation={this.props.navigation}
                    register={this.props.register}
                    updateLoader={this.updateLoader}
                  />
                )}
              </FormContainer>
            </Container>
            {this.state.loader && <Loader text={"logging in..."} />}
          </ScrollView>
        </MainView>
      </KeyboardAvoidingView>
    );
  }
}

export default AuthScreen;
