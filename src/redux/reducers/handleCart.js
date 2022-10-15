/* eslint-disable no-case-declarations */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
const addItem = [];

const addItems = (state = addItem, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];
      // const exist = state.find((x) => x.id === product.id);
      // if (exist) {
      //   return state.map((x) =>
      //     x.id === product.id ? { ...x, qty: x.qty + 1 } : x
      //   );
      // } else {
      //   const product = action.payload;
      //   return [
      //     ...state,
      //     {
      //       ...product,
      //       qty: 1,
      //     },
      //   ];
      // }
      break;

    case "DELETEITEM":
      // const exist2 = state.find((x) => x.id === product.id);
      // if (exist2.qty === 1) {
      //   return state.filter((x) => x.id !== exist2.id);
      // } else {
      //   return state.map((x) =>
      //     x.id === product.id ? { ...x, qty: x.qty - 1 } : x
      //   );
      // }
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));

      break;
    default:
      return state;
      break;
  }
};

export default addItems;
