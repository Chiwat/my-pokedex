import { getTypeIcon } from "../../../api/formatData";
import { usePokemonModal } from "../../../context/PokemonModalProvider";
import DataRow from "../DataRow";
import "./About.css";

export default function About() {
  const { currentPokemon } = usePokemonModal();
  const { abilities, height, weight, types } = currentPokemon;
  console.log(abilities);
  return (
    <div className="about">
      <table>
        <tbody>
          <DataRow category={"Height"} value={height} />
          <DataRow category={"Weight"} value={weight} />
        </tbody>
      </table>

      <div className="row">
        <span className="category heading">Abilities</span>
        <div className="ability-container">
          {abilities.map(({ ability, is_hidden, slot }) => {
            return (
              <div className="ability-box" key={slot}>
                <span className="ability-name">{ability.name}</span>{" "}
                {is_hidden && <span className="hidden">Hidden Ability</span>}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="row">
        <span className="category heading">Types</span>
        <div className="types-container">
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
    </div>
  );
}
