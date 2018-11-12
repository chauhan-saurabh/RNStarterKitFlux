import React from "react";
import { Scene, Router, Stack } from "react-native-router-flux";
import { connect } from "react-redux";
import Login from "./containers/LoginContainer";
import Dashboard from "./containers/DashboardContainer";
import ListContainer from "./containers/ListContainer";

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  render() {
    return (
      <Router>
        <Scene key="root" swipeEnabled={false}>
          <Stack key="auth" swipeEnabled={false} hideNavBar>
            <Scene
              key="login"
              initial={this.state.loginInitial}
              hideNavBar
              component={Login}
              swipeEnabled={false}
            />
          </Stack>
          <Scene
            key="dashboard"
            component={Dashboard}
            swipeEnabled={false}
            title={"Dashboard"}
          />
          <Scene key="list" hideNavBar component={ListContainer} />
        </Scene>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(Routes);
