import React from 'react';
import Navigation from '../component/Navigation';
import SteamOwnedGamesRender from '../component/SteamOwnedGames/SteamOwnedGamesRender';



const SteamOwnedGames = () => {
     return (
          <div>
               <Navigation />
               <SteamOwnedGamesRender />

          </div>
     );
};

export default SteamOwnedGames;