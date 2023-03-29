import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = [
  { to: '/', text: 'Books' },
  { to: '/categories', text: 'Categories' },
];

const Nav = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      {Navbar.map((link) => (
        <li key={link.to}>
          <NavLink to={link.to}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
