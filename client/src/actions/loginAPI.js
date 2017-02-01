import axios from 'axios';


//actions
export const LOGIN = 'LOGIN';
export const LOGIN_ERR = 'LOGIN_ERR';

export function loginUser(credentials) {

  const dbQuery = axios.post(`http://localhost:8080/api/admin/login`, credentials);

  return (dispatch) => {
    dbQuery.then(response => {
      dispatch({
        type: LOGIN,
        payload: response.data,
      })
    })
    .catch(err => {
      dispatch({
        type: LOGIN_ERR,
        payload: err,
        });
      });
    };
  
}

