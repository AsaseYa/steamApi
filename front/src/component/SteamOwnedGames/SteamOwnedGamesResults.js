import React from 'react';



const SteamOwnedGamesResults = (props) => {
     const { ownedGame } = props;

     //modify minutes to hours
     const hoursPlaytime = (playtime) => {
          return Math.round(playtime/60);
     }
     // slice the name
     const nameTooLong = (name) => {
          if (name.length > 20) {
               return name.slice(0, 20);
          } else { 
               return name;
          }
     }

     return (
          <li className="gamecard">
               {ownedGame.img_icon_url ? <img src={`https://cdn.akamai.steamstatic.com/steam/apps/${ownedGame.appid}/header.jpg?t=${ownedGame.img_icon_url}`} alt='' /> : null}
               <div className="data-container">
                    <ul>
                         <li>{nameTooLong(ownedGame.name)}</li>
                         <li>ID: {ownedGame.appid}</li>
                         <li>Playtime: {hoursPlaytime(ownedGame.playtime_forever)}h</li>
                    </ul>
               </div>
          </li>
     );
};

export default SteamOwnedGamesResults;