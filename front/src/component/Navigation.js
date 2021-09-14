import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
     return (
          <div className="navigation">
               <div className="navigation-cell">
                    <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
               </div>
               <div className="navigation-cell">
                    <NavLink exact to="/player" activeClassName="nav-active">Player</NavLink>
               </div>
               <div className="navigation-cell">
                    <NavLink exact to="/steamOwnedGames" activeClassName="nav-active">Steam Games</NavLink>
               </div>
               <div className="navigation-cell">
                    <NavLink exact to="/about" activeClassName="nav-active">About</NavLink>
               </div>
          </div>
     );
};

export default Navigation;