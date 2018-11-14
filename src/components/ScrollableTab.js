import React from "react";
import { Text, View } from "react-native";

import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view";

import Tab1 from "../containers/Tab1";
export default () => {
  return (
    <ScrollableTabView
      style={{ backgroundColor: "white" }}
      tabBarBackgroundColor="#333435"
      tabBarActiveTextColor="#fff"
      tabBarInactiveTextColor="#BDC3C7"
      tabBarTextStyle={{ fontSize: 20 }}
      tabBarPosition={"bottom"}
      tabBarUnderlineStyle={{ backgroundColor: "#3FC380" }}
      renderTabBar={() => <ScrollableTabBar />}
    >
      <Tab1 tabLabel="Tab 1" label="Page #1" />
      <Tab1 tabLabel="Tab 2" label="Page #2" />
      <Tab1 tabLabel="Tab 3" label="Page #3" />
    </ScrollableTabView>
  );
};
