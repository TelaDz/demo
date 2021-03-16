import { Route, Redirect, Switch } from 'react-router-dom'

import React, { lazy } from 'react'
import FrontAuth from './FrontAuth'
const Home = lazy(() => import('../pages/home'))
const About = lazy(() => import('../pages/about'))

const Routers = () => {
    return (
        <Switch>
            {/* <FrontAuth /> */}
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
            <Redirect exact path="*" to="/" />
        </Switch>
    )
}
export default Routers
