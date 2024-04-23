import React from 'react';
import { Link } from 'react-router-dom';
import { MenuProps } from '../../utils/type';

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;