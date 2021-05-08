import React from 'react'
import { Card, Avatar, Button, Row, Col } from 'antd'
import MianPosts from './MianPosts'

const Mian = () => {
    return (
        <React.Fragment>
            <Card>
                <div className="display-flex">
                    <Avatar size={50} src="/images/user.svg" />
                    <Button shape="round" className="ml-1 mt-1" block>Start a Post</Button>
                </div>
                <Row className="mt-2">
                    <Col span={6}>
                        <Button>
                            <img src="/images/photo-icon.svg" alt="photo" />
                            <span>Photo</span>
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button>
                            <img src="/images/video-icon.svg" />
                            <span>Video</span>
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button>
                            <img src="/images/event-icon.svg" />
                            <span>Event</span>
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button>
                            <img src="/images/article-icon.svg" />
                            <span>Write Article</span>
                        </Button>
                    </Col>
                </Row>
            </Card>
            <div className="mt-3">
                <MianPosts />
            </div>
        </React.Fragment>
    )
}

export default Mian
