import { useState, useEffect } from "react";
import Game from "./Game";

export default function ShowGame({ players, setPlayers }) {
    const wordsArr = ["apple", "banana", "orange", "pear", "grape"];
    const [word, setWord] = useState("");
    const [timer, setTimer] = useState(0);

    // useEffect to log the word state whenever it changes
    useEffect(() => {
        console.log("Word State Updated:", word);
    }, [word]);

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * wordsArr.length);
        const selectedWord = wordsArr[randomIndex];
        console.log("Selected Word:", selectedWord);
        setWord(selectedWord);
        // alert("The word is " + selectedWord);
        // alert("Game !!!" + " Time in millisecond: " + timer + " The word is " + selectedWord + " Number of players: " + players.length);
    };

    // Create an array of underscores representing each letter in the selected word
    //const underscoreArray = Array(word.length).fill('_');

    return (
        <>
            <h1>{/*underscoreArray.join(' ')*/}</h1>
            <input
                type="text"
                value={timer}
                placeholder="Enter play time in seconds"
                onChange={(event) => {
                    setTimer(event.target.value);
                }}
            />
            <button
                disabled={players.length < 2 || players.length > 5}
                onClick={handleClick}
            >
                Set Time and Start
            </button>
            <Game players={players} setPlayers={setPlayers} timer={timer} word={word} />
        </>
        
    );
}
