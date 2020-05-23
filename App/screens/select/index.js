import * as React from "react";
import { Text, View, TouchableOpacity, Image, BackHandler } from "react-native";
import styles from "./styles/styles";
export default class App extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);

    this.setState({ id: this.props.navigation.getParam("id") });
    this.setState({ password: this.props.navigation.getParam("password") });
    this.setState({ city: this.props.navigation.getParam("city") });
    this.setState({ name: this.props.navigation.getParam("name") });
    this.setState({ state: this.props.navigation.getParam("state") });
    this.setState({ gender: this.props.navigation.getParam("gender") });
    this.setState({ email: this.props.navigation.getParam("email") });

    console.log(
      "select" +
        this.props.navigation.getParam("id") +
        this.props.navigation.getParam("password") +
        this.props.navigation.getParam("city") +
        this.props.navigation.getParam("name") +
        this.props.navigation.getParam("email") +
        this.props.navigation.getParam("state") +
        this.props.navigation.getParam("gender")
    );
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  handleBackButton = () => {
    this.props.navigation.navigate("Signup");
    return true;
  };
  submit = (param) => {
    if (param == "teach")
      this.props.navigation.navigate("Todo", {
        id: this.state.id,
        password: this.state.password,
        email: this.state.email,
        city: this.state.city,
        state: this.state.state,
        gender: this.state.gender,
        name: this.state.name,
      });
    if (param == "learn")
      this.props.navigation.navigate("Pic", {
        id: this.state.id,
        password: this.state.password,
        city: this.state.city,
        state: this.state.state,
        gender: this.state.gender,
        email: this.state.email,
        name: this.state.name,
        skill: "gawar",
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>What Would You Like To Do?</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => this.submit("learn")}
            style={styles.learnButton}
          >
            <Text style={styles.learnText}>Learn</Text>
            <Image
              style={styles.learnIcon}
              source={{
                uri:
                  "https://i.pinimg.com/originals/57/1a/07/571a0765d183c18530d1e4c0ba730c9c.jpg",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.submit("teach")}
            style={styles.teachButton}
          >
            <Text style={styles.teachText}>Teach</Text>
            <Image
              style={styles.teachIcon}
              source={{
                uri:
                  "https://i.pinimg.com/originals/26/a0/f5/26a0f58e15a5cea985516ee1dc5bee2a.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
