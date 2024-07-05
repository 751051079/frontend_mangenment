import request from "@/utils/request";
import { Step } from "@/utils/type"



/**
 * 创建当前菜谱的步骤
 * @param data 
 * @returns 
 */
 export function createStep(data: Step) {
    return request({
        method: 'post',
        url: '/api/steps',
        data: data
    })
}


/**
 * 获取当前菜谱步骤列表
 * @returns 
 */
export function getStepAll(id:string|number|undefined) {
    return request({
        method: 'get',
        url: '/api/steps/recipe/'+id,
    })
}

/**
 * 更新当前菜谱的步骤信息
 * @param id 
 * @param data 
 * @returns 
 */
export function updateStepById(id: number, data: Step) {
    return request({
        method: 'post',
        url: '/api/steps/update/' + id,
        data: data
    })
}


/**
 * 删除当前菜谱的步骤
 * @param id 
 * @returns 
 */
export function removeStepById(id: number) {
    return request({
        method: 'post',
        url: '/api/steps/delete/' + id
    })
}