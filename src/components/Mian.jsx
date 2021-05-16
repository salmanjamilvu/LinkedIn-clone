import React, { useState } from 'react'
import { Card, Avatar, Button, Row, Col } from 'antd'
import MianPosts from '../Container/postContainer'
import PostModel from '../Container/postModelContainer'

const Mian = ({User}) => {
    const [state, setState] = useState(false)
    const handleOk = () => {
        setState(false);
    }
    const handleCancel = () => {
        setState(false)
    }
    return (
        <React.Fragment>
            <Card>
                <div className="display-flex">
                    <Avatar size={50} src={User && User.photoURL} />
                    <Button shape="round" className="ml-1 mt-1" block onClick={()=>  setState(true)}>Start a Post</Button>
                    <PostModel
                        modelValue={state}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                    />
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
