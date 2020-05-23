import { Dimensions, StyleSheet } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
const styles4 = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#1E96C8",
		padding: 8,
	},
	inputBox: {
		width: "85%",
		left: screenWidth * 6,
		fontSize: 16,
		borderColor: "#d3d3d3",
		borderBottomWidth: 1,
		textAlign: "center",
		color: "white",
	},
});
export default styles4
