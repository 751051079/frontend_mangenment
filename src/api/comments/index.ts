import request from "@/utils/request";
import {Comment} from "@/utils/type"

/**
 * 添加评论到菜谱
 * @param data 
 * @returns 
 */
export function createComment(data: Comment) {
    return request({
        method: 'post',
        url: '/api/comments',
        data: data
    })
}


/**
 * 获取菜谱的所有评论
 * @param id 
 * @returns 
 */
export function getCommentsByRecipeId(id: number) {
    return request({
        method: 'get',
        url: '/api/comments/recipe/' + id,
    })
}

/**
 * 更新分类信息
 * @param id 
 * @param data 
 * @returns 
 */
export function updateCommentById(id: number, data: Comment) {
    return request({
        method: 'put',
        url: '/api/comments?id=' + id,
        data: data
    })
}


/**
 * 删除分类
 * @param id 
 * @returns 
 */
export function removeCommentById(id: number) {
    return request({
        method: 'delete',
        url: '/api/comments?id=' + id
    })
}

