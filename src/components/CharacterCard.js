import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function CharacterCard() {

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

  
}
