import useGeneration from "../hooks/useGeneration"
import PokemonCard from "./PokemonCard.jsx"
import './PokemonContainer.css'
import Loader from './Loader.jsx'

const PokemonContainer = ({generationID})=>{
    const {pokemons,isLoading} = useGeneration(generationID)
    
    if(isLoading){
      return <Loader/>
    }
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