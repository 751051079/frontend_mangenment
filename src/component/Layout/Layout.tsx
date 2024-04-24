import React from 'react';
import Menu from './Menu';
// import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import { MenuItem } from '../../utils/type';


const Layout: React.FC = () => {

    const menuItems: MenuItem[] = [
        {
            title: '首页',
            path: '',
            children: [
                {
                    title: '子菜单1',
                    path: '',
                    children: [
                        {
                            title: '子菜单1-1',
                            path: ''
                        },
                        {
                            title: '子菜单1-2',
                            path: ''
                        }
                    ]
                },
                {
                    title: '子菜单2',
                    path: ''
                }
            ]
        },
        {
            title: '关于',
            path: ''
        }
    ];
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '200px', backgroundColor: '#2c2e2f' }}>
                <Menu items={menuItems} />
            </div>
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
