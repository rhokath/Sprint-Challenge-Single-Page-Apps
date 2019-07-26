import React from 'react';
import styled from "styled-components";

const EpisodeDiv = styled.div`
display: flex;
flex-direction: column;
max-width: 35%;
border: 1px solid #C5C6C7;
padding: 2rem;
margin: 1.5rem;
max-width: 30%;
border-radius: .5rem;
justify-content: flex-start;

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