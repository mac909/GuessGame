import React from "react";
import { View, Text, StyleSheet } from "react-native";

import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const GameOverScreen = ({ onPress, winningValue }) => {
	return (
		<View style={styles.container}>
			<View>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "bold",
						textAlign: "center",
						paddingBottom: 20,
					}}
				>
					I finally got it!!!
				</Text>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "bold",
						textAlign: "center",
					}}
				>
					Your number was {winningValue}!
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<PrimaryButton onPress={onPress}>Play Again</PrimaryButton>
			</View>
		</View>
	);
};

export default GameOverScreen;

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: "white",
		// flexShrink: 1,
		// flexDirection: "column",
		// flexDirection: "column",
		// justifyContent: "center",
		// marginTop: 125,
		margin: 20,
		padding: 20,
		borderRadius: 30,
		shadowColor: "black",
		shadowOffset: { width: 15, height: 8 },
		shadowRadius: 8,
		shadowOpacity: 0.99,
		elevation: 5,
		maxWidth: 400,
	},
	buttonContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-evenly",
		// paddingHorizontal: 15,
		paddingVertical: 10,
	},
});
