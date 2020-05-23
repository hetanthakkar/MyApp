import React from "react";
import {
  Text,
  View,
  TextInput,
  Alert,
  Dimensions,
  BackHandler,
} from "react-native";
import { reduxForm, Field } from "redux-form";
import firebase from "firebase";
import { Button } from "../components/button/index";
import { Picker } from "react-native-picker-dropdown";
import styles from "../styles1/styles1";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
const validate = (values) => {
  var errors = {};

  if (!values.about) {
    errors.about = "This field is mandatory to fill";
  }

  if (!values.other) {
    errors.other = "This field is mandatory to fill";
  }

  if (values.other != undefined && values.other.length > 10) {
    errors.other = "Maximum character allowed is 10";
  }

  if (values.about != undefined && values.about.length > 20) {
    errors.other = "Maximum character allowed is 20";
  }
  return errors;
};
const myFields = ({
  label,
  meta: { error, touched },
  input: { onChange, ...restInput },
}) => {
  return (
    <View style={{ backgroundColor: "#4834DF" }}>
      <TextInput
        onChangeText={onChange}
        {...restInput}
        placeholder={label}
        style={styles.field}
      />
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

class myFormCom extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  handleBackButton = () => {
    this.props.navigation.navigate("Select", {
      id: this.props.navigation.getParam("id"),
      password: this.props.navigation.getParam("password"),
      city: this.props.navigation.getParam("city"),
      name: this.props.navigation.getParam("name"),
      state: this.props.navigation.getParam("state"),
      gender: this.props.navigation.getParam("gender"),
      email: this.props.navigation.getParam("email"),
      skill: this.props.navigation.getParam("skill"),
      specifics: this.props.navigation.getParam("specifics"),
      otherSkill: this.props.navigation.getParam("otherSkill"),
    });
    return true;
  };

  constructor(props) {
    super(props);
    this.state = {
      skill: "gawar",
      specifics: "no specific",
      about: "boring",
    };
  }
  submit = (values) => {
    if (this.state.about == "boring") {
      Alert.alert(
        "Submit Error",
        "About Can't Be Empty",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      this.props.navigation.navigate("Pic", {
        about: this.state.about,
        id: this.props.navigation.getParam("id"),
        password: this.props.navigation.getParam("password"),
        city: this.props.navigation.getParam("city"),
        name: this.props.navigation.getParam("name"),
        email: this.props.navigation.getParam("email"),
        state: this.props.navigation.getParam("state"),
        gender: this.props.navigation.getParam("gender"),
        skill: this.state.skill,
        specifics: this.state.specifics,
        otherSkill: values.other,
      });
    }
  };
  getCities = () => {
    if (this.state.skill === "Computer Language")
      return [
        "Enter Language",
        "C",
        "C++",
        "Java",
        "JavaScript",
        "Python",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);
    if (this.state.skill === "New Language")
      return [
        "Enter Language",
        "English",
        "Spanish",
        "French",
        "Japanese",
        "Italian",
        "German",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);

    if (this.state.skill === "Musical Instrument")
      return [
        "Enter Instrument",
        "Piano/Keyboard",
        "Drum",
        "FLute",
        "Guitar",
        "Sitar",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);

    if (this.state.skill === "Web Development")
      return [
        "Enter Technology",
        "Djamgo",
        "Flask",
        "Php",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);

    if (this.state.skill === "")
      return [" "].map((specifics) => (
        <Picker.Item label={specifics} value={specifics} />
      ));
  };
  updateSkill = (skill) => {
    this.setState({ skill });
  };
  updateAbout = (value) => {
    this.setState({ about: value });
  };
  updateSpecifics = (value) => {
    console.log("enters");
    this.setState({ specifics: value });
  };
  updatecity = (value) => {
    this.setState({ skil: value });
  };
  handleValueChange = (value) => {
    this.setState({ state: value });
  };
  renderOther = () => {
    if (this.state.skill == "other") {
      return (
        <View>
          <Field
            name="other"
            component={myFields}
            label="Mention Your Skill "
          />
        </View>
      );
    }
  };
  render() {
    return (
      <View style={{ backgroundColor: "#4834DF" }}>
        <View style={styles.container}>
          <Text style={styles.signup}>
            Select The Area Of Your Expertise{this.state.about}
          </Text>
        </View>
        <View>
          <Picker
            selectedValue={this.state.skill}
            onValueChange={this.updateSkill}
            textStyle={{ width: screenWidth * 100, color: "white" }}
            mode="dialog"
          >
            <Picker.Item label="Select Skils: " value="" />
            <Picker.Item label="Photography" value="Photography" />
            <Picker.Item label="Videography" value="Videography" />
            <Picker.Item label="Photoshop" value="Photoshop" />
            <Picker.Item label="Animation" value="Animation" />
            <Picker.Item label="Digital Marketing" value="Digital Marketing" />
            <Picker.Item label="Buisness" value="Buisness" />
            <Picker.Item
              label="Musical Instrument"
              value="Musical Instrument"
            />
            <Picker.Item label="Cooking" value="Cooking" />
            <Picker.Item label="Singing" value="Singing" />
            <Picker.Item label="Drawing" value="Drawing" />
            <Picker.Item label="New Language" value="New Language" />
            <Picker.Item label="Computer Language" value="Computer Language" />
            <Picker.Item label="Cyber Security" value="Cyber Security" />
            <Picker.Item
              label="Artificial Intelligence"
              value="Artificial Intelligence"
            />
            <Picker.Item label="Machine Learning" value="Machine Learning" />
            <Picker.Item label="School Subjects" value="School Subjects" />
            <Picker.Item label="Psychology" value="Psychology" />
            <Picker.Item label=" Web Development" value="Web Development" />
            <Picker.Item
              label="Mobile Development"
              value="Mobile Development"
            />
            <Picker.Item label="Game Development" value="Game Development" />
            <Picker.Item label="Graphic Designing " value="Graphic Designing" />
            <Picker.Item
              label="Interior Designing "
              value="Interior Designing"
            />
            <Picker.Item label="Other" value="other" />
          </Picker>
          <Picker
            onValueChange={(itemValue) => this.updateSpecifics(itemValue)}
            selectedValue={this.state.specifics}
            textStyle={{ width: screenWidth * 100, color: "white" }}
            mode="dialog"
          >
            {this.getCities()}
          </Picker>
          {this.renderOther()}
          <TextInput
            onChangeText={this.updateAbout}
            placeholder="Enter About Yourself"
            style={styles.about}
            maxLength={20}
          />
          <Button
            style={styles.customButton}
            onPress={this.props.handleSubmit(this.submit)}
            text="Submit"
            textStyle={styles.textStyle}
          ></Button>

          <Text style={{ marginTop: screenHeight * 50 }}></Text>
        </View>
      </View>
    );
  }
}
const ourform = reduxForm({
  form: "something",
  destroyOnUnmount: false,
  validate,
})(myFormCom);

export default ourform;
