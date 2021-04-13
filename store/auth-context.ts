import { createContext } from 'react';
import { User } from '../types';


const AuthContext = createContext<{
  isAuth: boolean;
  setUserloginAuth(token: string): any;
  logUserOut(): any;
  getToken: () => any;
}>({
  isAuth: false,
  setUserloginAuth: function (token) {},
  logUserOut: function () {},
  getToken: function () {},
})

export default AuthContext;