import React, { useState } from 'react'
import { Button, Table, Form, Input } from 'antd'

import request from 'utils/requestcancelToken.js'

const About = props => {
  const axios = async key => {
    let res = await request(`/api/menus`, { name: '123', age: 12 })
    console.log(res)
  }
  return (
    <>
      <Button
        onClick={() => {
          axios('index')
        }}
      >
        index
      </Button>
      <Button
        onClick={() => {
          axios('new')
        }}
      >
        new
      </Button>
      <Button
        onClick={() => {
          axios('create')
        }}
      >
        create
      </Button>
    </>
  )
}
export default About
