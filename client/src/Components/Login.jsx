import React from 'react';

function Login(props) {

 //const credentials = {username: '', password: ''};
  return (
    <div>
      <form>
        Username:<br/>
        <input type="text" name="firstname"></input><br/>
        Password:<br/>
        <input type="text" name="lastname"></input>
      </form>
    </div>
  )
} 


export default Login;