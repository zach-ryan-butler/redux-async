import { createStore, compose, applyMiddleware } from 'redux';

const reducer = (state = {}, action) => {
  console.log('im in the reducer', action);
  switch(action.type) {
    case 'Hi':
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

const logger = store => next => action => {
  console.log('im in middleWare', action);
  next(action);
  console.log(store.getState());
};


const composeEnhancers = compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger))
);

store.dispatch({
  type: 'Hi',
  payload: 'stuff'
});
