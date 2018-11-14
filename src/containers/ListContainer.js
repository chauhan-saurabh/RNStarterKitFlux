import React from "react";
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
import Signup from "../components/Signup";
import { userList } from "../actions/ListAction";
import Header from "../components/Header";
import TabBar from "../components/ScrollableTab";
const { height, width } = Dimensions.get("window");

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.1 }}>
          <Header heading={"Dashboard"} />
        </View>
        <View style={{ flex: 0.05, backgroundColor: "white" }}>
          <Text
            style={{
              fontSize: width * 0.05,
              textAlign: "center",
              fontWeight: "bold"
            }}
          >
            Users
          </Text>
        </View>
        <View style={{ flex: 0.85 }}>
          <TabBar />
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

function mapUser(state) {
  return {
  };
}

export default connect(
  mapUser,
  {  }
)(ListContainer);
