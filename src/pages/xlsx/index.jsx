import React, { useEffect, useState } from 'react'
import { Button, Table, Form, Input } from 'antd'
// import { exportExcel, importsExcel } from 'utils/excel'
const ReactExcel = props => {
  const [list, actionList] = useState([])
  useEffect(() => {
    if (list > 0) {
    }
  }, [list])

  return (
    <input
      type="file"
      // onChange={e => {
      //   importsExcel(e).then(
      //     function (data) {
      //       console.log(data)
      //       actionList(data)
      //     },
      //     function (data) {
      //       console.log(data)
      //     }
      //   )
      // }}
      id="imFile"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
    />
  )
}

export default ReactExcel
