import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen/StartGameScreen";
import GamePlayScreen from "./screens/GamePlayScreen/GamePlayScreen";
import GameOverScreen from "./screens/GameOverScreen/GameOverScreen";

export default function App() {
	const [enteredValue, setEnteredValue] = useState("");
	const [winningValue, setWinningValue] = useState("");

	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText);
	};

	const resetInputHandler = () => {
		setEnteredValue("");
	};

	const setWinningValueHandler = (winningValue) => {
		setWinningValue(winningValue);
	};

	let activeScreen = <StartGameScreen onPress={numberInputHandler} />;

	if (enteredValue != "") {
		activeScreen = (
			<GamePlayScreen
				enteredValue={enteredValue}
				onPress={numberInputHandler}
				setWinningValue={setWinningValueHandler}
			/>
		);
	}

	if (enteredValue === "reset") {
		setEnteredValue("");
		setWinningValue("");
	}

	if (enteredValue === "gameover") {
		activeScreen = (
			<GameOverScreen
				onPress={resetInputHandler}
				winningValue={winningValue}
			/>
		);
	}

	return (
		<LinearGradient
			style={styles.container}
			// colors={["#4c669f", "#3b5998", "#192f6a"]}
			// colors={["#ff0000", "#ff7f00", "#ffff00"]}
			colors={["#00ffff", "#0000ff", "#800080"]}
		>
			<ImageBackground
				source={require("./assets/images/cards.jpg")}
				resizeMode="cover"
				imageStyle={styles.backgroundImage}
				style={styles.backgroundContainer}
			>
				{activeScreen}
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		// alignItems: "center",
		// justifyContent: "start",
	},
	backgroundContainer: {
		// flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	backgroundImage: {
		opacity: 0.3,
	},
});
