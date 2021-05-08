import React from 'react'
import { Card, Avatar, Typography, Image } from 'antd'
import { SendOutlined , LikeFilled, MessageFilled, ShareAltOutlined, WechatFilled } from '@ant-design/icons'

const { Title } = Typography
const MianPosts = () => {
    return (
        <Card
            title={
                <React.Fragment>
                <a href="" className="float-right"><img src="images/ellipsis.svg" alt="..." /> </a>
                <div className="display-flex">
                    <Avatar size={50} src="/images/user.svg" />
                    <div className="ml-1">
                        <Title level={5}>Title</Title>
                        <h5>Info / Date</h5>
                    </div>
                </div>
                <span>Discraption</span>
                </React.Fragment>
            }
            cover={
                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="photo" width="100%" />
            }
            actions={[
                <span> <LikeFilled key="like" /> Like</span>,
                <span><MessageFilled key="comment" /> Comment</span>,
                <span><ShareAltOutlined key="comment" /> Comment</span>,
                <span><SendOutlined key="send" /> Send</span>,
            ]}
        >
            <span> <WechatFilled /> 2 Comments</span>
        </Card>
    )
}

export default MianPosts
