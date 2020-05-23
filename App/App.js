import React from "react";
import Signup from "./screens/signup/Signup";
import Login from "./screens/login/Login";
import ForgetPassword from "./screens/forgetpassword/ForgetPassword";
import Main from "./screens/mainpage/main";
import Pic from "./screens/pic/Pic";
import Select from "./screens/select/index";
import Todo from "./screens/todo/Todo";
//import Skill from "./screens/skills/index";
import Profile from "./screens/profile/profile";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { YellowBox, TouchableWithoutFeedback, Keyboard } from "react-native";
import firebase from "firebase";
import firebaseConfig from "../auth/screens/helper/firbaseconfig/firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
import _ from "lodash";
YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      Signup: Signup,
      ForgetPassword: ForgetPassword,
      Main: Main,
      Pic: Pic,
      Select: Select,
      // Skill: Skill,
      Profile: Profile,
      Todo: Todo,
    },
    {
      initialRouteName: "Signup",
    }
  )
);
