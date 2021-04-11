import { createContext } from 'react';
import { Notification } from '../types';


const NotificationContext = createContext<{ 
  notification: (Notification | null); // { title, message, status }
  showNotification(notificationData: Notification): any;
  hideNotification(): any;
}>({
  notification: null,
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

export default NotificationContext;
