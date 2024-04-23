import React from 'react'
import { useRoutes } from "react-router-dom";
import { RouteObject } from "./interface/index"

import Login from "../views/Login"
import Layout from '../component/Layout/Layout';
import Home from '../views/Home';

// 主路管理
export const appRouter: RouteObject[] = [
    { path: "/login", meta: { title: "登录" }, element: <Login /> },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "home", element: <Home />, meta: { title: "首页" }
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