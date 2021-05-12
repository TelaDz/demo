import { Route, Redirect, Switch } from 'react-router-dom'
import routerMap from './routerMap'
import React, { lazy, Suspense } from 'react'
import FrontAuth from './FrontAuth'
const Home = lazy(() => import('../pages/home'))

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routerMap.map(item => (
          <Route path={item.path} component={item.component} key={item.name} />
        ))}
        <Route path="/" component={Home} />
        <Redirect exact path="*" to="/" />
      </Switch>
    </Suspense>
  )
}
export default Routers
