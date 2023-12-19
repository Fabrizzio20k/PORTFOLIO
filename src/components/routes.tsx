interface Route {
    name: string;
    path: string;
}

const routes: Route[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Skills',
        path: '/skills',
    },
    {
        name: 'Projects',
        path: '/projects',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
]

export { routes };