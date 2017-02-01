import React from 'react';

const Login = (props) => {

  const { handleSubmit, handleKeyPress } = props;

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        Username:<br/>
        <input onChange={ handleKeyPress.bind(this,'username') } />
        <br/>
        Password:<br/>
        <input type='password' onChange={ handleKeyPress.bind(this,'password') } />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
} 

export default Login;
