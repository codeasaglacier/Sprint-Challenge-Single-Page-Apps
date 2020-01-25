import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard'
import axios from 'axios'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [ character, setCharacter ] = useState([])
  console.log(`Character: ${character}`)
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        console.log(response.data.results)
        setCharacter(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [search])

  return (
    <section className="character-list">
     { character.map(character => {
      return <CharacterCard 
      character = {
        character
      }
      />

      })}
    </section>
  );
}
