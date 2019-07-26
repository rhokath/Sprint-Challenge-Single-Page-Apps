import React from 'react'
import styled from "styled-components";

const CharacterDiv = styled.div`
display: flex;
flex-direction: column;
padding: 3rem;
margin: 2.5rem;
border: 1px solid #C5C6C7;
max-width: 40%;
border-radius: .5rem;
`
const CharacterHeader = styled.h2`
padding: 1rem;
text-align: center;
margin: 1rem;
color: #5D5C61;

`
const CharacterH3 = styled.h3`
text-align: left;
margin-top: 1rem;
color: #5D5C61;

`
const CharacterPtag = styled.p`
color: #747474;


`
const Imgtag = styled.img`
border-radius: .25rem;

`

export default function CharacterCard ({ character }) {
  return (
  <CharacterDiv>
      <Imgtag src={character.image} alt={`rick and morty character named ${character.name}`}/>
      <CharacterHeader>{character.name}</CharacterHeader>
       <CharacterH3>Status:  {character.status} <br></br>Species:  {character.species}</CharacterH3>
       <CharacterPtag>Location: {character.location.name}</CharacterPtag>
       <CharacterPtag>Origin: {character.origin.name}</CharacterPtag>
  </CharacterDiv>
  )
};
