import React, { useReducer } from "react";
import { initialState, reducer } from "./Reducer";

export const ParentContainerContext = React.createContext(null);

export function ContainerContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const providerState = {
    state,
    dispatch
  };

  return (
    <ParentContainerContext.Provider value={providerState}>
      {children}
    </ParentContainerContext.Provider>
  );
}
