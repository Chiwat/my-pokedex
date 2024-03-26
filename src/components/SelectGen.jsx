import generations from "../data/generations";
import './SelectGen.css'
const SelectGen=({toggleGen,generation})=>{
    
    return(
       <div className="navigation-bar">
            <h1 className="navigation-header">Select Generation</h1>
            <div className="navigation-link">
                {generations.map((gen)=>{
                    return(
                       <button className={generation === gen.id ? "gen-btn active-gen" : "gen-btn"}
                            key={gen.id}
                            onClick={()=>toggleGen(gen.id)}
                            >
                            {gen.text}
                       </button>
                    )
                })}
            </div>
       </div>
    )
}
export default SelectGen;