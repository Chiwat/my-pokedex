import { formatStats } from "../../../api/formatData";
import { usePokemonModal } from "../../../context/PokemonModalProvider";
import DataRow from "../DataRow";

const Stats=()=>{
    const {currentPokemon} = usePokemonModal()
    const statsPoke = formatStats(currentPokemon.stats)
    console.log(statsPoke)
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Stat</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {statsPoke.map((data)=>{
                        const{name,value,max} = data
                        return(
                            <DataRow category={name} value={value} max={max}/>
                        )
                    })}
                </tbody>
            </table>
          
        </div>
    )
}
export default Stats;