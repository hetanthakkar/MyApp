import React from "react";
import { BackHandler } from "react-native";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import firebase from "firebase";
import styles from "./styles/styles";
import firebaseConfig from "../helper/firbaseconfig/firebase";

import { Button } from "/Users/codemaxx/Desktop/auth/screens/components/button/index";
import { TexttInput } from "/Users/codemaxx/Desktop/auth/screens/components/textinput/index";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default class ForgetPassword extends React.Component {
  handleBackButtonForget = () => {
    this.props.navigation.navigate("Login");
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonForget
    );
    this.setState({ fname: "", flag: 1 });

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonForget
    );
  }
  state = {
    email: "",
    error: "",
  };

  handleForget = async () => {
    var auth = firebase.auth();
    var emailAddress = this.state.email;
    var flag = "";
    await auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        console.log("email sent");
        flag = 0;
        console.log(flag);
      })
      .catch(function (error) {
        console.log(error);
        flag = 1;
        console.log(flag);
      });
    if (flag == 1) this.setState({ error: "Email does not exist in database" });
    if (flag == 0) this.setState({ error: "Email Sent! Check your inbox" });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
        </Text>
        <Text style={styles.forgetText}>{this.state.error}</Text>
        <TexttInput
          style={styles.inputBox}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder="Email"
          placeholderTextColor="white"
          autoCapitalize="none"
        />
        <Text>{"\n"}</Text>
        <Button
          onPress={this.handleForget}
          text="Forgot Password"
          textStyle={styles.signupText}
        ></Button>
      </View>
    );
  }
}
