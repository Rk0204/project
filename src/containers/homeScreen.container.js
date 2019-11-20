import HomeScreen from "../components/homeScreen.component";
import { getCurrentLocation } from "../action/asynAction";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    location: state.location
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentLocation: () => dispatch(getCurrentLocation())
  };
};

// export default HomeScreen;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
