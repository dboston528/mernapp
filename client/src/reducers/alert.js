import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (action.type) {
    case 'SET_ALERT':
      return [...state, action];
    case 'REMOVE_ALERT':
      return state.filter(alert => alert.id !== action);
    default:
      return state;
  }
}
