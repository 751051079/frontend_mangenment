import React from 'react';
import Menu from './Menu';
// import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import { MenuItem } from '../../utils/type';


const Layout: React.FC = () => {

    const menuItems: MenuItem[] = [
        { title: '首页', path: '/home' }
        // 其他菜单项
    ]
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '200px', backgroundColor: '#f0f0f0' }}>
                <Menu items={menuItems} />
            </div>
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
