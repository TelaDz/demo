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
  // const columns = [
  //   {
  //     title: '序号',
  //     dataIndex: 'id',
  //     render: (t, r, i) => i + 1
  //   },
  //   {
  //     title: '菜单',
  //     dataIndex: 'id'
  //   },
  //   {
  //     title: '父级菜单',
  //     dataIndex: 'id'
  //   },
  //   {
  //     title: '编辑',
  //     dataIndex: 'id',
  //     render: (t, r, i) => (
  //       <div>
  //         <a
  //           onClick={e => {
  //             e.defaultPrevented()
  //           }}
  //         >
  //           编辑
  //         </a>
  //         <a
  //           onClick={e => {
  //             e.defaultPrevented()
  //           }}
  //         >
  //           删除
  //         </a>
  //       </div>
  //     )
  //   }
  // ]

  const search = async values => {
    console.log('search')
  }
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
  }

  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {}
    }
    // if (index === 4) {
    //   obj.props.colSpan = 0;
    // }
    return obj
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age'
      // render: renderContent,
    },
    {
      title: 'Home phone',
      dataIndex: 'tel',
      render: (value, record, index) => {
        const obj = {
          children: value,
          props: {}
        }
        // let rowSpan = 0
        // let num = 1
        let next = data[index + 1]
        if (value == next?.tel) {
          obj.props.rowSpan = index + data.length
        } else {
          obj.props.rowSpan = 0
        }
        return obj
      }
    },
    {
      title: 'Phone',
      // colSpan: 0,
      dataIndex: 'phone'
      // render: renderContent,
    },
    {
      title: 'Address',
      dataIndex: 'address'
      // render: renderContent,
    }
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      tel: '0575-22098909',
      phone: 18889898989,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      tel: '0575-22098909',
      phone: 18889898888,
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'London No. 2 Lake Park'
    },
    {
      key: '5',
      name: 'Jake White',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Dublin No. 2 Lake Park'
    }
  ]
  return (
    <>
      {/* <Form form={form} {...layout} onFinish={search}>
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
      </Form> */}
      {/* <Table columns={columns} dataSource={dataSource}></Table> */}
      <Table columns={columns} dataSource={data} bordered></Table>
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
