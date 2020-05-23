import { Dimensions, StyleSheet } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
const styles3 = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#003f5c",
		alignItems: "center",
		justifyContent: "center",
	},
	signupText: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
	forgetText: {
		color: "yellow",
		fontSize: 22,
		textAlign: "center",
	},
	inputBox: {
		width: "85%",
		margin: 10,
		padding: 15,
		fontSize: 16,
		borderColor: "#d3d3d3",
		borderBottomWidth: 1,
		textAlign: "center",
		color: "white",
	},
});
export default styles3

