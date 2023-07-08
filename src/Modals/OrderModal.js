import React, { useContext, useState } from "react";
import { ParentContainerContext } from "../ContainerContext";
import useClickOutside from "../Hooks/UseClickOutside";

const styles = {
  input: {
    border: "1px solid #7b7ed5",
    padding: "5px",
    paddingRight: "0",
    textAlign: "center"
  }
};

const OrderModal = () => {
  const { state, dispatch } = useContext(ParentContainerContext);
  const [notEnough, setNotEnough] = useState(false);

  const ref = useClickOutside(handleClickOutside);

  function handleClickOutside() {
    dispatch({ type: "OrderModalAction", payload: false });
  }

  if (!state.showOrderModal) {
    return null;
  }

  const handleQtyChange = (e) => {
    dispatch({ type: "SetCurrentOrderedQty", payload: e.target.value });
  };

  const handleSetOrder = () => {
    setNotEnough(false);
    const orderTotal =
      parseInt(state.currentOrderedQty, 10) * parseFloat(snackItem.price, 10);

    if (orderTotal > state.currentBalance) {
      setNotEnough(true);
      return;
    }
    const newTotal = state.total + orderTotal;

    const changedSnack = state.snacks.filter(
      (snack) => snack.position === state.selectedItem
    )[0];
    changedSnack.qty = changedSnack.qty - state.currentOrderedQty;

    let newSnacks = [];

    state.snacks.forEach((snack) => {
      if (snack.id === changedSnack.id) {
        newSnacks.push(changedSnack);
      } else {
        newSnacks.push(snack);
      }
    });

    const newBalance = state.currentBalance - orderTotal;
    dispatch({
      type: "SetNewTotal",
      payload: { total: newTotal, snacks: newSnacks, balance: newBalance }
    });
  };

  const snackItem = state.snacks.filter(
    (snack) => snack.position === state.selectedItem
  )?.[0];

  return (
    <div className="change-modal">
      <div ref={ref} className="modal-body">
        <img
          src={snackItem.image}
          width={150}
          height={150}
          alt={snackItem.name}
        />
        <div>
          <strong>{snackItem.name}</strong>
        </div>
        <p>QTY available: {snackItem.qty}</p>
        <p>Unit Price: {snackItem.price}$</p>
        <input
          style={styles.input}
          type="number"
          value={state.currentOrderedQty}
          onChange={handleQtyChange}
          min={1}
          max={snackItem.qty}
        />
        <p>
          Total:{" "}
          {(state.currentOrderedQty * parseFloat(snackItem.price, 10)).toFixed(
            2
          )}
          $
        </p>
        <p>Current Balance: {state.currentBalance.toFixed(2)}</p>
        {notEnough && <p>Not enough balance. Please add more money</p>}
        <button onClick={handleSetOrder}>Order</button>
      </div>
    </div>
  );
};

export default OrderModal;
