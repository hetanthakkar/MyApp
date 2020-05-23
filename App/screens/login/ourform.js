import React, { Component } from "react";
import { Text, View, TextInput, Dimensions, Alert } from "react-native";
import { reduxForm, Field } from "redux-form";
import styles from "./style/styles";
import firebase from "firebase";
import { Button } from "../components/button/index";

var screenHeight = Math.round(Dimensions.get("window").height) / 100;
var mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const validate = (values) => {
  const errors = {};
  if (!mail.test(values.email)) {
    errors.email = "Enter valid email address";
  }
  if (!values.email) {
    errors.email = "This field cant be empty";
  }
  if (!values.password) {
    errors.password = "Enter the Password";
  }
  return errors;
};

const myFields = ({
  label,
  meta: { error, touched },
  input: { onChange, ...restInput },
}) => {
  return (
    <View>
      <TextInput
        style={styles.inputBox}
        onChangeText={onChange}
        {...restInput}
        placeholder={label}
      />
      {error && touched && (
        <Text
          style={{
            color: "yellow",
            textAlign: "center",
            paddingTop: screenHeight,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};
const myFormCom = (props) => {
  const { handleSubmit, navigation } = props;

  const forget = () => navigation.navigate("ForgetPassword");

  const handleSignup = () => navigation.navigate("Signup");

  const navi = (email, password) => {
    var id, ids;
    firebase
      .database()
      .ref("id/number")
      .on("value", (snapshot) => {
        id = snapshot.val();
      });

    for (let t = 1; t < id; t++) {
      firebase
        .database()
        .ref("user/" + t)
        .on("value", (snapshot) => {
          var fetch_email = snapshot.val().email;
          console.log("email in login is" + email);
          console.log("email in fetch is" + fetch_email);

          if (fetch_email == email) {
            ids = t;
            console.log("id is" + ids);
          }
        });
    }
    navigation.navigate("Main", { email: email, id: ids });
  };
  const showError = () => {
    Alert.alert(
      "Login Error",
      "Incorrect username/password",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  const myBtn = (values) => {
    console.log(values.email);
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(navi(values.email, values.password))
      .catch((error) => showError());
  };

  return (
    <View>
      <Field name="email" component={myFields} label="Email" />

      <Field name="password" component={myFields} label="Password" />
      <Text>{"\n"}</Text>
      <Button
        style={{ alignSelf: "center" }}
        onPress={forget}
        text="Forgot Password"
        textStyle={styles.forgot}
      ></Button>

      <Text></Text>
      <Button
        style={styles.button}
        onPress={handleSubmit(myBtn)}
        text="LOGIN"
        textStyle={styles.loginText}
      ></Button>

      <Text></Text>
      <Button
        style={{ alignSelf: "center" }}
        onPress={handleSignup}
        text="SignUp"
        textStyle={styles.signupText}
      ></Button>
    </View>
  );
};
const ourform = reduxForm({
  form: "something",
  validate,
})(myFormCom);

export default ourform;
