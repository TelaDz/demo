import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const About = (props) => {
    console.log('About',props);
    return <>About <br /> <Link to='/'>home</Link>
        <br />
        <Button onClick={() => {
            props.history.push('/about?1234123')
        }}>Button</Button>
        <br />
        <Button onClick={() => {
            props.history.push({
                pathname: '/',
                state: '123'
            })
        }}>Button</Button>
    </>
}
export default About