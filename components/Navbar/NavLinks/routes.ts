export interface Route {
    name: string;
    href: string;
}

export const routes: Route[] = [
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Resume',
        href: '/resume',
    },
];