import React, { useState, useRef, useEffect } from 'react'
import { Button, Table, Form, Input } from 'antd'
import { connect } from 'react-redux'
import * as echarts from 'echarts'
// import 'echarts/map/js/china.js' // 引入中国地图数据
import option from './echarts1'
import geoJson from './100000_full.json'
echarts.registerMap('china', { geoJSON: geoJson })

const Echarts = props => {
  console.log('Echarts props', props)
  const echartsDiv = useRef(null)

  useEffect(() => {
    console.log('echartsDiv')
    let myChart = echarts.init(echartsDiv.current)
    myChart.setOption(option)
  }, [])
  useEffect(() => {
    let myChart = echarts.init(echartsDiv.current)
    myChart.on('click', e => {
      console.log('e', e)
    })
  })
  return (
    <>
      <div id="main" ref={echartsDiv} style={{ width: 500, height: 500 }}></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Echarts)
