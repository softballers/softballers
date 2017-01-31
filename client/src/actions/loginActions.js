//get existing user
//save new user
//login
//sign up


//actions
export const LOGIN = 'LOGIN';
export const SIGN_UP = 'SIGN_UP';

//actionCreators

export function loginActionCreator(credentials) {
  return {
    type: 'LOGIN',
    payload: credentials,
  }
}

