import AuthScreen from "../components/authScreen.component";
import { connect } from "react-redux";
import {loginUser,registerUser} from "../action/asynAction";

const mapStateToProps = state => {
  return {
    token: state.auth.token,
        stored: state.auth.stored,
        logValid: state.auth.logValid,
        registered: state.auth.registered

  };
};

const mapDispatchToProps = dispatch => {
  return {
    login : (data,callCB) => dispatch(loginUser(data, callCB)),
    register: (data, callCB) => dispatch(registerUser(data, callCB))

  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AuthScreen);
