import React, { useState, useEffect } from "react";
import axios from 'axios'
import CharacterCard from './CharacterCard'

const SearchForm = props => {
 
  
  const [ search, setSearch ] = useState('')
  const [ char, setChar ] = useState([])

      const changeHandler = event => {
        setSearch(event.target.value)
      }

useEffect(()=> {
  axios
  .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
  .then(res => {
    setChar(res.data.results)
    console.log(res.data.results)
  })
  .catch(error => {
        console.log(error)
  })
}, [search])
  

  return (
<div>
    <form>
      <label>
        Search Council of Ricks Database: {' '}
        <input 
          onChange = { changeHandler }
          type = 'text'
          name = 'search'
          value = {search}
        />
      </label>
    </form>

    { char.map(character => {
    return <CharacterCard 
    character = {
      character
    }
    />

    })}
</div>
);}

export default SearchForm