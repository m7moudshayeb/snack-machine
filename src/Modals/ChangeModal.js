import React, { useState, useContext } from "react";
import { ParentContainerContext } from "../ContainerContext";
import useClickOutside from "../Hooks/UseClickOutside";

const styles = {
  closeModal: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 0
  },
  select: {
    border: 0,
    padding: "10px",
    width: "100px"
  }
};

const ChangeModal = () => {
  const { state, dispatch } = useContext(ParentContainerContext);
  const [coin, setCoin] = useState("");

  const ref = useClickOutside(handleClickOutside);

  function handleClickOutside() {
    dispatch({ type: "ChangeModalAction", payload: false });
  }

  if (!state.showChangeModal) {
    return null;
  }

  const handleChangeSelection = (e) => {
    setTimeout(() => setCoin(""), 1000);
    dispatch({
      type: "AddToBalance",
      payload: parseFloat(e.target.value, 10)
    });
  };

  const changeValues = [
    { display: "10C", value: 0.1 },
    { display: "20C", value: 0.2 },
    { display: "50C", value: 0.5 },
    { display: "1$", value: 1 },
    { display: "20$", value: 20 },
    { display: "50$", value: 50 }
  ];

  return (
    <div className="change-modal">
      <div ref={ref} className="modal-body">
        <h3>Select Amount to add</h3>
        <select
          value={coin}
          style={styles.select}
          onChange={handleChangeSelection}
        >
          <option disabled value=""></option>
          {changeValues.map((change) => (
            <option
              value={change.value}
              key={`addChangeValue_${change.display}`}
            >
              {change.display}
            </option>
          ))}
        </select>
        <p>
          Your Current Balance:{" "}
          <strong>{state.currentBalance.toFixed(2)}</strong>
        </p>
        <button style={styles.closeModal} onClick={handleClickOutside}>
          X
        </button>
      </div>
    </div>
  );
};

export default ChangeModal;
