import { formatStats } from "../../../api/formatData";
import { usePokemonModal } from "../../../context/PokemonModalProvider";
import DataRow from "../DataRow";
import './Stats.css'

const Stats=()=>{
    const {currentPokemon} = usePokemonModal()
    const statsPoke = formatStats(currentPokemon.stats)
    console.log(statsPoke)
    return(
        <div className="stats">
            <table>
                <thead>
                    <tr className="row">
                        <th className="category">Stat</th>
                        <th className="stat-value">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {statsPoke.map((data)=>{
                        const{name,value,max} = data
                        return(
                            <DataRow category={name} value={value} max={max} key={name}/>
                        )
                    })}
                </tbody>
            </table>
          
        </div>
    )
}
export default Stats;