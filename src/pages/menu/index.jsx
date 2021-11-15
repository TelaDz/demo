import React, { useState } from 'react'
import { useAntdTable } from 'ahooks'
import { PaginatedParams } from 'ahooks/lib/useAntdTable'
import { Button, Form, Input, Table } from 'antd'
// import { post } from 'utils/mAxios.js'
// import request from 'utils/request.js'
import PriceInput from './type'
import request from 'utils/requestcancelToken.js'
import { connect } from 'react-redux'

const CustomInput = React.forwardRef(({ value, onChange }, ref) => (
  <Input ref={ref} value={value} onChange={onChange} />
))
const PriceInputInput = React.forwardRef(({ value, onChange }, ref) => (
  <PriceInput ref={ref} value={value} onChange={onChange} />
))

const getTableData = ({ current, pageSize }, formData) => {
  console.log('formData', formData)
  return {
    total: 0,
    list: []
  }
}
const Menu = props => {
  // const [form] = Form.useForm()
  // const [dataSource, setdataSource] = useState([])
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

  // const search = async values => {
  //   console.log('search')
  // }
  // const layout = {
  //   labelCol: { span: 6 },
  //   wrapperCol: { span: 18 }
  // }

  // const renderContent = (value, row, index) => {
  //   const obj = {
  //     children: value,
  //     props: {}
  //   }
  //   // if (index === 4) {
  //   //   obj.props.colSpan = 0;
  //   // }
  //   return obj
  // }

  // const columns = [
  //   {
  //     title: 'Name',
  //     dataIndex: 'name'
  //   },
  //   {
  //     title: 'Age',
  //     dataIndex: 'age'
  //     // render: renderContent,
  //   },
  //   {
  //     title: 'Home phone',
  //     dataIndex: 'tel',
  //     render: (value, record, index) => {
  //       const obj = {
  //         children: value,
  //         props: {}
  //       }
  //       // let rowSpan = 0
  //       // let num = 1
  //       let next = data[index + 1]
  //       if (value == next?.tel) {
  //         obj.props.rowSpan = index + data.length
  //       } else {
  //         obj.props.rowSpan = 0
  //       }
  //       return obj
  //     }
  //   },
  //   {
  //     title: 'Phone',
  //     // colSpan: 0,
  //     dataIndex: 'phone'
  //     // render: renderContent,
  //   },
  //   {
  //     title: 'Address',
  //     dataIndex: 'address'
  //     // render: renderContent,
  //   }
  // ]

  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     tel: '0575-22098909',
  //     phone: 18889898989,
  //     address: 'New York No. 1 Lake Park'
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     tel: '0575-22098909',
  //     phone: 18889898888,
  //     age: 42,
  //     address: 'London No. 1 Lake Park'
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     tel: '0575-22098909',
  //     phone: 18900010002,
  //     address: 'Sidney No. 1 Lake Park'
  //   },
  //   {
  //     key: '4',
  //     name: 'Jim Red',
  //     age: 18,
  //     tel: '0575-22098909',
  //     phone: 18900010002,
  //     address: 'London No. 2 Lake Park'
  //   },
  //   {
  //     key: '5',
  //     name: 'Jake White',
  //     age: 18,
  //     tel: '0575-22098909',
  //     phone: 18900010002,
  //     address: 'Dublin No. 2 Lake Park'
  //   }
  // ]

  const [form] = Form.useForm()

  // TODO filters and sorter
  const { tableProps, params, search } = useAntdTable(getTableData, {
    defaultPageSize: 5,
    form,
    cacheKey: 'tableProps',
    defaultParams: [{ current: 1, pageSize: 10 }, { name: '123' }]
  })

  // const { sorter = {}, filters = {} } = params[0] || ({} as any);
  const { type, changeType, submit, reset } = search || {}

  const columns = [
    {
      title: 'name',
      dataIndex: 'name.last'
    },
    {
      title: 'email',
      dataIndex: 'email'
    },
    {
      title: 'phone',
      dataIndex: 'phone'
    },
    {
      title: 'gender',
      dataIndex: 'gender'
    }
  ]

  const searchFrom = (
    <div style={{ marginBottom: 16 }}>
      <Form form={form} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Form.Item name="name">
          <CustomInput />
        </Form.Item>
        <Form.Item name="name">
          <PriceInputInput />
        </Form.Item>

        {type === 'advance' && (
          <>
            <Form.Item name="email">
              <Input placeholder="enter email" style={{ width: 140, marginRight: 16 }} />
            </Form.Item>
            <Form.Item name="phone">
              <Input placeholder="enter phone" style={{ width: 140, marginRight: 16 }} />
            </Form.Item>
          </>
        )}
        <Button type="primary" onClick={submit}>
          Search
        </Button>
        <Button onClick={reset} style={{ marginLeft: 8 }}>
          Reset
        </Button>
        <Button type="link" onClick={changeType}>
          {type === 'simple' ? 'Expand' : 'Close'}
        </Button>
      </Form>
    </div>
  )
  return (
    <div>
      {searchFrom}
      <Table columns={columns} rowKey="email" {...tableProps} />
    </div>
  )
  // return (
  //   <>
  //     {/* <Form form={form} {...layout} onFinish={search}>
  //       <Row>
  //         <Col span={6}>
  //           <Form.Item name="menuName" label="菜单">
  //             <Input></Input>
  //           </Form.Item>
  //         </Col>
  //         <Col span={6}>
  //           <Form.Item name="path" label="路由地址">
  //             <Input></Input>
  //           </Form.Item>
  //         </Col>
  //         <Col>
  //           <Form.Item>
  //             <Button htmlType="submit" type="primary" className="btn">
  //               查询
  //             </Button>
  //           </Form.Item>
  //         </Col>
  //         <Col>
  //           <Form.Item>
  //             <Button className="btn">清空</Button>
  //           </Form.Item>
  //         </Col>
  //       </Row>
  //     </Form> */}
  //     {/* <Table columns={columns} dataSource={dataSource}></Table> */}
  //     {/* <Table columns={columns} dataSource={data} bordered></Table> */}
  //   </>
  // )
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
