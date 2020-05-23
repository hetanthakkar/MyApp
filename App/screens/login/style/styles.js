import { Dimensions, StyleSheet } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  forgot: {
    color: "white",
    fontSize: 14,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  signupText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  inputBox: {
    width: "95%",
    margin: 10,
    padding: 15,
    fontSize: 18,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "#F85C5E",
    borderColor: "#F6820D",
    borderRadius: 25,
    width: screenWidth * 70,
    height: screenHeight * 8,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonSignup: {
    fontSize: 12,
  },
});
export default styles;
