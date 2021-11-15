import React, { useState, useEffect, useRef } from 'react'
import { Button, Table, Form, Input } from 'antd'

const Canvas = props => {
  const canvas = useRef(null)
  const canvasBox = useRef(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  // const ctx = canvas.current.getContext('2d')
  useEffect(() => {
    // init()
    // console.log(ctx);
    // console.log(window.innerWidth);
    // console.log(window);
    // console.log(canvasBox.current.clientHeight);
    // console.log(canvasBox.current.clientWidth);
    console.log(canvasBox)
    setHeight(canvasBox.current.clientHeight)
    setWidth(canvasBox.current.clientWidth)
  }, [])
  const init = () => {
    // const canvas = document.getElementById('tutorial')
    // const ctx = canvas.getContext('2d')
    // ctx.fillStyle = '#000'
    // ctx.fillRect(10, 10, 55, 50)
    // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
    // ctx.fillRect(30, 30, 55, 50)
    // ctx.beginPath();
    // ctx.moveTo(150, 150);
    // ctx.lineTo(250, 150);
    // ctx.lineTo(200, 250);
    // ctx.fill();
    // ctx.font = "48px serif";
    // ctx.fillText("Hello world", 10, 50);
    // console.log('ctx',ctx);
    // let painting = false
    // ctx.fillStyle = 'black' //设置填充颜色
    // canvas.onmousedown = () => {
    //   painting = true //标记变量,用来控制程序是否运行,可类比红绿灯
    // }
    // canvas.onmousemove = e => {
    //   // console.log('e', e)
    //   if (painting === true) {
    //     ctx.beginPath() //开始一段新的路径
    //     //下面这个arc方法四个参数分别是：横纵坐标，宽高，开始角度，结束角度
    //     // ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI)
    //     ctx.arc(e.offsetX, e.offsetY, 10, 0, 2 * Math.PI)
    //     ctx.stroke() //绘制
    //     ctx.fill() //填充图形
    //   } else {
    //     // console.log('啥都不做')
    //   }
    // }
    // canvas.onmouseup = () => {
    //   painting = false
    // }
  }
  const style = {
    border: '1px solid black'
  }

  const onMouseMove = e => {
    // console.log(e)
  }
  return (
    <div ref={canvasBox}>
      <canvas id="tutorial" width={width} height={height} onMouseMove={onMouseMove} style={style}>
        current stock price: $3.15 +0.15
      </canvas>
    </div>
  )
}
export default Canvas
