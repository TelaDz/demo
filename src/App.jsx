import React from 'react'
import { connect } from 'react-redux'
import Routers from './routers'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import './App.less'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
const App = props => {
  console.log(props)
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="header"></Header>
      <Layout>
        <Sider
          width={200}
          style={
            {
              // height: '100vh',
              // overflow: 'auto',
              // position: 'fixed',
              // left: 0
            }
          }
          // breakpoint="lg"
          // collapsedWidth="0"
          className="site-layout-background"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">
                <Link to="/">home</Link>{' '}
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/other">other</Link>{' '}
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/about">about</Link>{' '}
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/">option4</Link>{' '}
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
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
