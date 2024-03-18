import generations from "../data/generations";

const SelectGen=({toggleGen})=>{
    
    return(
       <div className="navigation-bar">
            <h3 className="navigation-header">Select Generation</h3>
            <div className="navigation-link">
                {generations.map((gen)=>{
                    return(
                       <button className={gen.text}
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