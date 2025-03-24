import request from "@/utils/request";

interface LoginType{
    username:string;
    password:string;
    captcha:string
}

export function getCaptcha(params = {}) {
    return request({
        method: 'get',
        responseType:'blob',
        url: '/api/getCaptcha',
        params
    })
}


export function login(data:LoginType) {
	return request({
		method: 'post',
		url: '/api/user/login',
		data: data //可以简写为data
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