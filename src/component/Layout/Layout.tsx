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
        },
        {
            title: '分类管理',
            path: '/layout/category',
        },
        {
            title:"菜谱管理",
            path:"/layout/recipe"
        },
        {
            title: '自定义组件',
            path: '#',
            children:[
                {
                    title:'时间组件',
                    path:'/layout/TimeComponents'
                },
                {
                    title:'按钮组件',
                    path:'/layout/ButtonComponents'
                },
                {
                    title:'弹窗组件',
                    path:'/layout/AlertComponents'
                },
                {
                    title:'栅格组件',
                    path:'/layout/GridComponents'
                },
                {
                    title:'表格组件',
                    path:'/layout/TableComponents'
                },
                {
                    title:'图片组件',
                    path:'/layout/ImagesComponents'
                },
                {
                    title:'上传图片组件',
                    path:'/layout/UploadImageBaseComponents'
                },
            ]
        },
        
    ];
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '200px', backgroundColor: '#2c2e2f',overflowY:'scroll' }}>
                <Menu items={menuItems} />
            </div>
            <div style={{ flex: 1 ,backgroundColor:'#f2f2f2',overflowY:'scroll'}}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
