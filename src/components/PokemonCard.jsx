import { getTypeIcon } from "../api/formatData";
import { usePokemonModal } from "../context/PokemonModalProvider";
import pokeballBg from "/Images/pokeball/pokeball.svg"
import './PokemonCard.css'
const PokemonCard =({pokemon,pokemon:{paddedId , imgSrc ,name, types}})=>{
    
    const {openModal} = usePokemonModal();
    
    return(
        <div onClick={()=>openModal(pokemon)} 
             className={`card-container ${types[0].name}`}>
            <div className="card-header">
                <h2 className="id-number">#{paddedId}</h2>
            </div>
            <div className="card-img">
                <img src={imgSrc}/>
            </div>
            <div className="card-bg">
                <img src={pokeballBg} alt="bg"></img>
            </div>
            <div className="card-details">
                
                <h3 className="pokemon-name"> {name}</h3>
                <div className="pokemon-types">
                    {types.map((data)=>{
                        const typeImg = getTypeIcon(data.name)
                        return(
                            <div key={data.name} className={`type-container`}>
                                <img src={typeImg} style={{width:"25px",height:"25px"}}/>
                                <h3>{data.name}</h3>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}
export default PokemonCard;