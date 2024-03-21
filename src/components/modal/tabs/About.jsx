import { getTypeIcon } from "../../../api/formatData";
import { usePokemonModal } from "../../../context/PokemonModalProvider";
import DataRow from "../DataRow";
import './About.css'

export default function About() {
  const { currentPokemon } = usePokemonModal();
  const { abilities, height, weight, types } = currentPokemon;

  return (
    <div className="about">
      <table>
        <tbody>
          <DataRow category={"Height"} value={height}/>
          <DataRow category={"Weight"} value={weight}/>
          
        </tbody>
      </table>

   
      <div className="type-row">
        <span className="category types-heading">
          Types
        </span>
        {types.map((data) => {
          const typeImg = getTypeIcon(data.name);
          return (
            <div key={data.name} className="type-about">
              <img
                src={typeImg}
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
              <h3>{data.name}</h3>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
