import { StyleSheet, Dimensions } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;

const styles1 = StyleSheet.create({
  pickerText: {
    width: screenWidth * 100,
    color: "white",
  },
  signup: {
    marginLeft: screenWidth * 4,
    fontSize: 30,
    marginTop: screenHeight * 10,
    marginBottom: screenHeight * 4,
    color: "white",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    paddingTop: screenHeight,
  },
  customButton: {
    top: screenHeight * 30,
    alignSelf: "center",
    backgroundColor: "#F57C00",
    borderRadius: 14,
    width: screenWidth * 40,
    height: screenHeight * 8,
  },
  about: {
    color: "white",
    textAlign: "center",
    lineHeight: 2,
    fontSize: 17,
    marginTop: screenHeight * 2,
    marginLeft: screenWidth * 5,
    width: screenWidth * 55,
    height: screenHeight * 10,
    borderColor: "white",
    borderRadius: 7,
    borderWidth: 2,
  },
  textStyle: {
    color: "#EAF0F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    textAlignVertical: "center",
  },
  field: {
    color: "white",
    fontSize: 15,
    marginTop: screenHeight * 2,
    marginLeft: screenWidth * 5,
    padding: 10,
    width: screenWidth * 50,
    borderColor: "white",
    borderRadius: 12,
    borderWidth: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignSelf: "flex-start",
    marginLeft: screenWidth * 2,
    marginTop: screenHeight * 8,
    top: screenHeight * -5,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4834DF",
  },
  myText: {
    color: "white",
    borderWidth: 1.2,
    borderColor: "#d6d0cf",
    margin: 10,
    padding: 10,
    width: "95%",
    borderRadius: 12,
  },
});
export default styles1;
