import React, { useEffect } from 'react'
import { Card, Avatar, Typography, Image } from 'antd'
import { SendOutlined , LikeFilled, MessageFilled, ShareAltOutlined, WechatFilled } from '@ant-design/icons'

const { Title } = Typography
const MianPosts = (props) => {
    const { User, Posts, getPosts } = props
    useEffect(() => {
        getPosts()
        console.log(props)
    }, [])
    
    return (
        <React.Fragment>
        {Posts && Posts.map((post)=>(
            <Card
                className="mt-2"
                title={
                    <React.Fragment>
                    <a href="" className="float-right"><img src="images/ellipsis.svg" alt="..." /> </a>
                    <div className="display-flex">
                        <Avatar size={50} src={User && User.photoURL} />
                        <div className="ml-1">
                            <Title level={5}>{User && User.displayName}</Title>
                            <h5>Info / Date</h5>
                        </div>
                    </div>
                    <span>{post.description}</span>
                    </React.Fragment>
                }
                cover={
                    <Image src={post.image} alt="photo" width="100%" />
                }
                actions={[
                    <span> <LikeFilled key="like" /> Like</span>,
                    <span><MessageFilled key="comment" /> Comment</span>,
                    <span><ShareAltOutlined key="comment" /> Share</span>,
                    <span><SendOutlined key="send" /> Send</span>,
                ]}
            >
                <span> <WechatFilled /> 2 Comments</span>
            </Card>
        ))}
        </React.Fragment>
    )
}

export default MianPosts
