import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR
} from '../actions/types';

const initialState = {
  //looks for item in local storage
  token: localStorage.getItem('token'),
  //When the response is successful isAuthenticated = true
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    //After getting response REGISTER_SUCCESS should trigger
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
      //setting the token
      localStorage.setItem('token', payload.token);
      return {
        //returns whatever is in the state
        ...state,
        ...payload,
        isAuthenticated: true,
        loadig: false
      };
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    case AUTH_ERROR:
    default:
      return state;
  }
}
