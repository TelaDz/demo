import React from 'react'
import { Button, Table, Form, Input } from 'antd'
import { post } from 'utils/mAxios.js'

const About = props => {
  console.log('About', props)
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
  const onFinish = value => {
    post('/api/num', value)
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
      <Table columns={columns} dataSource={dataSource}></Table>
      <Button
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
      </Button>
    </>
  )
}
export default About
