import React, { useState } from 'react'
import { Modal, Input, Button, Avatar, Typography, Upload, Image } from 'antd'
import { FileImageFilled } from '@ant-design/icons'

const { Title } = Typography
const PostModal = (props) => {
    const {modelValue, handleCancel, handleOk, User, submitHandle} = props 
    const [post, setPost] = useState({
        description: "",
        file: ""
    })
    const handleImage = ({file, onSuccess}) =>{
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
        setPost({
            ...post,
            file: file
        })
    }
    const handleSubmit = () =>{
        if( post.file ==="" || post.description === "" ){
            alert("Post-Description and Photo must be required")
        }
        else{
            submitHandle(post)
            setPost({
                description: "",
                file: ""
            })
            handleOk()
        }
    }
    
    return (
        <div>
        <Modal
            title="Create a post"
            visible={modelValue}
            onOk={ ()=> handleOk() }
            onCancel={ ()=>handleCancel() }
            footer={[
                <Upload customRequest={handleImage} onRemove={() => setPost({...post, file: ""})} className="float-left"> 
                    <FileImageFilled className="float-left model-icon" />
                </Upload>,
                <Button key="submit" type="primary" onClick={handleSubmit} disabled={post.description === "" ? true : false}>
                  Submit
                </Button>,
              ]}
        >
            <div className="model">
                <div className="display-flex">
                    <Avatar size={50} src={User && User.photoURL} />
                    <Title level={5} className="mt-1 ml-2">{User && User.displayName}</Title>
                </div>
                <div className="mt-2">
                    <Input.TextArea rows={5} value={post.description} onChange={(e)=> setPost({ ... post, description: e.target.value}) } />
                </div>
                {post.file && <div className="mt-1">
                    <Image width="100%" src={URL.createObjectURL(post.file)} />
                </div>}
            </div>
        </Modal>
        </div>
    )
}

export default PostModal
