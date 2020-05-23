import { Dimensions, StyleSheet } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
const styles4 = StyleSheet.create({
  dp: {
    height: screenHeight * 14,
    borderRadius: 100,
    width: screenWidth * 27,
    marginTop: screenHeight * 5,
    alignSelf: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: screenHeight,
    alignSelf: "center",
  },
  tagLine: {
    alignSelf: "center",
    fontSize: 16,
    paddingTop: screenHeight,
  },
  location: {
    color: "#3498db",
    fontSize: 21,
    fontWeight: "bold",
    fontFamily: "sans-serif-light",
    marginTop: screenHeight * 2,
    marginLeft: screenWidth * 10,
  },
  local: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "sans-serif-medium",
    marginTop: screenHeight * 2,
  },
  about: {
    marginLeft: screenWidth * 10,
    marginTop: screenHeight * 1.5,
    marginRight: screenWidth * 8,
    color: "#3498db",
    fontSize: 21,
  },
  description: {
    fontSize: 15,
    color: "black",
    marginTop: screenHeight * 1.5,
    marginRight: screenWidth * 50,
    fontFamily: "sans-serif-medium",
  },
  rate: {
    textAlign: "center",
    fontSize: 25,
    marginTop: screenHeight * 5,
    color: "green",
  },
  rating: {
    textAlign: "center",
    fontSize: 25,
    marginTop: screenHeight * 5,
  },
  doddle: {
    height: screenHeight * 30,
    borderRadius: 10,
    width: screenWidth * 90,
    marginTop: screenHeight * 5,
    marginLeft: screenWidth * 2,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#3498db",
    alignSelf: "center",
    marginTop: screenHeight * 4,
    marginBottom: screenHeight * 4,
    height: screenHeight * 5,
    width: screenWidth * 40,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    textAlign: "center",
  },
});

export default styles4;
