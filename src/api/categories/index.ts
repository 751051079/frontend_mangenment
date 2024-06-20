import request from "@/utils/request";
import { Category } from "@/utils/type"

/**
 * 创建分类
 * @param data 
 * @returns 
 */
export function createCategories(data: Category) {
    return request({
        method: 'post',
        url: '/api/categories',
        data: data
    })
}


/**
 * 获取单个分类信息
 * @param id  
 * @returns 
 */
export function getCategoriesById(id: number,params = {}) {
    return request({
        method: 'get',
        url: '/api/categories?id=' + id,
        params
    })
}

/**
 * 获取所有分类列表
 * @returns 
 */
export function getCategoriesAll(params = {}) {
    return request({
        method: 'get',
        url: '/api/categories',
        params
    })
}

/**
 * 更新分类信息
 * @param id 
 * @param data 
 * @returns 
 */
export function updateCategoriesById(id: number, data: Category) {
    return request({
        method: 'post',
        url: '/api/categories/update/' + id,
        data: data
    })
}


/**
 * 删除分类
 * @param id 
 * @returns 
 */
export function removeCategoriesById(id: number) {
    return request({
        method: 'post',
        url: '/api/categories/delete/' + id
    })
}

