import React from 'react';

const Login = (props) => {

  const { handleSubmit, handleUsername, handlePassword } = props;
  console.log("handleSubmit", handleSubmit)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Username:<br/>
        <input onChange={ handleUsername }/>
        <br/>
        Password:<br/>
        <input onChange={ handlePassword }/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
} 


export default Login;