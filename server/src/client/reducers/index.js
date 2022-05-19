import { RESET, PRODUCT_DETAIL } from '../actions';

export const initialState = {
    count: 0,
    product: {}
}
  
export const actions = {
    RESET,
    PRODUCT_DETAIL,
  }
  
const reducer = (state = initialState, action) => {
  const { type } = action;
  if(type === actions.PRODUCT_DETAIL) {
    return {
      ...state,
      count: state.count + 1,
      product: { ...state.product,  [action.payload.id]: { ...action.payload } },
    };
  }
  if(type === actions.RESET) {
    return initialState;
  }

  return state;
}

export default reducer;
