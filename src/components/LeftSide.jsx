import React from 'react'
import { Card, Avatar, Typography, Divider } from 'antd'

const { Title, Link } = Typography
const LeftSide = ({User}) => {
    return (
        <div>
            <Card
                cover={
                    <img
                        alt="example"
                        src="/images/card-bg.svg"
                    />
                }>
                <div className="text-center">
                    <Avatar className="photo-upload" size={50} src="/images/photo.svg" />
                    <Title level={4}>Welcome, {User && User.displayName}!</Title>
                    <Link href="" target="" className="text-primary">Add a photo</Link>
                </div>
                <Divider />
                <Link href="" target="" className="text-dark">Connections</Link>
                <br />
                <span>
                    <Link href="" target="" className="text-dark">Grow your network</Link>
                    <img className="float-right" src="/images/widget-icon.svg" />
                </span>
                <Divider />
                <span>
                    <img src="/images/item-icon.svg" alt="logo" />
                    <Link href="" target="" className="text-dark ml-1">My Items</Link>
                </span>
            </Card>
            <Card className="mt-3" title={
                <React.Fragment>
                    <Link href="" target="" className="text-primary">Groups</Link>
                    <br />
                    <span>
                        <Link href="" target="" className="text-primary">Events</Link>
                        <img src="/images/plus-icon.svg" className="float-right" alt="logo" />
                    </span>
                    <br />
                    <Link href="" target="" className="text-primary">Followed Hashtags</Link>
                </React.Fragment>
            }>  
                <div className="text-center">
                    <Link href="" target="" className="text-dark text-center">Discover more</Link>
                </div>
            </Card>
        </div>
    )
}

export default LeftSide
