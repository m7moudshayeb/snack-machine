import React from "react";
import { withSnack } from "./SnackItemContext";

const styles = {
  snack: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "calc(100% / 5 - 20px)",
    margin: "0 10px 15px 0",
    position: "relative",
    border: "2px solid transparent",
    padding: "3px"
  },
  description: {
    textAlign: "left",
    fontSize: "18px",
    fontWeight: "bold",
    height: "18px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  position: {
    position: "absolute",
    top: "0",
    left: "0",
    borderRadius: "50%",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
    fontSize: "12px"
  }
};

const SnackItem = ({ snackItem, selected }) => {
  return (
    <div
      style={styles.snack}
      className={selected === snackItem.position ? "selected" : ""}
    >
      <div style={styles.position}>{snackItem.position}</div>
      <img
        src={snackItem.image}
        alt={snackItem.name}
        width="100%"
        height={150}
        style={{ marginBottom: "10px" }}
      />
      <div style={styles.description}>{snackItem.name}</div>
      <div style={{ textAlign: "left", margin: "5px 0", display: "flex" }}>
        <div style={{ fontSize: "14px" }}>
          <span>QTY:&nbsp;</span>
          {snackItem.qty}
        </div>
        <strong style={{ marginLeft: "auto" }}>{snackItem.price}$</strong>
      </div>
    </div>
  );
};

export default withSnack(SnackItem);
