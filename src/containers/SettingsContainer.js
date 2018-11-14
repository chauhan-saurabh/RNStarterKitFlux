import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Header from "../components/Header";

class Settings extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View style={{ flex: 0.1, backgroundColor: "red" }}>
          <Header heading={"History"} />
        </View>
        <View style={{ flex: 0.8 }}>
          <Text>Settings Container</Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(Settings);
