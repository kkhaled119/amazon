export const getBasketTotal = (basket) => {
  return basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
};

export const initialState = {
  basket: [],
  user: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBaket = [...state.basket];

      if (index >= 0) {
        newBaket.splice(index, 1);
      } else {
        console.warn(`can't remove product {id${action.id}as it's not basket}`);
      }
      return {
        ...state,
        basket: newBaket,
      };

    default:
      return state;
  }
};

export default AppReducer;
