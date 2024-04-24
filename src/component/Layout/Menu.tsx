import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../../utils/type';
import './menu.css'

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {

  const hanldCLickMenu = ()=>{

  }

  return (
    <ul className='nav-item'>
      {items.map((item, index) => (
        <li key={index} onClick={hanldCLickMenu}>
          <Link to={item.path}>{item.title}</Link>
          {/* 递归调用 Menu 组件，渲染子菜单 */}
          {item.children && item.children.length > 0 && (
            <Menu items={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;