import React, { useContext } from "react";
import { ParentContainerContext } from "../ContainerContext";

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

const CoinsButtons = () => {
  const { state, dispatch } = useContext(ParentContainerContext);

  const handleShowOrderModal = () => {
    dispatch({ type: "OrderModalAction", payload: true });
  };

  const handleAddChange = () => {
    dispatch({ type: "ChangeModalAction", payload: true });
  };

  const orderButtonDisabled =
    state.snacks.filter((snack) => snack.position === state.selectedItem)
      .length === 0;

  return (
    <div style={styles.wrapper}>
      <button onClick={handleAddChange}>Add Coins</button>
      <button disabled={orderButtonDisabled} onClick={handleShowOrderModal}>
        Order
      </button>
    </div>
  );
};

export default CoinsButtons;
