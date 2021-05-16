import React from 'react'
import {Redirect} from 'react-router'
import { Row, Col, Menu, Input, Avatar } from 'antd'
import { SearchOutlined, HomeFilled, ShoppingFilled, ProfileFilled, CodepenOutlined } from '@ant-design/icons'

const { SubMenu } = Menu
const H_Header = (props) => {
    const {User, signOutAPI} = props
    return (
        <div className="container bg-white">
            {!User && <Redirect to='/' />}
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
                        <SubMenu key="SubMenu" title={<><Avatar size={40} src={User && User.photoURL} /> <span> {User && User.displayName} </span> </> }>
                            <Menu.Item key="Logout" onClick={()=>signOutAPI()}>
                                <span>Logout</span>
                            </Menu.Item>
                        </SubMenu>   
                    </Menu>
                </Col>
            </Row>  
        </div>
    )
}

export default H_Header
