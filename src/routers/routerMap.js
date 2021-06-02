import { lazy } from 'react'

const lazyComponen = path => {
  return lazy(() => import('../pages' + path))
}

const routerMap = [
  {
    path: '/about',
    name: 'About',
    component: lazyComponen('/about'),
    auth: false
  },
  {
    path: '/excel',
    name: 'Excel',
    component: lazyComponen('/excel'),
    auth: false
  },
  {
    path: '/menu',
    name: 'Menu',
    component: lazyComponen('/menu'),
    auth: false,
    children: [
      {
        path: '/menu/create',
        name: 'MenuCreate',
        component: lazyComponen('/menu/create'),
        auth: false
      }
    ]
  },
  {
    path: '/otehr',
    name: 'Other',
    component: lazyComponen('/other'),
    auth: false
  }
]
export default routerMap
