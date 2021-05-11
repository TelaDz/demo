import React from 'react'
import routerMap from './routerMap'
import { Route } from 'react-router-dom'

const Routers = () => {
    return routerMap.map(item => {
        return <Route path={item.path} component={item.component} key={item.name} />
    })
}
export default Routers
