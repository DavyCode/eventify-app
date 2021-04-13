import { useState, useRef, useContext } from 'react';
import { useRouter } from 'next/router';
import NotificationContext from '../../store/notification-context';
import AuthContext from '../../store/auth-context';

import classes from './auth-form.module.css';

async function authUserHandler(email: string, password: string, notificationCtx, { authType }) {
  const currentAuthType = authType === 'Login' ? 'Login in' : 'Registering'; 
  
  notificationCtx.showNotification({
    title: `${currentAuthType}...`,
    message: `${currentAuthType} account`,
    status: 'pending',
  });

  const response = await fetch(authType !== 'Login' ? '/api/auth/signup' : '/api/auth/signin', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  
  if (!response.ok) {
    notificationCtx.showNotification({
      title: 'Error!',
      message: data.error || 'Something went wrong!',
      status: 'error',
    });
    return;
  }

  notificationCtx.showNotification({
    title: 'Success!',
    message: `${currentAuthType} Successful`,
    status: 'success',
  });
  return data;
}

function AuthForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const notificationCtx = useContext(NotificationContext);
  const authCtx = useContext(AuthContext);
  
  const [isInvalid, setIsInvalid] = useState(false);
  const [isLoginOrSignupShow, setIsLoginOrSignupShow] = useState('Login');

  const router = useRouter();

  function switchAuthModeHandler() {
    if (isLoginOrSignupShow === 'Login') {
      setIsLoginOrSignupShow('');
    }
    else {
      setIsLoginOrSignupShow('Login');
    }
  }
  
  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredPassword ||
      enteredPassword.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    // check if user is logging in vs signing up
    if (isLoginOrSignupShow === 'Login') {
      try {
        const { data } = await authUserHandler(enteredEmail, enteredPassword, notificationCtx, { authType: 'Login' });
        authCtx.setUserloginAuth(data.data.accessToken);

        router.replace('/profile')
      } catch (error) {
        console.log(error); // TODO - Show user proper message
      }
    }
    else {
      try {
        await authUserHandler(enteredEmail, enteredPassword, notificationCtx, { authType: 'Signup' });
        setIsLoginOrSignupShow('Login');
      } catch (error) {
        console.log(error); // TODO - Show user proper message
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLoginOrSignupShow === 'Login' ? 'Login' : 'Sign Up'}</h1>
      
      {isInvalid && <p className={classes.error}>Please enter a valid email address and password!</p>}

      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input 
            type='email'
            id='email'
            required 
            ref={emailInputRef} 
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLoginOrSignupShow === 'Login' ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLoginOrSignupShow === 'Login' ? 'Create new account' : 'Login with existing account' }
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;