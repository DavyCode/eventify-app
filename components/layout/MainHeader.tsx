import Link from 'next/link';

import classes from './main-header.module.css';

type Props = {
  isUserAuth: boolean;
  logUserOut(): void
}

function MainHeader({ isUserAuth, logUserOut }: Props) {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <div className={classes.logo}>Eventify</div>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/events'>View Events</Link>
          </li>
          {!!!isUserAuth && <li>
            <Link href='/auth'>Login</Link>
          </li>}
          {isUserAuth && <li>
            <Link href='/profile'>Profile</Link>
          </li>}
          {isUserAuth && <li>
            <button onClick={logUserOut}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
