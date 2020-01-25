import React, { useState, useEffect } from "react";
import axios from 'axios'
import SearchForm from './SearchForm'
import { Route } from "react-router-dom";

export default function CharacterCard(props) {

  
  // console.log(`Character: ${character}`)
  // const [ search, setSearch ] = useState('')

  // useEffect(() => {
  //   axios
  //     .get('https://rickandmortyapi.com/api/character')
  //     .then(response => {
  //       console.log(response.data.results)
  //       setCharacter(response.data.results)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [search])

  return (
    <div>
      <img src = { props.character.image } />
      <h2>{ props.character.name}</h2>
      
    
    </div>
      
        
        
  )
}
