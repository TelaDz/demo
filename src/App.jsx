import React from 'react'
import { connect } from 'react-redux'
import Routers from './routers/router'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import './App.less'
import routerMap from './routers/routerMap'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
const App = props => {
  console.log(props)
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="header"></Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="100">
                <Link to="/">home</Link>
              </Menu.Item>
              {routerMap.map((item, index) => (
                <Menu.Item key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Routers />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    // counter: state.counter
  }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({ type: 'INCREMENT' }),
//         decrement: () => dispatch({ type: 'DECREMENT' }),
//         reset: () => dispatch({ type: 'RESET' })
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default connect(mapStateToProps)(App)
