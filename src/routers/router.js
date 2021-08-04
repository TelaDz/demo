import { Router, Route, Redirect, Switch } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
import routerMap from './routerMap'
const Home = lazy(() => import('../pages/home'))
const Echarts = lazy(() => import('../pages/echarts'))

const Routers = props => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {routerMap.map((item, index) => (
        <Route path={item.path} component={item.component} key={item.path + index} />
      ))}
      {/* <Route path="/echarts/:id" component={Echarts} /> */}
      <Route path="/" component={Home} />
      <Redirect exact path="*" to="/" />
    </Switch>
  </Suspense>
)

export default Routers
