import React, { useState, useEffect } from "react";
import axios from "axios";
import SteamOwnedGamesResults from './SteamOwnedGamesResults';



const SteamOwnedGamesRender = () => {
     const [ownedGames, setOwnedGames] = useState([]);
     const [player, setPlayer] = useState('76561198047682203')


     const handleSubmit = (event) => {
          event.preventDefault()
          setPlayer(event.target.textid.value)
     }

     useEffect(() => {
          axios({
               method: "GET",
               url: `http://localhost:7000/steam/ownedGames/${player}`,
               headers: {
                    "Content-Type": "application/json"
               }
          }).then(res => {
               setOwnedGames(res.data.response.games);
          });
     }, [player]);


     return (
          <div className="games">
               <form onSubmit={handleSubmit}>
                    <input type="text" name='textid' id='textid' />
                    <input type="submit" name='buttonid' id='buttonid' value="Valider le playerId" />
               </form>



               <ul className="games-list">

                    {ownedGames
                         .sort((a, b) => b.playtime_forever - a.playtime_forever)
                         .filter(ownedGame => ownedGame.playtime_forever > 59)
                         .map((ownedGame) => { 
                              return <SteamOwnedGamesResults ownedGame={ownedGame} key={ownedGame.name + ' ' + Math.random() * 10} />
                         })
                    }
               </ul>
          </div>

     );
};

export default SteamOwnedGamesRender;