import React from 'react'
import { Typography, Row, Col } from 'antd'
import Mian from './Mian'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const { Title} = Typography
const Home = () => {
    return (
        <div className="container mt">
            <Title level={5} className="text-center"><a href="" className="text-primary"> Hirring in a hurry? - </a> Find talented pros in record time with upwork and keep business moving.</Title>
            <div className="mt">
                <Row gutter={16}>
                    <Col span={6} md={6} sm={24} xs={24}>
                        <LeftSide />
                    </Col>
                    <Col span={12} md={12} sm={24} xs={24}>
                        <Mian />
                    </Col>
                    <Col span={6} md={6} sm={24} xs={24}>
                        <RightSide />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home
