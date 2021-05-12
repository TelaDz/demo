import { lazy } from 'react'

const componentRender = componentName => {
  return lazy(() => import(`../pages/${componentName}`))
}

const routerMap = [
  {
    path: '/about',
    name: 'About',
    component: componentRender('about'),
    auth: false
  },
  {
    path: '/excel',
    name: 'Excel',
    component: componentRender('excel'),
    auth: false
  },
  {
    path: '/xlsx',
    component: componentRender('xlsx'),
    name: 'Xlsx',
    auth: false
  }
]
export default routerMap
