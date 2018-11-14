import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { login } from "../actions/AuthAction";
const { height, width } = Dimensions.get("window");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "peter@klaven",
      password: "cityslicka"
    };
  }

  handleSubmit() {
    this.props.login();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.35 }} />
        <View style={{ flex: 0.05 }}>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 8,
              fontSize: width * 0.045,
              fontWeight: "bold",
              color: "white"
            }}
          >
            Email :
          </Text>
        </View>

        <View
          style={{
            flex: 0.05,
            backgroundColor: "white",
            marginHorizontal: width * 0.03,
            borderRadius: width * 0.02
          }}
        >
          <TextInput
            style={{
              margin: 10,
              borderBottomColor: "#dadada",
              fontSize: width * 0.04
            }}
            value={this.state.email}
            onChangeText={email => {
              this.setState({ email });
            }}
            placeholder="email"
          />
        </View>
        <View style={{ flex: 0.05 }}>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 8,
              fontSize: width * 0.045,
              fontWeight: "bold",
              color: "white"
            }}
          >
            Password :
          </Text>
        </View>
        <View
          style={{
            flex: 0.05,
            backgroundColor: "white",
            marginHorizontal: width * 0.03,
            borderRadius: width * 0.02
          }}
        >
          <TextInput
            secureTextEntry={true}
            style={{
              margin: 10,
              borderBottomColor: "#dadada",
              fontSize: width * 0.04
            }}
            value={this.state.password}
            onChangeText={password => {
              this.setState({ password });
            }}
            placeholder="password"
          />
        </View>
        <View style={{ flex: 0.1 }}>
          <View style={{ flex: 0.15 }} />
          <View
            style={{
              flex: 0.75,
              backgroundColor: "#0080ff",
              width: width * 0.5,
              justifyContent: "center",
              alignSelf: "center",
              borderRadius: width * 0.02
            }}
          >
            {this.props.loginReducer.loginLoader ? (
              <TouchableOpacity style={{ margin: 10, alignItems: "center" }}>
                <ActivityIndicator />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{ margin: 10, alignItems: "center" }}
                onPress={() => {
                  this.handleSubmit();
                }}
              >
                <Text
                  style={{
                    fontSize: width * 0.045,
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "white"
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={{ flex: 0.35 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#bfb6ad"
  }
});

function mapUser(state) {
  return { loginReducer: state.appState };
}

export default connect(
  mapUser,
  { login }
)(Login);
