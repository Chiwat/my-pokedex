import { usePokemonModal } from "../context/PokemonModalProvider";
import "./Modal.css";
import ModalScreen from "./modal/ModalScreen";
import TabContainer from "./modal/TabContainer";
export default function Modal() {
  const { isModalOpen, closeModal } = usePokemonModal();
  return (
    isModalOpen && (
      <div className="modal-backdrop" onClick={closeModal}>
        <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
          <ModalScreen/>
          <TabContainer/>
        </div>
      </div>
    )
  );
}
