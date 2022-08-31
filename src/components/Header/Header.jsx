import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './Header.module.css';

const menuItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
  },
  {
    id: nanoid(),
    to: '/movies',
    text: 'Movies',
  },
];

export function Header() {
  const elements = menuItems.map(({ id, to, text }) => (
    <li className={s.menu__item} key={id}>
      <NavLink to={to} className={s.link}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <div>
      <header className={s.app}>
        <nav className={s.navList}>{elements}</nav>
      </header>
    </div>
  );
}

Header.propTypes = {
  isActive: PropTypes.bool,
};
