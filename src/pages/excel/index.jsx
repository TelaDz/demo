import React, { useState, useEffect, useRef } from 'react'
import { Button, Table, Form, Input } from 'antd'
import ExcelJS from 'exceljs'

const Excel = props => {
  // const excleDom = useRef(null)
  // const workbook = new ExcelJS.Workbook()
  // workbook.creator = 'Me'
  // workbook.lastModifiedBy = 'Her'
  // workbook.created = new Date(1985, 8, 30)
  // workbook.modified = new Date()
  // workbook.lastPrinted = new Date(2016, 9, 27)
  // workbook.properties.date1904 = true
  // workbook.views = [
  //   {
  //     x: 0,
  //     y: 0,
  //     width: 10000,
  //     height: 20000,
  //     firstSheet: 0,
  //     activeTab: 1,
  //     visibility: 'visible'
  //   }
  // ]
  // const sheet = workbook.addWorksheet('My Sheet')
  useEffect(() => {}, [])
  return <></>
}
export default Excel
// import React, { useState, useEffect } from 'react'
// import { Button } from 'antd'
// import 'antd/dist/antd.css'
// import Excel from 'exceljs'

// /**
//   text?: string // 下载按钮内文字
//   icon?: string // 按钮 icon
//   size?: string // 按钮尺寸
//   type?: string // 按钮类型
//   execlTitle?: string // 导出execl文件名
//   tableColumns: [] // 表头
//   selectedUrl: string // 接口地址url
//  */

// const TableDownload = ({
//   size = 'default',
//   text = '导出',
//   type = 'default',
//   icon = 'download',
//   selectedUrl,
//   execlTitle = '表格数据'
// }) => {
//   const [isLoading, setLoading] = useState(false)
//   const [tableRows, setTableData] = useState([])
//   const [tableColumns, setTableColumns] = useState([])

//   // useEffect(() => {
//   //   setLoading(true)
//   //   fetch(selectedUrl)
//   //     .then(response => response.json())
//   //     .then(({ data }) => {
//   //       setTableColumns(data && data.columns)
//   //       setTableData(data && data.rows)
//   //       setTimeout(() => {
//   //         setLoading(false)
//   //       }, 2000)
//   //     })
//   // }, [selectedUrl])

//   // 执行下载表格
//   const fetchTableDatas = () => {
//     // 初始化 创建工作簿
//     const workbook = new Excel.Workbook()
//     // 设置工作簿属性
//     workbook.creator = 'admin'
//     workbook.lastModifiedBy = 'admin'
//     workbook.created = new Date()
//     workbook.modified = new Date()

//     // 添加工作表
//     let sheet = workbook.addWorksheet('sheet')

//     let columns = []
//     // 表头格式化
//     tableColumns.map(item => {
//       columns.push({
//         header: item.title,
//         key: item.key || item.dataIndex,
//         width: parseInt(item.width / 6, 10) || 40
//       })
//       return true
//     })

//     // 添加表头
//     sheet.columns = columns

//     if (Array.isArray(tableRows)) {
//       // 添加表格数据
//       sheet.addRows(tableRows)

//       // 设置每一列样式 居中
//       const row = sheet.getRow(1)
//       row.eachCell((cell, rowNumber) => {
//         sheet.getColumn(rowNumber).alignment = {
//           vertical: 'middle',
//           horizontal: 'center'
//         }
//       })

//       // 将表格数据转为二进制
//       workbook.xlsx.writeBuffer().then(buffer => {
//         writeFile(`${execlTitle}.xlsx`, buffer)
//       })
//     } else {
//       alert('下载失败')
//     }
//   }

//   // 将二进制转为Excel并下载
//   const writeFile = (fileName, content) => {
//     let a = document.createElement('a')
//     let blob = new Blob([content], { type: 'text/plain' })

//     a.download = fileName
//     a.href = URL.createObjectURL(blob)

//     a.click()
//   }

//   return (
//     <div style={{ padding: 10, margin: 10, border: '1px solid red' }}>
//       {/* <Button
//         type={type}
//         icon={icon || ''}
//         size={size}
//         // loading={isLoading}
//         onClick={fetchTableDatas}
//       >
//         {isLoading ? '正在导出' : text}
//       </Button> */}
//     </div>
//   )
// }

// export default TableDownload
