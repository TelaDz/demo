import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd'
// import tab from './tabsComponent'
import './index.less'
const { TabPane } = Tabs
const Tab = props => {
  function callback(key) {
    console.log(key)
  }
  // const TabsItem = ({ activeKey, panes }) => panes.filter(item => item.key === activeKey)
  // const renderTabBar = (props, DefaultTabBar) => {
  //   console.log('props', props)
  //   console.log('DefaultTabBar', DefaultTabBar)
  //   console.log('<DefaultTabBar {...props}  />', <DefaultTabBar {...props} />)
  //   // return <DefaultTabBar {...props}  />
  //   return <div>{1}</div>
  // }
  useEffect(() => {}, [])
  return (
    <div className="tabs-style-pane">
      <Tabs
        onChange={callback}
        //  renderTabBar={renderTabBar}
        // tabBarStyle={{background:'red'}}
        type="card"
        tabBarGutter={0}
      >
        <TabPane tab="abcdefg" key="1" className="number1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="王" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="啊实打实打算" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  )
}
export default Tab
