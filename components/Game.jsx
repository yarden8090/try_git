import { useState, useEffect } from "react";

export default function Game({ players, setPlayers, timer, word }) {
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [guessedLetters, setGuessedLetters] = useState([]);
    // useEffect(() => {
    //     console.log("Word State Updated2:", guessedWord);
    // }, [guessedWord]);


    const handleGuessLetter = (letter) => {
    
        const guessedLetter = word.split('').find(c => c === letter);

        if(guessedLetter){
            setGuessedLetters([...guessedLetters, letter]); 
            const updatedPlayers = [...players];
            updatedPlayers[currentPlayerIndex].points += 1;
            setPlayers(updatedPlayers);             
        }
        else{
            alert(letter + " is not in the word");
        }

        // if (guessedIndexes.length === word.length) {
        //     // Game ends
        //     alert(' The word has been guessed.');
            
        // } else {
        //     // Move to the next player's turn
        //     setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
        // }
    };

    // console.log("Game component:", guessedWord);

    return (
        <>
            <h1>{word.split('').map((c) => guessedLetters.includes(c) ? c : '*')}</h1>
            {/* Render buttons for each letter of the alphabet */}
            {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
                <button key={letter} onClick={() => handleGuessLetter(letter)}>{letter}</button>
            ))}
        </>
    );
}
