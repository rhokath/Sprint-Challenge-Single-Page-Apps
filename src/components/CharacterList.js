import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const CharacterGrid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters]= useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log("this is my respone",response.data.results)
      setCharacters(response.data.results)
    })
    .catch(error =>{
      console.log("server error", error)
    })
  }, [])

  return <section className='character-list grid-view'>

      <CharacterGrid>
        {characters.map((character)=> {

          return<CharacterCard key={character.id} character={character}/>
          
        })}
        
      </CharacterGrid>

    </section>

}
