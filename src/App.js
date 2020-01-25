import React from "react";
import Header from "./components/Header.js";
import WelcomePage from'./components/WelcomePage'
import CharacterList from "./components/CharacterList.js";
import { Route } from 'react-router-dom'
import SearchForm from "./components/SearchForm.js";


  const App = (props) => {

    return (
      <main>
        <Header />
        <Route 
          exact path = '/' 
          component = { WelcomePage } 
        />

        <Route 
          path = '/Character' 
          component = { CharacterList }
        />
        <Route
        path = '/SearchForm'
        render = { props => (
          <SearchForm
            {...props}
            // search = { search }
            // setCharacters = { setCharacter }
            // setSearch = { setSearch }
          />
        )}
      />

      </main>
    );
  
}

export default App