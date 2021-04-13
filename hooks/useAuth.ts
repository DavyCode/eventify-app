import { useState, useEffect } from 'react';

if (process.browser) {
  localStorage.getItem("token");
}

function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  
  useEffect(() => {
    if (getToken()) {
      setIsAuth(true)
    }
    else {
      setIsAuth(false)
    }
  });

  function setUserloginAuth(token: string) {
    if (token) {
      setIsAuth(true);
      setToken(token);
    }
  }

  function logUserOut() {
    setIsAuth(false);
    localStorage.removeItem('token');
  }

  function setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  function getToken(): string {
    return localStorage.getItem('token');
  }

  const context = {
    isAuth: isAuth,
    setUserloginAuth: setUserloginAuth,
    logUserOut: logUserOut,
    getToken: getToken,
  }

  return context;
}

export default useAuth;