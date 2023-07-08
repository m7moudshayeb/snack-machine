const initialState = {
  snacks: [],
  isLoading: false,
  total: 0.0,
  insertedChange: 0,
  selectedItem: "",
  selectedRow: "",
  selectedCol: "",
  showOrderModal: false,
  showChangeModal: false,
  currentBalance: 0.0,
  currentOrderedQty: 1
};

function reducer(state, action) {
  switch (action.type) {
    case "LoadingProducts":
      return { ...state, isLoading: true };
    case "CompletedLoading":
      return { ...state, isLoading: false, snacks: action.payload.snacks };
    case "SetSelectedItem":
      return { ...state, selectedItem: action.payload.selectedItem };
    case "InsertChange":
      return { ...state, insertedChange: action.payload.changeValue };
    case "SetNewTotal":
      return {
        ...state,
        total: action.payload.total,
        snacks: action.payload.snacks,
        currentBalance: action.payload.balance,
        showOrderModal: false
      };
    case "SetSelectionRow":
      return {
        ...state,
        selectedRow: action.payload,
        selectedItem: `${action.payload}-${state.selectedCol}`
      };
    case "SetSelectionColumn":
      return {
        ...state,
        selectedCol: action.payload,
        selectedItem: `${state.selectedRow}-${action.payload}`
      };
    case "OrderModalAction":
      return { ...state, showOrderModal: action.payload };
    case "ChangeModalAction":
      return { ...state, showChangeModal: action.payload };
    case "AddToBalance":
      return {
        ...state,
        currentBalance: state.currentBalance + action.payload
      };
    case "RemoveCurrentBalance":
      return {
        ...state,
        currentBalance: action.payload,
        showChangeModal: false
      };
    case "SetCurrentOrderedQty":
      return { ...state, currentOrderedQty: action.payload };
    default:
      throw new Error();
  }
}

export { initialState, reducer };
