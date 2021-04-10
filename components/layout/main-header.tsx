import Link from 'next/link';

import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>Eventify</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events'>Browse Our Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
