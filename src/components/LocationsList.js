import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from "./LocationCard";
import styled from "styled-components";

const LocationGrid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-content: space-around;

`

export default function LocationsList() {
    const [locations, setLocations] = useState([])
    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/location/")
        .then(response => {
            console.log("this is my response", response.data.results)
            setLocations(response.data.results)
        })
        .catch(error => {
            console.log("server error", error)
        })





    }, [])
    return(
        <section className="location-list">
            <LocationGrid>
                {locations.map((location)=>{
                    return <LocationCard  key={location.id} name={location.name} type={location.type} dimension={location.dimension} residents={location.residents}/>
                })}
            </LocationGrid>
        </section>
    )

}
