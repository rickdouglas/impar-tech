import { Container } from "@mui/system";
import PokemonCard from "../components/Card";
import Navbar from "../components/Navbar";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

export function Home () {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons();
    }, [])

    async function getPokemons () {
        var endpoints = [];
        for(let i = 1; i < 50; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        
        // await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
        // .then((res) => {setPokemons(res.data.results)})
        // .catch((err) => {console.log(err)});
    }

    return (
        <>
        <Navbar />
        <Container maxWidth="xg">
            <Grid container>
                {pokemons.map((pokemon) => (
                    <Grid item xs={2}>
                        <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} />
                    </Grid>
                ))}
                
            </Grid>
        </Container>
        </>
    )
}