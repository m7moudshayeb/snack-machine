import React, { useEffect, useContext } from "react";
import { getSnacks } from "./Services/GetSnacks";
import SnackItem from "./SnackItem";
import { SnackItemContext } from "./SnackItemContext";
import { ParentContainerContext } from "../ContainerContext";

const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    marginRight: "-10px",
    maxWidth: "900px"
  }
};

const SnacksContainer = () => {
  const { state, dispatch } = useContext(ParentContainerContext);

  useEffect(() => {
    dispatch({ type: "LoadingProducts" });
    getSnacks
      .then((res) => {
        dispatch({
          type: "CompletedLoading",
          payload: {
            snacks: res
          }
        });
      })
      .catch((e) => console.log(e));
  }, []);

  if (!state.snacks && !state.isLoading) {
    return null;
  }

  return (
    <div style={{ margin: "0 auto", maxWidth: "900px" }}>
      <div style={styles.wrapper}>
        {state.snacks
          .filter((snack) => snack.qty > 0)
          .slice(0, 25)
          .map((snack) => (
            <SnackItemContext.Provider value={snack} key={`${snack.id}`}>
              <SnackItem snack={snack} selected={state.selectedItem} />
            </SnackItemContext.Provider>
          ))}
      </div>
    </div>
  );
};

export default SnacksContainer;
