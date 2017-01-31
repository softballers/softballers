//need actions here
import {LOGIN, LOGIN_ERR} from '../actions/loginAPI';
//initial State
const initialState = {username: '', password: ''};

export default function loginReducer(state = initialState, action) {
  switch(action.type) {
    case LOGIN:
      console.log("login", action.payload);
      return state;
    case LOGIN_ERR:  
      console.log("loginERR", action.payload);
      return state;
  }

  return state;
}