import "./styles.css";
import SnacksContainer from "./Machine/SnacksContainer";
import MachineActions from "./MachineTransaction/MachineActionsContainer";
import { ContainerContext } from "./ContainerContext";
import OrderModal from "./Modals/OrderModal";
import ChangeModal from "./Modals/ChangeModal";

export default function App() {
  return (
    <div className="App">
      <ContainerContext>
        <SnacksContainer />
        <MachineActions />
        <OrderModal />
        <ChangeModal />
      </ContainerContext>
    </div>
  );
}
