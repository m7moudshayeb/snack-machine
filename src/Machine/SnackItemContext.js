import React from "react";

export const SnackItemContext = React.createContext(null);

export function withSnack(Component) {
  return function SnackItemComponent(props) {
    return (
      <SnackItemContext.Consumer>
        {(snackItem) => <Component {...props} snackItem={snackItem} />}
      </SnackItemContext.Consumer>
    );
  };
}
