import { useState } from 'react';
import classes from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [selected, setSelected] = useState('NSE');

  return (
    <nav className={classes.navbar}>
      <ul>
        <li
          className={selected === 'NSE' ? classes.selected : ''}
          onClick={() => setSelected('NSE')}
        >
          NSE
        </li>
        <li
          className={selected === 'Future' ? classes.selected : ''}
          onClick={() => setSelected('Future')}
        >
          Future
        </li>
        <li
          className={selected === 'Options' ? classes.selected : ''}
          onClick={() => setSelected('Options')}
        >
          Options
        </li>
      </ul>
      <ul>
        <Link href="https://flipr-2e7c.onrender.com/logout">
          <li className={classes.logout}>
            Logout
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
