import { usePokemonModal } from "../../context/PokemonModalProvider";
import "./ModalScreen.css";
import { IoCloseSharp } from "react-icons/io5";
export default function ModalScreen() {
  const { currentPokemon,closeModal} = usePokemonModal();

  return (
    <div className="modal-screen">

      <div className="light-container-wrap">
        <div className="light-container">
          <div className="light"><IoCloseSharp className="close-btn" onClick={closeModal}/></div>
        </div>
      </div>

      <div className="body-screen">
        <div className="screen-frame-wrap">
          <div className="screen-frame">
            <div className="screen-display">
              <img src={currentPokemon.imgSrc} />
            </div>
          </div>
        </div>
        <div className="pokemon-display">
          <div className="id-display">
            <h3 className="idNumber">#{currentPokemon.paddedId}</h3>
          </div>
          <div className="name-display">
            <h1 className="pokemonName">{currentPokemon.name}</h1>
          </div>
        </div>
        <div className="core-pokedex"></div>
      </div>
    </div>
  );
}
