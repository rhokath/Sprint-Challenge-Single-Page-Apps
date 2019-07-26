import React from 'react'
import styled from "styled-components";

const LocationDiv = styled.div`
display: flex;
flex-direction: column;
border: 1px solid blue;
padding: 1rem;
margin: .5rem;
max-width: 30%;
`

export default function LocationCard ({ name, type, dimension, residents }) {
  
  return (
    <LocationDiv>
       <span>todo: location</span>
       <p>some location stuff</p>
       <h1>LOCATION: {name}</h1>
       <p>{type}</p>
       <p>{dimension}</p>
       
    </LocationDiv>
  
  )
}
