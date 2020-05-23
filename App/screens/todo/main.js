import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Layout from "./layout/layout";
import firebase from "firebase";
import firebaseConfig from "../helper/firbaseconfig/firebase";
export const REMOVE = "REMOVE_ITEM";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const DEFAULT_STATE = {
  todos: [],
  completed: 0,
};
const reducer = (state = DEFAULT_STATE, action) => {
  firebase
    .database()
    .ref("id/number")
    .on("value", (snapshot) => {
      id = snapshot.val() - 1;
    });

  const { type, payload } = action;
  switch (type) {
    case "ADD_ITEM":
      console.log("added");
      console.log(state.todos);
      var a = { ...state, todos: [...state.todos, payload.todo] };
      firebase
        .database()
        .ref("user/" + id - 1)
        .update({
          todo: a,
        });

      return a;
    case "REMOVE_ITEM":
      var b = {
        ...state,
        todos: state.todos.filter((item) => item !== payload.todo),
      };
      firebase
        .database()
        .ref("user/" + id - 1)
        .update({
          todo: b,
        });
      return b;
    case "CHANGE_COMPLETE":
      console.log(state.completed);
      return { ...state, completed: state.completed + 1 };
    default:
      return state;
  }
};
const store = createStore(reducer);
export default class Todo extends Component {
  ids = this.props.navigation.getParam("id");
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
