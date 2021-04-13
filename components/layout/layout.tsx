import { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../../store/auth-context';

import NotificationContext from '../../store/notification-context';
import MainHeader from './MainHeader';
import Notification from '../ui/Notification';


function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  const router = useRouter();
  
  const authCtx = useContext(AuthContext);
  const isAuth =  authCtx.isAuth;
  
  const privateRoutes = [
    '/profile',
    '/events',
    '/events/[eventId]'
  ]
  const publicRoutes = [
    '/auth',
  ]
  useEffect(() => {
    if (!isAuth && privateRoutes.includes(router.route)) {
      router.replace('/auth');
    }

    if (isAuth && publicRoutes.includes(router.route)) {
      router.replace('/profile');
    }
  })

  return (
    <Fragment>
      <MainHeader isUserAuth={isAuth} logUserOut={authCtx.logUserOut} />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
