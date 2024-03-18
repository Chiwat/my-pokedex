import { usePokemonModal } from "../../context/PokemonModalProvider";

export default function ModalScreen() {
  const { currentPokemon } = usePokemonModal();
  // console.log(currentPokemon);
  return (
    <div>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <span className="idNumber">#{currentPokemon.paddedId}</span>
        <h1 className="pokemonName">{currentPokemon.name}</h1>
      </div>

      <div>
        <img src={currentPokemon.imgSrc} />
      </div>
    </div>
  );
}
