import React from "react";
import { Scene, Router, Stack, Drawer, Tabs } from "react-native-router-flux";
import { connect } from "react-redux";
import Login from "./containers/LoginContainer";
import HistoryComponent from "./containers/HistoryContainer";
import ListContainer from "./containers/ListContainer";
import DrawerComponent from "./components/Drawer";
import Settings from "./containers/SettingsContainer";
import Tab1 from "./containers/Tab1";
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

          <Scene key="main" hideNavBar>
            <Drawer
              key="drawer"
              // drawerWidth={width * 0.65}
              hideNavBar
              contentComponent={DrawerComponent}
              initial
            >
              <Scene key="list" hideNavBar component={ListContainer} />
              <Scene
                hideNavBar
                key="history"
                component={HistoryComponent}
                swipeEnabled={false}
              />
              <Scene key="settings" hideNavBar component={Settings} />
              <Scene key="tab1" hideNavBar component={Tab1} />
            </Drawer>
          </Scene>
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
