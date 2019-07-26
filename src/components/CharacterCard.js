import React from 'react'
import styled from "styled-components";

const CharacterDiv = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
margin: .5rem;
border: 1px solid purple;
`

export default function CharacterCard ({ character }) {
  return (
  <CharacterDiv>
      <img src={character.image} alt={`rick and morty character named ${character.name}`}/>
      <h2>{character.name}</h2>
       <h3>{character.status}</h3>
  </CharacterDiv>
  )
};
