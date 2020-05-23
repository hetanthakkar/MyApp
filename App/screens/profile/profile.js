import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
import { Font } from "expo";
const screenWidth = Math.round(Dimensions.get("window").width) / 100;
const screenHeight = Math.round(Dimensions.get("window").height) / 100;
var students = ["hetan", "thakkar", "sarthak", "vraj", "kavin"];
export default class App extends React.Component {
  componentDidMount() {
    console.log(
      "main" +
        this.props.navigation.getParam("id") +
        this.props.navigation.getParam("password") +
        this.props.navigation.getParam("city") +
        this.props.navigation.getParam("name") +
        this.props.navigation.getParam("email") +
        this.props.navigation.getParam("state") +
        this.props.navigation.getParam("gender")
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={{
            height: screenHeight * 14,
            borderRadius: 100,
            width: screenWidth * 27,
            marginTop: screenHeight * 5,
            alignSelf: "center",
          }}
          source={{
            uri:
              "https://scontent-bom1-2.xx.fbcdn.net/v/t1.0-9/p960x960/67810934_221679105462060_1204215830871539712_o.jpg?_nc_cat=100&_nc_sid=dd9801&_nc_ohc=Vzday1GrsdsAX_Rff9T&_nc_ht=scontent-bom1-2.xx&_nc_tp=6&oh=2746a13edf40d8da42115a22afccfc0b&oe=5EE7F0EB",
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            paddingTop: screenHeight,
            alignSelf: "center",
          }}
        >
          Hetan Thakkar
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 16,
            paddingTop: screenHeight,
          }}
        >
          An Unsure Programmer
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: "#3498db",
              fontSize: 21,
              fontWeight: "bold",
              //textAlign: "center",
              fontFamily: "sans-serif-light",
              marginTop: screenHeight * 2,
              marginLeft: screenWidth * 10,
            }}
          >
            Location:
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 20,
              textAlign: "center",
              fontFamily: "sans-serif-medium",
              marginTop: screenHeight * 2,
            }}
          >
            {" "}
            Bhavnagar,Gujarat
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: screenWidth * 10,
              marginTop: screenHeight * 1.5,
              marginRight: screenWidth * 8,
              color: "#3498db",
              fontSize: 21,
            }}
          >
            About :
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "black",
              marginTop: screenHeight * 1.5,
              marginRight: screenWidth * 50,
              fontFamily: "sans-serif-medium",
            }}
          >
            I am a softwarer engineer having 5 years of experience in react
            native studying in gmit college.I have great teaching skills and you
            wont be dissapointed
          </Text>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
                marginTop: screenHeight * 5,
                color: "green",
              }}
            >
              Rating:
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
                marginTop: screenHeight * 5,
              }}
            >
              {" "}
              4/5
            </Text>
          </View>
        </View>
        <Image
          style={{
            height: screenHeight * 30,
            borderRadius: 10,
            width: screenWidth * 90,
            marginTop: screenHeight * 5,
            marginLeft: screenWidth * 2,
            alignSelf: "center",
          }}
          source={{
            uri:
              "https://static.vecteezy.com/system/resources/previews/000/457/353/non_2x/vector-programming-flat-line-design-black-and-white-doodle-style-design-in-blue-banners-and-illustrations-of-business-and-technology-themes.jpg",
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "#3498db",
            alignSelf: "center",
            marginTop: screenHeight * 4,
            marginBottom: screenHeight * 4,
            height: screenHeight * 5,
            width: screenWidth * 40,
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Get In Touch
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    textAlign: "center",
  },
});
