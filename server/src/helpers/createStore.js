import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers, { initialState } from '../client/reducers';

export default req => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );

  return store;
};
