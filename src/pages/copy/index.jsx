import React, { useState, useEffect } from 'react'
import { Button, Table, Form, Input, message, Modal } from 'antd'
// import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CopyToClipboard } from './react-copy-to-clipboard.min.js'
import copy from 'copy-to-clipboard'
import ClipboardJS from './clipboard.min'

const About = props => {
  const [state, setstate] = useState('')
  const [stateValue] = useState('这是要复制的内容，这是要复制的内容')
  const [copied, setcopied] = useState(false)
  const options = {
    debug: true,
    message: 'Press #{key} to copy'
    // onCopy:function(clipboardData){
    //   console.log();
    // }
  }
  // const clipboard = new ClipboardJS('.btn')
  const clipboard = new ClipboardJS('.Btn')
  clipboard.on('success', function (e) {
    console.log('e', e)
    console.info('Action:', e.action)
    console.info('Text:', e.text)
    console.info('Trigger:', e.trigger)
    message.success('复制成功')
    e.clearSelection()
  })
  console.log('clipboard', clipboard)
  // clipboard.on('error', function (e) {
  //   console.error('Action:', e.action)
  //   console.error('Trigger:', e.trigger)
  // })
  useEffect(() => {
    return () => {
      clipboard.destroy()
    }
  }, [])

  const uploading = () => {
    Modal.success({
      content: (
        <Button className="Btn" data-clipboard-text={text.replace(/,/g, '\n')}>
          Copy to clipboard
        </Button>
      )
    })
  }

  const text =
    '这是要复制的内容，，这是要复制的内容,这是要，是要复制的内容，，这是要复制的内容,这是是要复制的内容，，这是要复制的内容,这是是要复制的内容，，这是要复制的内容,这是是要复制的内容，，这是要复制的内容,这是这是要复制的内容,这是要复，这是要复制的内容,这是要复，这是要复制的内容,这是要复，这是要复制的内容,这是要复，这是要复制的内容,这是要复，这是要复制的内容,这是要复，这是要复制的内容,这是要复，这是要复制的内容,这是要复，这是要复制的内容,这是要复，这是要复制的内容,这是要复复要复制的内容，这是要复制的内容这是要复制的内容，这是要复制的内容这是要复制的内容，这是要复制的内容这是要复制的内容，这是要复制的内容这是要复制的内容，这是要复制的内容,这是要复制的内容，这是要复制的内容,,,这是要复制的内容，这是要复制的内容'
  return (
    <div>
      <div>{stateValue}</div>
      {/* <button className="btn" data-clipboard-text={stateValue}>
        Copy to clipboard
      </button>*/}

      <Button
        onClick={() => {
          uploading()
        }}
      >
        {' '}
        +
      </Button>

      {/* <Button
        onClick={() => {
          copy(stateValue, options)
        }}
      >
        点击复制
      </Button> */}

      {/* <CopyToClipboard
        text={text.replace(/,/g, '\n')}
        onCopy={(e) => {
          message.success('复制成功')
        }}
      >
        <Button>点击复制</Button>
      </CopyToClipboard> */}

      {/* {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}*/}
      <Input.TextArea style={{ height: 500 }}></Input.TextArea>
    </div>
  )
}
export default About
