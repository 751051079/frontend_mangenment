import request from "@/utils/request";
import { RecipeCategory } from "@/utils/type"

/**
 * 将菜谱添加到分类
 * @param data 
 * @returns 
 */
export function createRecipeCategory(data: RecipeCategory) {
    return request({
        method: 'post',
        url: '/api/recipe-categories',
        data: data
    })
}


/**
 *  获取分类的所有菜谱
 * @returns 
 */
export function getRecipeCategoryAll(id: number, params = {}) {
    return request({
        method: 'get',
        url: '/api/recipe-categories/category/' + id,
        params
    })
}


/**
 * 从分类中移除菜谱
 * @param id 
 * @returns 
 */
export function removeRecipeCategoryById(id: number) {
    return request({
        method: 'post',
        url: '/api/recipe-categories/delete/' + id
    })
}