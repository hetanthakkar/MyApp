import { StyleSheet, Dimensions } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;

const styles1 = StyleSheet.create({
	pickerText: {
		width: screenWidth * 100,
		color: "white",
	},
	container: {
		flex: 1,
		backgroundColor: "#003f5c",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		left: screenWidth * -22,
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#003f5c",
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
