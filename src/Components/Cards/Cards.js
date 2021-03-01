import React from 'react';
import "./Cards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign,faUser,faCrosshairs, faMoneyCheckAlt} from '@fortawesome/free-solid-svg-icons';

const Cards = (props) => {
    const { team, first_name, last_name, position, salary, image } = props.player;
    const fullName = first_name + " " + last_name;
    const addClickedPlayer = props.addClickedPlayer;
    return (
            <div className="card-player">
                <div className="photo">
                    <img src={image} alt="" />
                </div>
                <div className="details">
                    <h3><span>{fullName}</span> </h3>
                    <hr/>
                    <p><FontAwesomeIcon icon={faUser} /> Team: <span>{team}</span> </p>

                    <p><FontAwesomeIcon icon={faCrosshairs} />Position: <span>{position}</span></p>

                    <p><FontAwesomeIcon icon={faMoneyCheckAlt} />Salary: <span> <FontAwesomeIcon icon={faDollarSign} /> {salary} /hour</span></p>
                </div>
                <button onClick={()=> addClickedPlayer(props.player)} className="rounded-3">  Hire Him!</button>
                
            </div>

    );
};

export default Cards;