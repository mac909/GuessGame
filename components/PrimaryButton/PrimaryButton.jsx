import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
	return (
		<View style={styles.container}>
			<TouchableHighlight
				onPress={onPress}
				activeOpacity={0.1}
				underlayColor="darkgray"
				style={
					children == "Start Game" || children == "Higher"
						? styles.startButton
						: styles.resetButton
				}
			>
				<Text style={styles.text}>{children}</Text>
			</TouchableHighlight>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		margin: 20,
		padding: 20,
	},
	text: {
		color: "white",
		fontSize: 15,
		fontWeight: "bold",
	},
	startButton: {
		width: "auto",
		height: "auto",
		minWidth: 125,
		padding: 10,
		backgroundColor: "green",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		shadowColor: "black",
		shadowOffset: { width: 8, height: 8 },
		shadowRadius: 6,
		shadowOpacity: 0.99,
		elevation: 5,
	},
	resetButton: {
		width: "auto",
		height: "auto",
		minWidth: 125,
		padding: 10,
		backgroundColor: "red",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		shadowColor: "black",
		shadowOffset: { width: 8, height: 8 },
		shadowRadius: 4,
		shadowOpacity: 0.99,
		elevation: 5,
	},
});
