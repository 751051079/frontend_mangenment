import axios, { InternalAxiosRequestConfig } from 'axios';

// interface CustomHeaders {
//     [key: string]: string;
// }


// 创建 axios 实例
const request = axios.create({
    baseURL: 'http://localhost:8090', // 用于配置请求接口公用部分，请求时会自动拼接在你定义的url前面。
    withCredentials: true, // 跨域请求时是否需要访问凭证
    timeout: 3 * 1000, // 请求超时时间
});

// 请求拦截器
request.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        
        }
        // config.headers['Access-Control-Allow-Origin'] = '*';
        config.headers['Content-Type'] = 'application/json; charset=utf-8';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
request.interceptors.response.use(
    (response: any) => {
        // console.log(response);
        const { status } = response;
        if (status !== 200) {
            return;
        }

        // if (response.data.code && response.data.code === 500 && response.data.message === '抱歉，没有权限') {
        //     return;
        // }
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default request;