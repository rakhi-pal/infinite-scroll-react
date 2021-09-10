import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core';
import './Login.css';
import {Button} from '@material-ui/core';


export default function Login({ setToken, history }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = e => {
      e.preventDefault();
      if(username === 'foo' && password === 'bar') {
        setToken('12345');
        history.push('/home');
      }
    }
  
    return(
      <div className="login-wrapper">
        <form className='login-form' onSubmit={handleSubmit}>
          <div className='login-header'>
            <h2>Login</h2>
          </div>
          <div className='text-input'>
            <TextField  id="Username" label="Username" variant="outlined" onChange={e => setUserName(e.target.value)} />
          </div>
          <div className='text-input'>
            <TextField type="password" id="password" label="Password" variant="outlined" onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className='login-btn-container'>
            <Button className='login-btn' variant="contained" color="primary" onClick={e => handleSubmit(e)}>Login</Button>
          </div>
        </form>
      </div>
    )
  }
  
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };