import {useState} from "react";
import { getRandomBighead } from "../components/bighead";
import { BigHead } from "@bigheads/core";

export default function AddPlayer({addPlayerToList}) {
    const [name, setName] = useState("");
    const [bighead, setBigHead] = useState(null);
    const [id, setId] = useState(1);

    return (
        <>
        <h1>Add Player</h1>
        <input type="text" value={name} placeholder="enter player name" onChange={(event) => {
            setName(event.target.value);
        }}/>
        
        <button onClick={() => {
            setBigHead(getRandomBighead());
        }}>change pic</button>
        
        {bighead != null && <BigHead width = "150px" {...bighead} />}  
        
        <button onClick={() =>{
            addPlayerToList({id, name, bighead, points: 0});
            setId(id + 1);
        }}>save</button>
        </>
    );
}