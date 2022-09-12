import { Container } from "@mui/system";
import PokemonCard from "../components/Card";
import Navbar from "../components/Navbar";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { AppPagination } from "../components/Pagination";


export function Home () {
    const [pokemons, setPokemons] = useState([]);    
    useEffect(() => {
        getPokemons();
    }, [])

    async function getPokemons () {
        var endpoints = [];
        for(let i = 1; i < 200; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        
    }
    function pokemonFilter(search) {
        if(search === "") getPokemons() // ao apagar o campo de busca, traz todos os pokemons novamente
        
        const filteredPokemons = pokemons.filter((pokemon) => {
            return pokemon.data.name.includes(search);
        })
        setPokemons(filteredPokemons)
    }

    return (
        <>
        <Navbar pokemonFilter={pokemonFilter}/>
        <Container maxWidth="xg">
            <Grid container>
                {pokemons.map((pokemon) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} padding="1em">
                        <PokemonCard 
                            name={pokemon.data.name} 
                            image={pokemon.data.sprites.front_default}
                            types={pokemon.data.types} />
                    </Grid>
                    
                ))}
            </Grid>
            <AppPagination />
        </Container>
        </>
    )
}