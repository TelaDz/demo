import React, { useState } from 'react'
import { Button, Table, Form, Input } from 'antd'
// import { post } from 'utils/mAxios.js'
// import request from 'utils/request.js'
import request from 'utils/requestcancelToken.js'

const About = props => {
  // console.log('About', props)
  const [user, setUset] = useState()
  const columns = [
    {
      title: '序号',
      dataIndex: 'key'
    }
  ]
  const dataSource = [
    {
      key: 0,
      name: 'Jack'
    }
  ]
  const onFinish = async value => {
    // post('/api/num', value)
    let res = await request('/api/add', value)
    console.log('res', res)
  }

  const get = async value => {
    // post('/api/num', value)
    let res = await request('/api/get')
    console.log('res', res)
  }
  const find = async value => {
    // post('/api/num', value)
    let res = await request('/api/find')
    console.log('res', res)
  }
  return (
    <>
      <Form onFinish={onFinish}>
        <Form.Item name="name" label="name">
          <Input></Input>
        </Form.Item>
        <Form.Item name="age" label="age">
          <Input></Input>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">submit</Button>
        </Form.Item>
      </Form>
      <Button onClick={get}>get</Button>
      <Button onClick={find}>find</Button>
      <Button>{user?.nickName}</Button>
      <Table columns={columns} dataSource={dataSource}></Table>
      {/* <Button
        onClick={() => {
          props.history.go(-1)
        }}
      >
        返回
      </Button>
      <Button
        onClick={() => {
          props.history.push('/')
        }}
      >
        Home
      </Button> */}
    </>
  )
}
export default About
