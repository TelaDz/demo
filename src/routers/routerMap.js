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
  }
]
export default routerMap
