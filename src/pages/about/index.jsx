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
    let res = await request('/api/num', value)
    // let res = await request('/api/num', value, { method: 'get' })
    console.log('res', res)
    setUset(res)
  }
  return (
    <>
      <Form onFinish={onFinish}>
        <Form.Item name="userName" label="userName">
          <Input></Input>
        </Form.Item>
        <Form.Item name="nickName" label="nickName">
          <Input></Input>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">submit</Button>
        </Form.Item>
      </Form>
      <Button>{user?.userName}</Button>
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
