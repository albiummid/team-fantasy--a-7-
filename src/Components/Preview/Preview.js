import React from 'react';
import "./Preview.css";
const Preview = (props) => {
    const selectedPlayers = props.selectedPlayers;
    let  totalSalary = 0;
    totalSalary = selectedPlayers.reduce((sum,player)=>sum + player.salary ,0 )

    return (
        <div className="preview none">
            <h4>Player Selected:{selectedPlayers.length}</h4>
            <div className="listContainer">
        <div className="list">
            <p>Selected Player Name :</p>
        <ol>
            {
       selectedPlayers.map(player =>  <li>{player.first_name  + " " + player.last_name}</li> )
            }
            </ol>
        </div>

        <div className="salary">
        <p>Selected Players Salary Summary :</p>

            <div className="salary-card">
<div className="player">
            {
       selectedPlayers.map(player =>  <p className="list">{player.first_name  + " " + player.last_name}</p> )
            }

            <hr/>
            <p>Total Salary : </p>
            </div>

            <div className="money">
            {
       selectedPlayers.map(player =>  <p className="list"> $ {player.salary}</p> )
            }
            <hr/>
            <p>$ {totalSalary}</p>
            </div>

            </div>

            </div>


            </div>
        </div>
    );
};

export default Preview;