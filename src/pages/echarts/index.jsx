import React, { useState, useRef, useEffect } from 'react'
import { Button, Table, Form, Input } from 'antd'
import { connect } from 'react-redux'
import * as echarts from 'echarts'
// import 'echarts/map/js/china.js' // 引入中国地图数据
import option from './echarts1'
// import geoJSON from './100000_full.json'
import geoJSON from 'lib/map/js/data.js'
import axios from 'utils'

const Echarts = props => {
  console.log('Echarts props', props)
  const echartsDiv = useRef(null)

  const getJson = async () => {
    // let res = await axios('/api/data', {}, { method: 'get' })
    const parme = {
      url: '/api/data',
      method: 'get'
    }
    let res = await axios(parme)
    // echarts.registerMap('china', { geoJSON })
    console.log(res)
    let myChart = echarts.init(echartsDiv.current)
    myChart.setOption(option)
  }

  useEffect(() => {
    console.log(geoJSON)
    echarts.registerMap('china', { geoJSON })
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
      <div id="main" ref={echartsDiv} style={{ width: 600, height: 500 }}></div>
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
