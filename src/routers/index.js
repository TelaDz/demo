import { Route, Redirect } from 'react-router-dom'

import React, { lazy } from 'react'
import FrontAuth from './FrontAuth'
const Home = lazy(() => import('../pages/home'))

const Routers = () => {
    return (
        <>
            <FrontAuth />
            <Route path="/" component={Home} />
            <Redirect to="*" component={Home} />
        </>
    )
}
export default Routers
