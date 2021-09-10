import { useState } from 'react';

export default function useLoginToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString? JSON.parse(tokenString) : undefined;
    return userToken;
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    setToken(getToken());
    return true;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
    removeToken
  }
}