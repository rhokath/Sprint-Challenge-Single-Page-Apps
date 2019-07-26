import React from 'react';
import styled from "styled-components";

const EpisodeDiv = styled.div`
display: flex;
flex-direction: column;
border: 1px solid red;
margin: 1rem;
max-width: 30%;

`

export default function EpisodeCard ({name, episode, airdate}){
    return(
        <EpisodeDiv>
            <h1>{name}</h1>
            <p>{episode}</p>
            <p>{airdate}</p>
        </EpisodeDiv>
    )
}