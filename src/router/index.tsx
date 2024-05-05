import React from 'react'
import { useRoutes, Navigate } from "react-router-dom";
import { RouteObject } from "./interface/index"

import Login from "@/views/Login"
import Layout from '@/component/Layout/Layout';
import Home from '@/views/Home';
import CustomComponents from '@/views/CustomComponents/CustomComponents';
import SysMenu from '@/views/sysMenu/SysMenu';


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
                path: "customComponents", element: <CustomComponents />, meta: { title: "自定义组件" }
            },
            {
                path:"SysMenu",element:<SysMenu/>,meta:{title:'菜单管理'}
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