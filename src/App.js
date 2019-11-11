import React, { useState , useEffect }from "react";
import Header from "./components/Header.js";
import axios from 'axios';


  const App = () => {

  const [character, setCharacter] = useState([])
  // console.log(`Character: ${character}`)

  useEffect(() => {
    axios
      .get('https://rick-api.herokuapp.com/api/character/')
      .then(response => {
        console.log(response.data.results)
        // setCharacter(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <main>
      <Header />
    </main>
  );
}

export default App