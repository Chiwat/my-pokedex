import {  useState, useEffect, useMemo } from "react";
import { fetchPokemons, fetchPokemonData } from "../api/api-fetch";
import generations from "../data/generations";
import { formatPokemonData } from "../api/formatData";

const useGeneration = (generationID) => {
  const [pokemons, setPokemons] = useState([]);
  
  const generation = useMemo(() => {
    return generations.find((gen) => gen.id === generationID);
  }, [generationID]);
  
  
  //find pokemon by generation
  const PokemonsInGen = () => {
    
    if (generation.limit === null || generation.offset === null) {
      return;
    }
    setPokemons([]);
    
    //Get all pokemons in the generation which is selected
    fetchPokemons(generation.limit, generation.offset).then(
      async ({ results }) => {
        const data = [];

        // Get data for each specific Pokemon.
        await Promise.all(results.map(async ({ name }) => {
            const pokemon = await fetchPokemonData(name);
            const pokemonFormat = formatPokemonData(pokemon)
            
            data[pokemonFormat.id] = pokemonFormat;
            
          }));
      
        setPokemons(data);     
      }
    );
  };

  useEffect(()=>{
    if(generationID){
      PokemonsInGen();
    }
  },[generationID])
  return pokemons;
    
  
  
};

export default useGeneration;
