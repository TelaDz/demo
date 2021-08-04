import React, { useState, useRef, useEffect } from 'react'
import { Button, Table, Form, Input } from 'antd'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import * as echarts from 'echarts'
import option from './echarts1'
import geoJSON from 'lib/map/js/china.js'
import axios from 'utils'
let myChart
const Echarts = props => {
  const echartsDiv = useRef(null)
  const history = useHistory()

  // useEffect(() => {
  //   echarts.registerMap('china', { geoJSON: geoJSON.china })
  //   myChart = echarts.init(echartsDiv.current)
  //   myChart.setOption(option)
  // }, [])
  // useEffect(() => {
  //   myChart.on('click', 'geo', e => {
  //     console.log(e)
  //   })
  // }, [])

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
