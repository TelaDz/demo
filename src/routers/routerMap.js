import { lazy } from 'react'

const About = lazy(() => import('../pages/about'))

const routerMap = [
    {
        path: '/about',
        name: 'About',
        component: About,
        auth: false
    }
]
export default routerMap
