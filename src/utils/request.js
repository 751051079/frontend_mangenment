import axios from 'axios'

// 创建axios实例
const request = axios.create({
    // 这里可以放一下公用属性等。
    baseURL: axios.defaults.baseURL, // 用于配置请求接口公用部分，请求时会自动拼接在你定义的url前面。
    withCredentials: false, // 跨域请求时是否需要访问凭证
    timeout: 3 * 1000, // 请求超时时间

})

// 请求拦截器
request.interceptors.request.use((config) => {
    //token名称以自己的为定，我的是‘satoken’，如果不需要if这里就可以直接删掉

    if (getToken('token')) {
        // console.log(getToken('token'))
        config.headers['Authorization'] = 'Bearer ' + getToken('token'); //携带token

    }

    config.headers['Content-type'] = 'application/json; charset=utf-8';
    config.headers['Access-Control-Allow-Origin'] = '*';

    // console.log(config)
    return config;
}, (error) => {
    return Promise.reject(error)
})

request.interceptors.response.use((response) => {
    console.log(response)
    let {
        status
    } = response
    if (status != 200) {

        return
    }

    if (response.data.code && response.data.code == 500 && response.data.message == "抱歉，没有权限") {
        router.push('/');
        return
    }

    return response.data;
}, (error) => {
    return Promise.reject(error)
})

export default request;