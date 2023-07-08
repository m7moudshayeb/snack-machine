import React, { useContext } from "react";
import Keypad from "./Keypad";
import CoinsButtons from "./CoinsButtonSet";
import { ParentContainerContext } from "../ContainerContext";

const MachineActions = () => {
  const { state } = useContext(ParentContainerContext);
  if (!state.snacks || state.isLoading) {
    return null;
  }
  return (
    <>
      <Keypad />
      <CoinsButtons />
      <strong style={{ fontSize: "18px", marginRight: "8px" }}>
        Total: {state.total.toFixed(2)}
      </strong>

      <p>Current Balance: {state.currentBalance.toFixed(2)}$</p>
    </>
  );
};

export default MachineActions;
