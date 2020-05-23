import React, { Component } from "react";
import { View, BackHandler } from "react-native";
import store from "./store/index";
import { Provider } from "react-redux";
import Myform from "./skillForm/index";
export default class Todo extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Myform navigation={this.props.navigation} />
        </View>
      </Provider>
    );
  }
}
