import { lazy } from 'react'

const lazyComponen = path => {
  return lazy(() => import('../pages' + path))
}

const routerMap = [
  {
    path: '/about',
    name: '关于',
    component: lazyComponen('/about'),
    auth: false
  },
  {
    path: '/menu/index',
    name: '菜单',
    component: lazyComponen('/menu'),
    auth: false
  },
  {
    path: '/menu/create',
    name: '菜单创建',
    component: lazyComponen('/menu/create'),
    auth: false
  },
  {
    path: '/otehr',
    name: '其他',
    component: lazyComponen('/other'),
    auth: false
  }
]
export default routerMap
