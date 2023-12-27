import React from "react";
import Jordan from "../pages/Jordan";

export default function App(){ //main
    function reverseString(str= "name very nice"){
        return str.split("").reverse().join("");
     }
    return (
        <>
        <Jordan name={"glik"} age={19} />
        <h1 style={{fontSize: 18, fontFamily: "cursive"}}>
            {reverseString("yarden ben shabat")} is reversed name of "yarden ben shabat" 
        </h1>
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