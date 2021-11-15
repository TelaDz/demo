import React, { useState, useEffect } from 'react'

const TabCom = props => {
  const tabNum = [
    { title: '1', active: 'active', key: '1', className: '', children: <div>1</div> },
    { title: '2', active: '', key: '2', className: '', children: <div>2</div> },
    { title: '3', active: '', key: '3', className: '', children: <div>3</div> }
  ]
  const TabsItem = <div>TabsItem</div>
  const TabContent = ({ key, children }) => <div key={key}>{children}</div>
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {tabNum.map(item => (
          <div key={item.key} className={`${item.className} ${item.active}`}>
            {item.title}
          </div>
        ))}
      </div>
      <div>
        {tabNum.map(item => (
          <TabContent {...item}></TabContent>
        ))}
      </div>
    </div>
  )
}
export default TabCom
