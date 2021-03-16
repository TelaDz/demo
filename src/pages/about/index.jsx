import React from 'react'
import { Button, Table } from 'antd'

const About = props => {
    console.log('About', props)
    const columns = [
        {
            title: '序号',
            dataIndex: 'key'
        }
    ]
    const dataSource = [
        {
            key: 0,
            name: 'Jack'
        }
    ]
    return (
        <>
            <Table columns={columns} dataSource={dataSource}></Table>
            <Button
                onClick={() => {
                    props.history.go(-1)
                }}
            >
                返回
            </Button>
            <Button
                onClick={() => {
                    props.history.push('/')
                }}
            >
                Home
            </Button>
        </>
    )
}
export default About
