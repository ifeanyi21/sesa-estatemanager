import { ACTION_TYPES } from "../Actions/Actions";

export const PaymentReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE:
      if (action.payload.name === "amount") {
        return {
          ...state,
          amount: action.payload.value.replaceAll(",", ""),
        };
      } else {
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      }

    default:
      return state;
  }
};
