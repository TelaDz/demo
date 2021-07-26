import React, { useState, useEffect } from 'react'
import { Button, Table, Form, Input } from 'antd'
import request from 'utils/requestcancelToken.js'
import { useText } from '../../../hooks'

const About = props => {
  const axios = async key => {
    let res = await request(`/api/menus`, { name: '123', age: 12 })
    console.log(res)
  }
  const text = useText('123')
  // useEffect(() => {
  //   hellow()
  // }, [])
  return (
    <>
      {/* <Button
        onClick={() => {
          axios('index')
        }}
      >
        index
      </Button> */}
      {text}
      <Button
        onClick={() => {
          axios('new')
        }}
      >
        new
      </Button>
      {/* <Button
        onClick={() => {
          axios('create')
        }}
      >
        create
      </Button> */}
    </>
  )
}
export default About
