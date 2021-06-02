import React, { useState } from 'react'
import { useAntdTable } from 'ahooks'
import { Button, Table, Form, Input, Row, Col } from 'antd'
// import { post } from 'utils/mAxios.js'
// import request from 'utils/request.js'
import request from 'utils/requestcancelToken.js'
import { connect } from 'react-redux'
const Menu = props => {
  const [form] = Form.useForm()
  const [dataSource, setdataSource] = useState([])
  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      render: (t, r, i) => i + 1
    },
    {
      title: '菜单',
      dataIndex: 'id'
    },
    {
      title: '父级菜单',
      dataIndex: 'id'
    },
    {
      title: '编辑',
      dataIndex: 'id',
      render: (t, r, i) => (
        <div>
          <a
            onClick={e => {
              e.defaultPrevented()
            }}
          >
            编辑
          </a>
          <a
            onClick={e => {
              e.defaultPrevented()
            }}
          >
            删除
          </a>
        </div>
      )
    }
  ]

  const search = async values => {
    console.log('search')
  }
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
  }
  return (
    <>
      <Form form={form} {...layout} onFinish={search}>
        <Row>
          <Col span={6}>
            <Form.Item name="menuName" label="菜单">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="path" label="路由地址">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button htmlType="submit" type="primary" className="btn">
                查询
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button className="btn">清空</Button>
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
