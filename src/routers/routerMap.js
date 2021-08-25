import React, { lazy } from 'react'

const lazyComponent = path => {
  const Component = lazy(() => import('../pages' + path))
  return <Component />
}
const Home = lazy(() => import('../pages/home'))

console.log('home1', lazyComponent('home'))
console.log('home2', <div>home!</div>)
const routes = [
  {
    path: '/',
    exact: true,
    name: 'home',
    sidebar: () => <div>home!</div>,
    main: () => <Home />
  },
  {
    path: '/bubblegum',
    name: 'bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: '/shoelaces',
    name: 'shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: '/about',
    name: 'about',
    sidebar: () => <div>about!</div>,
    main: () => lazyComponent('/about')
  },
  {
    path: '/menu/index',
    name: 'menu',
    sidebar: () => <div>menu!</div>,
    main: () => <div>{lazyComponent('/menu')}</div>
  },
  {
    path: '/echarts',
    name: 'echarts',
    sidebar: () => <div>echarts!</div>,
    main: () => <div>{lazyComponent('/echarts')}</div>
  },
  // {
  //   path: '/excel',
  //   name: 'excel',
  //   sidebar: () => <div>excel!</div>,
  //   main: () => <div>{lazyComponent('/excel')}</div>
  // },
  {
    path: '/canvas',
    name: 'canvas',
    sidebar: () => <div>canvas!</div>,
    main: () => <div>{lazyComponent('/canvas')}</div>
  }
]
export default routes
// export default routerMap
// const routerMap = [
//   {
//     path: '/about',
//     name: '关于',
//     component: lazyComponen('/about'),
//     auth: false
//   },
//   {
//     path: '/menu/index',
//     name: '菜单',
//     component: lazyComponen('/menu'),
//     auth: false
//   },
//   {
//     path: '/menu/create',
//     name: '菜单创建',
//     component: lazyComponen('/menu/create'),
//     auth: false
//   },
//   {
//     path: '/other',
//     name: '其他',
//     component: lazyComponen('/other'),
//     auth: false
//   },
//   {
//     path: '/echarts/:id',
//     name: '中国',
//     component: lazyComponen('/echarts'),
//     auth: false
//   },
//   // {
//   //   path: '/province/:id?',
//   //   name: '省',
//   //   component: lazyComponen('/echarts/province.js'),
//   //   auth: false
//   // }
// ]
