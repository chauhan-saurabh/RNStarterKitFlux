import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import Header from "../components/Header";
import { userList } from "../actions/ListAction";

class Tab1 extends Component {
  componentWillMount() {
    this.props.userList();
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.listData}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flex: 0.8,
                  flexDirection: "row",
                  borderWidth: 1,
                  borderColor: "#dadada"
                }}
                key={index}
              >
                <View style={{ flex: 0.7 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.item}>ID : </Text>
                    <Text style={styles.item}>{item.id}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.item}>First Name : </Text>
                    <Text style={styles.item}>{item.first_name}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.item}>Last Name : </Text>
                    <Text style={styles.item}>{item.last_name}</Text>
                  </View>
                </View>
                <View style={{ flex: 0.3, justifyContent: "center" }}>
                  <Image
                    source={{ uri: item.avatar }}
                    style={{ height: 100, width: 100 }}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
function mapStateToProps(state) {
  return {
    listData: state.listReducer.listData
  };
}

export default connect(
  mapStateToProps,
  { userList }
)(Tab1);
