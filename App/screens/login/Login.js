import React from "react";
import { BackHandler, View, DeviceEventEmitter } from "react-native";
import firebase from "firebase";
import { Provider } from "react-redux";
import Myform from "./ourform";
import store from "./store";
import styles from "./style/styles";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default class Login extends React.Component {
  componentDidMount() {
    this.setState({ fname: "", flag: 1 });

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  state = {
    email: "",
    password: "",
  };
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Myform navigation={this.props.navigation} />
        </Provider>
      </View>
    );
  }
}
