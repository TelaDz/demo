import React, { useState } from 'react'
import { Button, Table, Form, Input, Row, Col } from 'antd'
// import { post } from 'utils/mAxios.js'
// import request from 'utils/request.js'
import request from 'utils/requestcancelToken.js'
import { connect } from 'react-redux'
const Menu = props => {
  const [form] = Form.useForm()
  const columns = [
    {
      title: '序号',
      dataIndex: 'key'
    }
  ]
  const dataSource = []
  const onFinish = async value => {
    console.log('onFinish', value)
    let res = await request('/api/createMenu', value)
    console.log('res', res)
  }
  const search = async values => {
    let res = await request('/api/queryMenuList', values)
    console.log('res', res)
  }
  // const get = async value => {
  //   // post('/api/num', value)
  //   let res = await request('/api/get')
  //   console.log('res', res)
  // }
  // const find = async value => {
  //   // post('/api/num', value)
  //   let res = await request('/api/find')
  //   console.log('res', res)
  // }

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }
  return (
    <>
      <Form {...layout} onFinish={onFinish}>
        <Row gutter={40}>
          <Col span={8}>
            <Form.Item name="menuName" label="menuName">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="path" label="path">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="parentPath" label="parentPath">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="level" label="level">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="icon" label="icon">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <Button htmlType="submit">submit</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {/* <Button onClick={get}>get</Button>
      <Button onClick={find}>find</Button> */}
      {/* <Button
        onClick={() => {
          props.dispatch({
            type: 'ADD_USER',
            userInfo: {
              name: 'zhangpeng',
              age: 16
            }
          })
        }}
      >
        ADD_USER
      </Button>
      <Button
        onClick={() => {
          props.dispatch({
            type: 'DELETE_USER'
          })
        }}
      >
        DELETE_USER
      </Button>
      <Button
        onClick={() => {
          props.dispatch({
            type: 'OTHER'
          })
        }}
      >
        OTHER
      </Button> */}
      <Form form={form} {...layout} onFinish={search}>
        <Row gutter={40}>
          <Col span={8}>
            <Form.Item name="menuName" label="menuName">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="path" label="path">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="parentPath" label="parentPath">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="level" label="level">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <Button htmlType="submit">search</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table columns={columns} dataSource={dataSource}></Table>
    </>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    global: state.global
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)
// export default connect()(About)
