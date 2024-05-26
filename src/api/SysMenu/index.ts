import request from "@/utils/request";

export interface menuAddRequestType {
    id:string;
    parentId: string | number;
    menuType: string | number;
    menuName: string | number;
    path: string | number;
    isFrame: string | number;
    perms: string | number;
    orderNum: string | number;
    icon: string | number;
    query: string | number;
    status: string | number;
    visible: string | number;
    isCache: string | number;
}

export function menuAdd(data: menuAddRequestType) {
    return request({
        method: 'post',
        url: '/api/menu/add',
        data: data //可以简写为data
    })
}

export function menuList() {
    return request({
        method: 'post',
        url: '/api/menu/list'
    })
}

export function menuEdit(data: menuAddRequestType) {
    return request({
        method: 'post',
        url: '/api/menu/edit',
        data:data
    })
}

