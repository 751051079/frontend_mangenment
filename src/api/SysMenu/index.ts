import request from "@/utils/request";

export interface menuAddRequestType {
    parentId: string;
    menuType: string;
    menuName: string;
    url: string;
    target: string;
    perms: string;
    orderNum: string;
    icon: string;
    visible: string;
    isRefresh: number;
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