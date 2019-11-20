import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import { AuthScreen, HomeScreen, StartScreen, StatsScreen,WelcomeScreen, ProfileScreen, HistoryScreen, HistoryDetailScreen } from "../screens";

// const History = createStackNavigator(
//   {
//     history: {
//       screen: HistoryScreen,
//       navigationOptions: {
//         headerVisible: false
//       }
//     },
//     details: {
//       screen: HistoryDetailScreen,
//       navigationOptions: {
//         headerVisible: false
//       }
//     }
//   },
//   {
//     headerMode: "none",
//     navigationOptions: {
//       headerVisible: false
//     }
//   }
// );

const Main = createBottomTabNavigator(
  {
    home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarVisible: false
      }

    },
    history: {
      screen: HistoryScreen,
      navigationOptions: {
        tabBarVisible: false
      }

    },
    details: {
      screen: HistoryDetailScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  {
    navigationOptions: {
      tabBarVisible: false
    }
  }
);
const Navigation = createStackNavigator(
  {
    auth: {
      screen: AuthScreen,
      navigationOptions: {
        headerVisible: false
      }
    },
    welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerVisible: false
      }
    },
    home: {
      screen: Main,
      navigationOptions: {
        headerVisible: false
      }
    },
    start: {
      screen: StartScreen,
      navigationOptions: {
        headerVisible: false
      }
    },
    stats: {
      screen: StatsScreen,
      navigationOptions: {
        headerVisible: false
      }
    }

    // register: {
    //   screen: RegisterScreen,
    //   navigationOptions: {
    //     headerVisible: false
    //   }
    // },
    // otp: {
    //   screen: OtpScreen,
    //   navigationOptions: {
    //     headerVisible: false
    //   }
    // },
    // home: {
    //   screen: Main,
    //   navigationOptions: {
    //     headerVisible: false
    //   }
    // }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  },
  {
    initialRouteName: "home"
  }
);
export default createAppContainer(Navigation);
