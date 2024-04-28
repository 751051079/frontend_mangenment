import request from "../utils/request.js";


/**
 * 登录获取
 * @param {Object} data
 */
export function login(data) {
    return request({
        method: 'post',
        url: '/api/Login/GetToken',
        data
    })
}

/**
 * get请求方法
 * @param {Object} params
 */
// export function getorderInfo(params = {}) {
//     return request({
//         method: 'get',
//         url: '/getOrderInfo',
//         params
//     })
// }


/**
 * post请求
 * @param {Object} data
 */
// export function login(data) {
// 	return request({
// 		method: 'post',
// 		url: '/api/Login/GetToken',
// 		data: data //可以简写为data
// 	})
// }