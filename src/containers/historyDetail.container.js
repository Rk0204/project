import HistoryDetailScreen from "../components/historydetail.component";
import { connect } from "react-redux";

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
)(HistoryDetailScreen);
