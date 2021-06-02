import { Router, Route, Redirect, Switch } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
import routerMap from './routerMap'
const Home = lazy(() => import('../pages/home'))

const Routers = props => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {routerMap.map(item => {
        if (item.children) {
          return (
            <div>
              <Route path={item.path} component={item.component} key={item.name} />
              {item.children.map(i => (
                <Route path={i.path} component={i.component} key={i.name} />
              ))}
            </div>
          )
        } else {
          return <Route path={item.path} component={item.component} key={item.name} />
        }
      })}
      <Route path="/" component={Home} />
      <Redirect exact path="*" to="/" />
    </Switch>
  </Suspense>
)

export default Routers
