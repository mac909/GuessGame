import React from "react";
import { useState, useEffect } from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";

import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const GamePlayScreen = ({ enteredValue, onPress, setWinningValue }) => {
	const [opponentGuess, setOpponentGuess] = useState("");
	const [opponentGuesses, setOpponentGuesses] = useState([]);
	const [lowerBound, setLowerBound] = useState(1);
	const [upperBound, setUpperBound] = useState(100);

	const opponentGuessHandler = () => {
		let guess;
		if (upperBound === lowerBound) {
			guess = upperBound;
			setOpponentGuess(guess);
			checkGuess(guess);
		} else {
			do {
				if (opponentGuesses.length === 0) {
					guess = Math.floor(Math.random() * 100) + 1;
				} else {
					const lastGuess =
						opponentGuesses[opponentGuesses.length - 1];
					if (lastGuess < enteredValue) {
						setLowerBound(lastGuess + 1);
						if (upperBound === lastGuess + 1) {
							guess = upperBound;
						} else {
							guess =
								Math.floor(
									Math.random() * (upperBound - lastGuess)
								) + lastGuess;
						}
					} else {
						setUpperBound(lastGuess - 1);
						if (lowerBound === lastGuess - 1) {
							guess = lowerBound;
						} else
							guess =
								Math.floor(
									Math.random() * (lastGuess - lowerBound)
								) + lowerBound;
					}
				}
			} while (opponentGuesses.includes(guess));

			setOpponentGuess(guess);
			checkGuess(guess);
		}
	};

	const checkGuess = (guess) => {
		if (parseInt(guess) === parseInt(enteredValue)) {
			onPress("gameover");
			setWinningValue(guess);
		}
	};

	const opponentGuessesHandler = () => {
		setOpponentGuesses([...opponentGuesses, opponentGuess]);
	};

	const higherButtonHandler = () => {
		if (opponentGuess > enteredValue) {
			alert("Are you sure it's higher?");
		} else {
			opponentGuessesHandler();
		}
	};

	const lowerButtonHandler = () => {
		if (opponentGuess < enteredValue) {
			alert("Are you sure it's lower?");
		} else {
			opponentGuessesHandler();
		}
	};

	useEffect(() => {
		opponentGuessHandler();
	}, [opponentGuesses]);

	return (
		<View style={styles.mainContainer}>
			<View style={styles.container}>
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>
					Opponent Guess:
				</Text>
				<Text style={{ fontSize: 20 }}>{opponentGuess}</Text>
			</View>
			<View style={styles.container}>
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>
					Your Number:
				</Text>
				<Text style={{ fontSize: 20 }}>{enteredValue}</Text>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={higherButtonHandler}>
						Higher
					</PrimaryButton>
					<PrimaryButton onPress={lowerButtonHandler}>
						Lower
					</PrimaryButton>
				</View>
			</View>
			<View style={styles.scrollContainer}>
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>
					Previous Guesses:
				</Text>
				<ScrollView style={{ width: "100%" }}>
					<View>
						{[...opponentGuesses].reverse().map((guess, index) => (
							<Text
								key={index}
								style={{
									fontSize: 30,
									margin: 5,
									padding: 5,
									textAlign: "center",
								}}
							>
								{guess}
							</Text>
						))}
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default GamePlayScreen;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		marginTop: 50,
		maxWidth: 400,
		// alignItems: "center",
		// justifyContent: "center",
	},
	container: {
		// flex: 1,
		backgroundColor: "white",
		alignItems: "center",
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
	scrollContainer: {
		flex: 2,
		backgroundColor: "white",
		alignItems: "center",
		// justifyContent: "center",
		// marginTop: 125,
		// width: "100%",
		margin: 20,
		padding: 20,
		borderRadius: 30,
		shadowColor: "black",
		shadowOffset: { width: 15, height: 8 },
		shadowRadius: 8,
		shadowOpacity: 0.99,
		elevation: 5,
		// maxWidth: 400,
	},
	buttonContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-evenly",
		// paddingHorizontal: 15,
		// paddingVertical: 10,
	},
});
