import { usePokemonModal } from "../../../context/PokemonModalProvider"
import useEvolution from "../../../hooks/useEvolution"
import './Evolution.css'
import { MdOutlineDoubleArrow } from "react-icons/md";
export default function Evolution(){
    const { currentPokemon} =usePokemonModal();
    const chain = useEvolution(currentPokemon.id)
    

    return(
        
        <div className="evolution">
           {
                    ! chain.length ?
                        <strong className='error-msg'>This Pokémon doesn't Evolve</strong>
                    :
                    chain.map((evolution) => {
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