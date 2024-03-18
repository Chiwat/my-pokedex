import { normalizeEvolutionChain } from "./formatData";

const base = "https://pokeapi.co/api/v2/";

export const apiFetch = async(endpoint) => {
    const response = await fetch(base + endpoint);
    if(response.status === 404){
        throw {
            status: 404,
            message: "Not Found"
        }
    }
    
    return response.json();
}

//fetch all pokemons
export const fetchPokemons = (limit,offset) =>{
    return apiFetch(`pokemon?limit=${limit}&offset=${offset}`);
}

//fetch specific pokemon
export const fetchPokemonData = ( pokemonId ) => {
	return apiFetch( `pokemon/${ pokemonId }` );
};



