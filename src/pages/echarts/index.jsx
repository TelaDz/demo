import React, { useState, useRef, useEffect } from 'react'
import { Button, Table, Form, Input } from 'antd'
import { useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import * as echarts from 'echarts'
import { optionRegion } from './option'
import geoJSON from './china.js'

import axios from 'utils'
echarts.registerMap('china', { geoJSON: geoJSON.china })
const area = Object.keys(geoJSON)
let myChart
var res = [
  {
    name: '上海',
    value: [121.48, 31.22],
    sub: 20
  }
]
var falt = [
  {
    name: '武汉',
    value: [114.31, 30.52],
    sub: 20
  }
]
const Echarts = props => {
  const echartsDiv = useRef(null)
  const [currentArea, setCurrentArea] = useState('china')
  // const history = useHistory()
  useEffect(() => {
    initEcharts()
    return () => {
      myChart.dispose()
    }
  }, [])
  const initEcharts = (name = 'china') => {
    myChart = echarts.init(echartsDiv.current)
    const option = optionRegion(name, res, falt)
    myChart.resize()
    myChart.on('click', 'geo', e => {
      // myChart.on('click', e => {
      console.log('e1', e)
      if (area.includes(e.name)) {
        setCurrentArea(e.name)
        updataMap(e.name)
      }
    })
    myChart.on('click', 'series', e => {
      // myChart.on('click', e => {
      console.log('e2', e)
    })
    myChart.on('click', e => {
      // myChart.on('click', e => {
      console.log('e3', e)
      const history = myChart.getOption()
      console.log('history', history)
    })
    myChart.setOption(option)
  }
  const updataMap = name => {
    myChart.dispose()
    echarts.registerMap(name, { geoJSON: geoJSON[name] })
    initEcharts(name)
  }
  return (
    <>
      <div id="main" ref={echartsDiv} style={{ width: 600, height: 500 }}></div>
      {currentArea !== 'china' ? (
        <Button
          onClick={() => {
            updataMap('china')
            setCurrentArea('china')
          }}
        >
          返回
        </Button>
      ) : null}
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
// const getJson = async () => {
//   // let res = await axios('/api/data', {}, { method: 'get' })
//   const parme = {
//     url: '/api/data',
//     method: 'get'
//   }
//   let res = await axios(parme)
//   // echarts.registerMap('china', { geoJSON })
//   console.log(res)
//   let myChart = echarts.init(echartsDiv.current)
//   myChart.setOption(option)
// }
// myChart.on('click', 'geo', e => {
// myChart.on('click', e => {
//   setName(e.name)
//   if (names.includes(e.name)) {
//     myChart.clear()
//     echarts.registerMap(e.name, { geoJSON: geoJSON[e.name] })
//   }
// })
// const setMap = (region = 'china') => {
//   myChart.dispose()
//   echarts.registerMap('china', { geoJSON: geoJSON[region] })
//   initEcharts()
// }
