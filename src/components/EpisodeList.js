import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from "./EpisodeCard";
import styled from "styled-components";

const EpisodeGrid = styled.div`
display: flex;
flex-wrap: wrap;

`

export default function EpisodeList(){
    const [episodes, setEpisodes] = useState([])
    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/episode/")
        .then(response => {
            console.log("this is my response", response.data.results)
            setEpisodes(response.data.results)
        })
        .catch(error => {
            console.log("server errorrr", error)
        })
    }, [])

    return(
        <section className="episode-list">
            <EpisodeGrid>
                {episodes.map((episode)=>{
                    return <EpisodeCard key={episode.id} name={episode.name} episode={episode.episode} airdate={episode.airdate}/>
                })

                }
            </EpisodeGrid>

        </section>
    )
}