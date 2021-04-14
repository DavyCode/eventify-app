
import classes from './error-alert.module.css';

type Props = {
  children: React.ReactNode;
}

function ErrorAlert({ children }: Props) {
  return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;