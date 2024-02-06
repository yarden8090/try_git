import {useState} from "react";
//import { BigHead } from "@bigheads/core";
import AddPlayer from "../components/AddPlayer";
import ShowPlayers from "../components/showPlayers";
import ShowGame from "../components/ShowGame";

export default function App(){ //main
    const [players, setPlayers] = useState([]);
    console.log(players);

    function addPlayerToList(player){
        setPlayers([...players, player]);
    }

    function deletePlayerFromList(id){
        const newPlayers = players.filter((p) => {
            return p.id !== id;
        })
        setPlayers(newPlayers);
    }
    return (
        <>
        <AddPlayer addPlayerToList={addPlayerToList}/>
        <ShowPlayers players={players} deletePlayerFromList={deletePlayerFromList}/>
        <ShowGame players={players} setPlayers={setPlayers}/>
        </>
    );
}




























//import { getRandomBighead } from "../components/bighead"

/*
const [bigheads, setBigHead] = useState([]);


function addBHdata(){
    const random = getRandomBighead();
    setBigHead([...bigheads, random]);

}
export default function App(){ //main
    return (
        <>
        <h1>Jordan</h1>
        <button onClick={addBHdata}>add data</button>

        
        
        </>
    );
}
*/