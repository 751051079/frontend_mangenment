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
export function getCategoriesById(id: number) {
    return request({
        method: 'get',
        url: '/api/categories?id=' + id,
    })
}

/**
 * 获取所有分类列表
 * @returns 
 */
export function getCategoriesAll() {
    return request({
        method: 'get',
        url: '/api/categories',
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
        method: 'put',
        url: '/api/categories?id=' + id,
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
        method: 'delete',
        url: '/api/categories?id=' + id
    })
}

