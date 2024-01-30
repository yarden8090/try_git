
import { BigHead } from "@bigheads/core";

export default function ShowPlayers({players, deletePlayerFromList}) {

    return (<>
        {players.map((p) => {
        return <table border="5">
            <tr>
                <td> id: {p.id} </td>
                <td> name: {p.name} </td>
                <td> BigHead: <BigHead width = "150px" {...p.bighead} /> </td>
                <td><button onClick={() => deletePlayerFromList(p.id)}>Delete</button></td>
            </tr>
        </table>
    })}
    </>);
}
