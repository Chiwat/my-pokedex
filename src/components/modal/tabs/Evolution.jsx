import { usePokemonModal } from "../../../context/PokemonModalProvider"
import useEvolution from "../../../hooks/useEvolution"
import './Evolution.css'
import { MdOutlineDoubleArrow } from "react-icons/md";
import Loader from "../../Loader.jsx"
export default function Evolution(){
    const { currentPokemon} =usePokemonModal();
    const {evolution,isLoading} = useEvolution(currentPokemon.id)
    
    if(isLoading){
        return <Loader/>
    }
    return(
        
        <div className="evolution">
           {
                    ! evolution.length ?
                        <strong className='error-msg'>This Pokémon doesn't Evolve</strong>
                    :
                    evolution.map((evolution) => {
                        const { current, next } = evolution;

                        return (
                            <div className='evolution-container' key={ next.name }>
                                <div className="evo-box">
                                    <div className='poke-img'>
                                        <div className='pokeball-bg'></div>

                                        <img src={ current.image } alt='pokemon-image'  className="pokemon-image"/>
                                    </div>

                                    <span className="poke-name" >{ current.name }</span>
                                </div>

                                <MdOutlineDoubleArrow className="arrow" />

                                <div className="evo-box">
                                    <div className='poke-img'>
                                        <div className='pokeball-bg'></div>

                                        <img src={ next.image } alt='pokemon-image' className="pokemon-image" />
                                    </div>

                                    <span className="poke-name">{ next.name }</span>
                                </div>
                            </div>
                        );
                    })
                }
        </div>
    )
}