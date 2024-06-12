
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