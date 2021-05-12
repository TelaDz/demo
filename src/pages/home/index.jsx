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
      <Button>
        <Link to="/about">About </Link>
      </Button>
    </>
  )
}
export default Home
