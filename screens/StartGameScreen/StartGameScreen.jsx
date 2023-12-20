import React from "react";
import { useState } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	Dimensions,
	KeyboardAvoidingView,
} from "react-native";

import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const StartGameScreen = ({ onPress }) => {
	const [enteredValue, setEnteredValue] = useState("");

	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ""));
	};

	const resetInputHandler = () => {
		setEnteredValue("");
	};

	const confirmInputHandler = (enteredValue) => {
		if (enteredValue == "") {
			alert("Please enter a number between 0 and 99");
		} else if (enteredValue < 0 || enteredValue > 99) {
			alert("Please enter a number between 0 and 99");
		} else {
			onPress(enteredValue);
		}
	};

	return (
		<KeyboardAvoidingView behavior="padding">
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.container}>
					<View style={{ alignItems: "center" }}>
						<Text style={{ fontSize: 20, fontWeight: "bold" }}>
							Select a number between:
						</Text>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.textInput}
							keyboardType="number-pad"
							placeholder="0-99"
							placeholderTextColor="gray"
							onChange={(event) =>
								numberInputHandler(event.nativeEvent.text)
							}
							value={enteredValue}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton
							onPress={() => confirmInputHandler(enteredValue)}
						>
							Start Game
						</PrimaryButton>
						<PrimaryButton onPress={resetInputHandler}>
							Reset
						</PrimaryButton>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default StartGameScreen;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const orientation = windowWidth > windowHeight ? "landscape" : "portrait";

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: "white",
		// alignItems: "center",
		// justifyContent: "center",
		// marginTop: 125,
		// textAlign: "center",
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
	inputContainer: {
		marginTop: 20,
		width: "100%",
		alignItems: "center",
	},
	textInput: {
		paddingHorizontal: 10,
		// paddingVertical: 5,
		borderBottomColor: "gray",
		borderBottomWidth: 2,
		// width: "100%",
		height: 50,
		textAlign: "center",
		color: "black",
		fontSize: 20,
		fontWeight: "bold",
	},
});
