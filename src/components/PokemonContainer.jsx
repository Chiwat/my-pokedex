import useGeneration from "../hooks/useGeneration"
import PokemonCard from "./PokemonCard.jsx"
import './PokemonContainer.css'

const PokemonContainer = ({generationID})=>{
    const pokemons = useGeneration(generationID)
    console.log(pokemons)
    
    return(
        <div className="pokemon-container"> 
           {pokemons.map((pokemon)=>{
             return (
                <PokemonCard key={pokemon.id} pokemon={pokemon}/>
             )
           })}
        </div>
    )
}
export default PokemonContainer;