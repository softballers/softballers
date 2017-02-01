import React from 'react';

const Login = (props) => {
  
  return (
    <div>
      <form onSubmit={ props.handleLogin }>
        Username:<br/>
        <input />
        <br/>
        Password:<br/>
        <input />
      </form>
    </div>
  )
} 


export default Login;