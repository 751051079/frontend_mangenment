
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


export interface Recipe {
    id: number;
    title: string;
    description: string;
    image: string;
    createBy?:string;
    createTime?:string;
    updateBy?:string;
    updateTime?:string;
}

export interface Step{
    id:number;
    recipeId:number;
    stepNumber?:number;
    description:string;
    imageUrl?:string;
    createBy?:string;
    createTime?:string;
    updateBy?:string;
    updateTime?:string;
}

export interface RecipeCategory{
    recipeId:number;
    categoryId:number
}

export interface Seasoning{
    id:number;
    recipeId:number;
    description:string;
    createBy?:string;
    createTime?:string;
    updateBy?:string;
    updateTime?:string;
}

