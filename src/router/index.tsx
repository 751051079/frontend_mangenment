import React from 'react'
import { useRoutes, Navigate } from "react-router-dom";
import { RouteObject } from "./interface/index"

import Login from "@/views/Login"
import Layout from '@/component/Layout/Layout';
import Home from '@/views/Home';
import SysMenu from '@/views/sysMenu/SysMenu';
import TimeComponents from '@/views/ComponentsShow/TimeComponents';
import ButtonComponents from '@/views/ComponentsShow/ButonnComponents';
import ImagesComponents from '@/views/ComponentsShow/ImagesComponents';
import GridComponents from '@/views/ComponentsShow/GridComponents';
import TableComponents from '@/views/ComponentsShow/TableComponents';
import AlertComponents from '@/views/ComponentsShow/AlertComponents';


// 主路管理
export const appRouter: RouteObject[] = [
    { path: "/", element: <Navigate to="/login" replace /> },
    { path: "/login", meta: { title: "登录" }, element: <Login /> },
    {
        path: "/layout/",
        element: <Layout />,
        children: [
            {
                path: "", element: <Home />, meta: { title: "首页" }
            },
            {
                path:"SysMenu",element:<SysMenu/>,meta:{title:'菜单管理'}
            },
            {
                path:"TimeComponents",element:<TimeComponents/>,meta:{title:'时间组件'}
            },
            {
                path:"ButtonComponents",element:<ButtonComponents/>,meta:{title:'按钮组件'}
            },
            {
                path:"ImagesComponents",element:<ImagesComponents/>,meta:{title:'图片组件'}
            },
            {
                path:"GridComponents",element:<GridComponents/>,meta:{title:'栅格组件'}
            },
            {
                path:"TableComponents",element:<TableComponents/>,meta:{title:'表格组件'}
            },
            {
                path:"AlertComponents",element:<AlertComponents/>,meta:{title:'弹窗组件'}
            }
        ]
    },
    { path: "*", meta: { title: "登录" }, element: <Login /> },

];

const Router = () => {
    const routerTab = useRoutes(appRouter); //注册前端路由表

    return routerTab;
}

export default Router;