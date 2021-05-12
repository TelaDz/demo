import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import routerMap from '../../routers/routerMap'

const Home = props => {
  console.log('Home', props)
  return (
    <>
      Home
      <br />
      {routerMap.map(item => (
        <Button key={item.path} style={{ margin: 10 }}>
          <Link to={item.path}>{item.name} </Link>
        </Button>
      ))}
    </>
  )
}
export default Home
