import { useEffect, useState } from 'react';
import './App.css';
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';
import Preview from './Components/Preview/Preview';

function App() {

  // hooks
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // fetch data
  useEffect(() => {
    fetch("https://api.npoint.io/2fa013978b09d3cc5e85")
      .then(response => response.json())
      .then(data => setPlayers(data))
  }, []);

// buttonClickManagement
  let newSelected = selectedPlayers;
const addClickedPlayer = (player) =>{
  hideCard();
if(selectedPlayers.indexOf(player)  === -1){
   newSelected = [...selectedPlayers, player];
}
  setSelectedPlayers(newSelected);
};

const hideCard = () =>{
  const preview = document.getElementsByClassName("preview");
  const list = document.getElementsByClassName("list")
  if(list.innerHTML !== ""){
    preview[0].classList.remove("none");
  }
}

  // return
  return (
    <div className="App">
      <Header></Header>
      <p className="slogan">/---Make Your Dream Team ! ---/</p>
      <Preview  selectedPlayers={selectedPlayers} ></Preview>
      <div className="main">
        {
        players.map(player => <Cards player={player}   addClickedPlayer={addClickedPlayer}></Cards>)
        }
      </div>
    </div>
  );
}

export default App;
