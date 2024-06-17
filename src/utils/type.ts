
export interface responseType{
    code:number;
    data:string;
    map:Object;
    msg:string
}
export interface MenuItem {
    title: string;
    path: string;
    children?: MenuItem[];
}

export interface MenuProps {
    items: MenuItem[];
}



export interface Category{
    id?:number;
    name:string;
    createBy?:string;
    createTime?:string;
    updateBy?:string;
    updateTime?:string;
}

export interface Comment{
    id?:number;
    recipeId:number;
    userId:number;
    comment:string;
    createBy?:string;
    createTime?:string;
    updateBy?:string;
    updateTime?:string;
}