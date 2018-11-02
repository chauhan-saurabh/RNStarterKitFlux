import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { TextInputLayout } from "rn-textinputlayout";
import { login } from "../actions/AuthAction";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const { height, width } = Dimensions.get("window");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { fname: "", lname: "" };
  }

  onLogin = () => {
    this.props.login(this.state);
    Actions.dashboard();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center"
        }}
      >
        <Text style={{ textAlign: "center" }}>Login Container</Text>
        <TextInputLayout
          style={styles.inputLayout}
          checkValid={t => EMAIL_REGEX.test(t)}
        >
          <TextInput
            style={styles.textInput}
            placeholder={"Email"}
            value={this.state.fname}
            onChangeText={fname => this.setState({ fname })}
          />
        </TextInputLayout>
        <TextInputLayout style={styles.inputLayout}>
          <TextInput
            style={styles.textInput}
            placeholder={"Password"}
            secureTextEntry={true}
            value={this.state.lname}
            onChangeText={lname => this.setState({ lname })}
          />
        </TextInputLayout>
        <Button
          onPress={() => this.onLogin()}
          title="Route to Dashboard"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100
  },
  textInput: {
    fontSize: width * 0.03,
    height: height * 0.1
  },
  inputLayout: {
    marginTop: 10,
    marginHorizontal: 10
  }
});

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  { login }
)(Login);
