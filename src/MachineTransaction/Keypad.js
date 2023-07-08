import React, { useContext } from "react";
import { ParentContainerContext } from "../ContainerContext";

const Keypad = () => {
  const { state, dispatch } = useContext(ParentContainerContext);

  const rows = [1, 2, 3, 4, 5];
  const cols = ["A", "B", "C", "D", "E"];

  const handleRowClick = (row) => {
    dispatch({ type: "SetSelectionRow", payload: row });
  };

  const handleColClick = (col) => {
    dispatch({ type: "SetSelectionColumn", payload: col });
  };

  return (
    <div>
      <div>
        {rows.map((row) => (
          <button
            key={`rowsButton_${row}`}
            onClick={() => handleRowClick(row)}
            className={state.selectedRow === row ? "selectedButton" : ""}
          >
            {row}
          </button>
        ))}
      </div>
      {cols.map((col) => (
        <button
          key={`colsButton_${col}`}
          onClick={() => handleColClick(col)}
          className={state.selectedCol === col ? "selectedButton" : ""}
        >
          {col}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
