import * as React from "react";
import {
  Text,
  View,
  BackHandler,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import styles from "./styles/styles";
import { Picker } from "react-native-picker-dropdown";
import { TextInput } from "react-native-gesture-handler";
import firebase from "firebase";

var screenWidth = Math.round(Dimensions.get("window").width) / 100;

export default class App extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    console.log(
      "skill" +
        this.props.navigation.getParam("id") +
        this.props.navigation.getParam("password") +
        this.props.navigation.getParam("city") +
        this.props.navigation.getParam("name") +
        this.props.navigation.getParam("email") +
        this.props.navigation.getParam("state") +
        this.props.navigation.getParam("gender")
    );
    this.setState({ id: this.props.navigation.getParam("id") });
    this.setState({ password: this.props.navigation.getParam("password") });
    this.setState({ city: this.props.navigation.getParam("city") });
    this.setState({ name: this.props.navigation.getParam("name") });
    this.setState({ state: this.props.navigation.getParam("state") });
    this.setState({ gender: this.props.navigation.getParam("gender") });
    this.setState({ email: this.props.navigation.getParam("email") });
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  constructor(props) {
    super(props);
    this.state = {
      skill: "",
      specifics: "",
    };
  }
  handleBackButton = () => {
    this.props.navigation.navigate("Select");
    return true;
  };

  updateSpecifics = (value) => {
    console.log("enters");
    this.setState({ specifics: value });
  };

  updateSkill = (skill) => {
    this.setState({ skill });
    this.setState({ specifics: "" });
    console.log(this.state.skill);
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
  submit = () => {
    if (this.state.skill == "") {
      Alert.alert(
        "Submit Error",
        "Please Fill The Form Correctly",
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
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        state: this.state.state,
        city: this.state.city,
        skill: this.state.skill,
        gender: this.state.gender,
        specifics: this.state.specifics,
        otherSkill: this.state.otherSkill,
      });
    }
  };
  renderOther = () => {
    if (this.state.skill === "other skill") {
      return (
        <View>
          <Text style={styles.skills}>Enter the skill:</Text>
          <TextInput
            maxLength={20}
            onChangeText={(value) => {
              this.setState({ otherSkill: value });
            }}
            style={styles.textInput}
          ></TextInput>
        </View>
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Select The Area Of Your Expertise</Text>
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
          <Picker.Item label="Musical Instrument" value="Musical Instrument" />
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
          <Picker.Item label="Mobile Development" value="Mobile Development" />
          <Picker.Item label="Game Development" value="Game Development" />
          <Picker.Item label="Graphic Designing " value="Graphic Designing" />
          <Picker.Item label="Interior Designing " value="Interior Designing" />
          <Picker.Item label="Other" value="other skill" />
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
        <TouchableOpacity onPress={this.submit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
