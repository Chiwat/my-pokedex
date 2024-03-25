import { useState, Suspense } from "react";
import Loader from "./components/Loader";
import "./App.css";
import PokemonContainer from "./components/PokemonContainer";
import SelectGen from "./components/SelectGen";
import { PokemonModalProvider } from "./context/PokemonModalProvider";
import Modal from "./components/Modal";
import pokeballLogo from "/Images/pokeball/pokeball-logo.svg";

function App() {
  const [gen, setGen] = useState(1);

  return (
    
      <PokemonModalProvider>
        <div className="wrapper">
          <div className="header">
            <h1 className="logo-pokemon">P</h1>
            <span className="pokeball-logo">
              <img className="pokeball-img" src={pokeballLogo} alt="Logo" />
            </span>
            <h1 className="logo-pokemon">kedex</h1>
          </div>

          <SelectGen toggleGen={setGen} />
          
          <PokemonContainer generationID={gen} />
          
        </div>
        <Modal />
      </PokemonModalProvider>
   
  );
}

export default App;
