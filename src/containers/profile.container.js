import ProfileScreen from "../components/profile.component";
import { connect } from "react-redux";
import {logout} from "../action/asynAction";

const mapStateToProps = state => {
  return {
    user: state.auth.userData,
    token : state.auth.token,

  };
};

const mapDispatchToProps = dispatch => {
  return {

   logout: () => dispatch(logout())

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
