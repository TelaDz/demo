import { Route, Redirect, Switch } from 'react-router-dom'

import React, { lazy, Suspense } from 'react'
import FrontAuth from './FrontAuth'
const Home = lazy(() => import('../pages/home'))
const About = lazy(() => import('../pages/about'))

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* <FrontAuth /> */}
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
        <Redirect exact path="*" to="/" />
      </Switch>
    </Suspense>
  )
}
export default Routers
