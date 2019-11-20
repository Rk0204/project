import StartScreen from "../components/startScreen.component";
import { connect } from "react-redux";
import { getCurrentLocation } from "../action/asynAction";
import {gotSixtyCount, gotTopSpeed, saveData, saveStopLocation} from "../action/syncAction";

const mapStateToProps = state => {
  return {
    location: state.location,
    speedCount: state.speed.speedCount,
    duration: state.speed.duration,
    topSpeed: state.speed.topSpeed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentLocation: () => dispatch(getCurrentLocation()),
    gotSixtyCount:(data) =>dispatch(gotSixtyCount(data)),
    gotTopSpeed: (data) => dispatch(gotTopSpeed(data)),
    saveData:(data) => dispatch(saveData(data)),
    saveStopLocation:(data) =>dispatch(saveStopLocation(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen);
