import StatsScreen from "../components/statsScreen.component";
import { connect } from "react-redux";
import { getCurrentLocation, saveHistoryData } from "../action/asynAction";

const mapStateToProps = state => {
  return {
    location: state.location,
    speedCount: state.speed.speedCount,
    topSpeed: state.speed.topSpeed,
    savedData: state.speed.savedData,
    history: state.speed.history,
    token : state.auth.token,
    stopData: state.speed.stopData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentLocation: () => dispatch(getCurrentLocation()),
    saveHistoryData: (data) =>dispatch(saveHistoryData(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatsScreen);
