import React from 'react'
import styled from "styled-components";

const LocationDiv = styled.div`
display: flex;
flex-direction: column;
border: 1px solid #C5C6C7;
padding: 2rem;
margin: 1.5rem;
max-width: 30%;
border-radius: .5rem;
justify-content: flex-start;
`
const LocationHeader = styled.h1`
padding: 1rem;
text-align: left;
margin: 1rem;
color: #5D5C61;

`

export default function LocationCard ({ name, type, dimension, residents }) {
  
  return (
    <LocationDiv>
       
       <LocationHeader>{name}</LocationHeader>
       <p>{type}</p>
       <p>{dimension}</p>
       
    </LocationDiv>
  
  )
}
