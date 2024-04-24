export interface MenuItem {
    title: string;
    path: string;
    children?: MenuItem[];
}

export interface MenuProps {
    items: MenuItem[];
}