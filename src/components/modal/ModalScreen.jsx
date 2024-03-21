import { usePokemonModal } from "../../context/PokemonModalProvider";
import "./ModalScreen.css";
export default function ModalScreen() {
  const { currentPokemon } = usePokemonModal();

  return (
    <div className="modal-screen">
      <div className="light-container">
        <span className="light main"></span>
       
      </div>
      <div className="body-screen">
        <div className="screen-frame">
          <div className="screen-display">
            <img src={currentPokemon.imgSrc} />
          </div>
        </div>
        <div className="pokemon-display">
          <span className="idNumber">#{currentPokemon.paddedId}</span>
          <h1 className="pokemonName">{currentPokemon.name}</h1>
        </div>
      </div>
    </div>
  );
}
