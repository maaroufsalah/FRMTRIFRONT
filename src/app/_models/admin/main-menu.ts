export class MainMenu {
    id?: number;
    role?: string;
    title: string;
    link: string;
    icon: string;
    active?: boolean;
    children?: MainMenu[]=[];
}
export class MenuRole
{
    role:string;
    menu:MainMenu[]=[];
}