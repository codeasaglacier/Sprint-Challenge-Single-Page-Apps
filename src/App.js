import React from "react";
import Header from "./components/Header.js";
import WelcomePage from'./components/WelcomePage'
import CharacterCard from "./components/CharacterCard.js";
import { Route } from 'react-router-dom'


  const App = () => {

    return (
      <main>
        <Header />
        <Route path = '/' component = { WelcomePage } />
        <Route path = '/Characters' component = { CharacterCard} />
      </main>
    );
  
}

export default App