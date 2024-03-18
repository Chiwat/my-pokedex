import { useState, Suspense } from "react";
import Loader from "./components/Loader";
import "./App.css";
import PokemonContainer from "./components/PokemonContainer";
import SelectGen from "./components/SelectGen";
import { PokemonModalProvider } from "./context/PokemonModalProvider";
import Modal from "./components/Modal";

function App() {
  const [gen, setGen] = useState(1);

  return (
    <Suspense fallback={<Loader />}>
      <PokemonModalProvider>
        <div className="wrapper">
          <h1 className="logo-pokemon">Pokedex</h1>
          <SelectGen toggleGen={setGen} />
          <PokemonContainer generationID={gen} />
        </div>
        <Modal/>
      </PokemonModalProvider>
    </Suspense>
  );
}

export default App;
