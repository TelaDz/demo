import React, { useState, useEffect } from 'react'
import { Button, Table, Form, Input } from 'antd'
import { useFetch } from '../../../hooks/useFetch'
import request from 'utils/requestcancelToken.js'

const About = props => {
  const axios = async key => {
    let res = await request(`/api/menus`, { name: '123', age: 12 })
    console.log(res)
  }
  // const hellow = async () => {
  //   let hellowWord = await useFetch('/hellow')
  //   console.log('hellowWord', hellowWord)
  // }

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
