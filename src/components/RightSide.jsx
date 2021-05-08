import React from 'react'
import { Card, Typography, Avatar, Button, Affix } from 'antd'

const { Title, Link } = Typography
const { Meta } = Card
const RightSide = () => {
    return (
        <React.Fragment>
            <Card>
                <span className="display-flex">
                    <Title level={5}>Add to your feed</Title>
                    <img className="ml-auto" src="images/feed-icon.svg" alt="feed" />
                </span>
                <Meta
                    className="mt-1"
                    avatar={
                    <Avatar src="/images/hash-tag.png" />
                    }
                    title="#LinkedIn"
                    description={<Button>Follow</Button>}
                />
                <Meta
                className="mt-3"
                    avatar={
                    <Avatar src="/images/hash-tag.png" />
                    }
                    title="#Video"
                    description={<Button>Follow</Button>}
                />
                <div className="mt-3">
                    <Link href="" target="" className="text-primary"> View all recommendations </Link>
                    <img className="ml-1" src="images/right-icon.svg" alt='right' />
                </div>
            </Card>
            <Affix>
                <Card className="mt-3" cover={<img alt="example" src="/images/job.jpg" />} />
            </Affix>
        </React.Fragment>
    )
}

export default RightSide
