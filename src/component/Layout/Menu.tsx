import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../../utils/type';
import './menu.css'

interface MenuProps {
  items: MenuItem[];
  style?: React.CSSProperties;
  className?: string;
}

const Menu: React.FC<MenuProps> = ({ items, className, style }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

  const handleClickMenu = (index: number | null, e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation(); // 阻止事件冒泡
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <ul className={`nav-item ${className || ''}`} style={style}>
      {items.map((item, index) => (
        <li key={index} onClick={(e) => { handleClickMenu(index, e); }}>
          <Link to={item.path}>{item.title}</Link>
          {/* 递归调用 Menu 组件，渲染子菜单 */}
          {item.children && item.children.length > 0 && (
            <Menu items={item.children} className={`sub-menu-${index + 1}`} style={{ height: activeSubMenu === index ? 'auto' : '0' }} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;