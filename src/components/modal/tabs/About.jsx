import { getTypeIcon } from "../../../api/formatData";
import { usePokemonModal } from "../../../context/PokemonModalProvider";
import DataRow from "../DataRow";

export default function About() {
  const { currentPokemon } = usePokemonModal();
  const { abilities, height, weight, types } = currentPokemon;

  return (
    <div className="about">
      <table>
        <tbody>
          <DataRow category={"Height"} value={currentPokemon.height}/>
          <DataRow category={"Weight"} value={currentPokemon.weight}/>
        </tbody>
      </table>

   
      <div>
        {types.map((data) => {
          const typeImg = getTypeIcon(data.name);
          return (
            <div key={data.name}>
              <h3>{data.name}</h3>
              <img
                src={typeImg}
                style={{
                  backgroundColor: "red",
                  width: "25px",
                  height: "25px",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
