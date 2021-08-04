import React from 'react'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd'
import './App.less'
import { hot } from 'react-hot-loader/root'
import SidebarExample from './routers/routers'
const { Header } = Layout
const App = props => {
  console.log(props)
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="header"></Header>
      <Layout>
        <SidebarExample />
      </Layout>
    </Layout>
  )
}
// const mapStateToProps = (state /*, ownProps*/) => {
//   return {
//     // counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({ type: 'INCREMENT' }),
//         decrement: () => dispatch({ type: 'DECREMENT' }),
//         reset: () => dispatch({ type: 'RESET' })
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default hot(App)
