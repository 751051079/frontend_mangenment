import React from 'react'
import { useRoutes } from "react-router-dom";
import { RouteObject } from "./interface/index"

import Login from "../../src/views/Login"

// 主路管理
export const appRouter: RouteObject[] = [
    { path: "/login", meta: { title: "登录" }, element: <Login /> },
    {
        // path: "/",
        // element: (
        //     <PrivateRoute>
        //     <Layout />
        // ),
        // children: [
        //     {
        //         path: "/user",
        //         element: <User />,
        //     },
        //     {
        //         path: "/community",
        //         element: <Community />,
        //     },
        //     {
        //         path: "/book",
        //         element: <Book />,
        //     },
        // ],
    },
    { path: "*", meta: { title: "登录" }, element: <Login /> },

];

const Router = () => {
    const routerTab = useRoutes(appRouter); //注册前端路由表

    return routerTab;
}

export default Router;