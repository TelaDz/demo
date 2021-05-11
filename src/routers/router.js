import { Router, Route, Redirect, Switch } from 'react-router-dom'
// import { Router, Route,  } from 'react-router';
import React, { lazy, Suspense } from 'react'
import routerMap from './routerMap'
const Home = lazy(() => import('../pages/home'))

const Routers = props => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {routerMap.map(item => {
        return <Route path={item.path} component={item.component} key={item.name} />
      })}
      <Route path="/" component={Home} />
      <Redirect exact path="*" to="/" />
    </Switch>
  </Suspense>
)

export default Routers
