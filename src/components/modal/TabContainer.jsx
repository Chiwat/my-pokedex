import { usePokemonModal } from "../../context/PokemonModalProvider";
import About from "./tabs/About";
import Stats from "./tabs/Stats";
import Evolution from "./tabs/Evolution";
import { useState } from "react";
import "./TabContainer.css";

export default function TabContainer() {
  const tabs = [
    { id: "About", component: <About /> },
    { id: "Stat", component: <Stats /> },
    { id: "Evolution", component: <Evolution /> },
  ];

  const {closeModal} = usePokemonModal();

  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="tab-backdrop" onClick={closeModal}>
      <div className="tab-container" onClick={(e) => e.stopPropagation()}>
        <div className="tab-header"></div>
        <div className="tab-body">
          <div className="tabs">
            {tabs.map((tab, index) => (
              <button
                className={currentTab === index ? "tab-btn active" : "tab-btn"}
                key={tab.id}
                onClick={() => setCurrentTab(index)}
              >
                {tab.id}
              </button>
            ))}
          </div>
          <div className="tab-content">{tabs[currentTab].component}</div>
        </div>
      </div>
    </div>
  );
}
