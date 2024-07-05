import request from "@/utils/request";
import {Seasoning} from "@/utils/type"


/**
 * 创建菜谱
 * @param data 
 * @returns 
 */
 export function createRecipe(data: Seasoning) {
    return request({
        method: 'post',
        url: '/api/recipes',
        data: data
    })
}


/**
 * 获取单个菜谱信息
 * @param id  
 * @returns 
 */
export function getRecipeById(id: number,params = {}) {
    return request({
        method: 'get',
        url: '/api/recipes?id=' + id,
        params
    })
}

/**
 * 获取所有菜谱列表
 * @returns 
 */
export function getRecipeAll(params = {}) {
    return request({
        method: 'get',
        url: '/api/recipes',
        params
    })
}

/**
 * 更新菜谱信息
 * @param id 
 * @param data 
 * @returns 
 */
export function updateRecipeById(id: number, data: Seasoning) {
    return request({
        method: 'post',
        url: '/api/recipes/update/' + id,
        data: data
    })
}


/**
 * 删除菜谱
 * @param id 
 * @returns 
 */
export function removeRecipeById(id: number) {
    return request({
        method: 'post',
        url: '/api/recipes/delete/' + id
    })
}