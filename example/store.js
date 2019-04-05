import { Redux } from 'mp-redux';

const { createStore } = Redux;

const defaultState = {
  count: 0,
};

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counter);

export const increase = () => ({ type: 'INCREMENT' });
export const decrease = () => ({ type: 'DECREMENT' });

export default store;
