import React from 'react'
import { Row, Col, Menu, Input } from 'antd'
import { SearchOutlined, HomeFilled, ShoppingFilled, ProfileFilled, MessageFilled, BellFilled } from '@ant-design/icons'

const H_Header = () => {
    return (
        <div className="container pt-0">
            <Row gutter={24}>
                <Col span={12} md={12}>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt="home-logo" />
                    </a>
                    <Input className="search_bar" suffix={<SearchOutlined />} />
                    
                </Col>
                <Col span={12} md={12}>
                    <Menu mode="horizontal" className="menu">
                        <Menu.Item key="home">
                            <HomeFilled />
                            <span>Home</span>
                        </Menu.Item>
                        <Menu.Item key="network">
                            <ProfileFilled />
                            <span>My Network</span>
                        </Menu.Item>
                        <Menu.Item key="job">
                            <ShoppingFilled />
                            <span>Jobs</span>
                        </Menu.Item>
                        <Menu.Item key="14">
                            <MessageFilled />
                            <span>Messaging</span>
                        </Menu.Item>
                        <Menu.Item key="15">
                            <BellFilled />
                            <span>Notification</span>
                        </Menu.Item>    
    
                    </Menu>
                </Col>
            </Row>  
        </div>
    )
}

export default H_Header
