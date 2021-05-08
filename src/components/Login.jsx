import React from 'react'
import { Row, Col, Button, Typography } from 'antd'

const { Title } = Typography
const Login = () => {
    return (
        <div className="container">
            <Row>
                <Col span={12}>
                    <a href="/">
                        <img src="/images/login-logo.svg" className="logo" width="150" alt="login" />
                    </a>
                </Col>
                <Col span={12}>
                    <div className="float-right">
                        <Button className="btn-j">Sign In</Button>
                        <Button className="ml-3 btn-primary" shape="round">Sign In</Button>
                    </div>
                </Col>
            </Row>
            <div className="mt">
                <Row gutter={24}>
                    <Col span={12} md={12} sm={24} xs={24}>
                        <Title className="ss_heading">Welcome to your professional community</Title>
                        <Button> <img src="/images/google.svg" alt="google" /> Singin with Google </Button>
                    </Col>
                    <Col span={12} md={12} sm={24} xs={24} className="hero_col_2">
                        <img src="/images/login-hero.svg" alt="hero" width="100%" />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Login
