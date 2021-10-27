import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { Post, PostDto } from "../../types/Post";
import { useForm } from "antd/lib/form/Form";
import { useParams } from "react-router";
import { Params } from "../../types/Param";
import { PostService } from "../../services/post";
import { messageNotification } from "../../helpers/utils";

interface PostModalProps {
  post?: Post;
  handlePostMutate: (data: Post) => void;
}

const PostModal: React.FC<PostModalProps> = ({ post, handlePostMutate }) => {
  const [isModalVisible, setIsModalVisible] = useState<true | false>(false);
  const [isSubmitting, setIsSubmitting] = useState<true | false>(false);
  const params: Params = useParams();
  const [form] = useForm();
  const successMsg = `${post ? "Update" : "Create"} post successfully`;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: PostDto) => {
    setIsSubmitting((prev) => !prev);
    if (params.userId) values = { ...values, userId: parseInt(params.userId) };
    PostService.createNewPost<Post>(values)
      .then((response) => {
        handlePostMutate(response);
        messageNotification("success", successMsg);
        handleCancel();
      })
      .finally(() => setIsSubmitting((prev) => !prev));
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add new post
      </Button>
      <Modal
        title={post ? "Update Post" : "Create New Post"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            type="primary"
            form="postForm"
            key="submit"
            htmlType="submit"
            loading={isSubmitting}
          >
            Submit
          </Button>,
        ]}
        destroyOnClose={true}
      >
        <Form
          initialValues={{ body: "" }}
          form={form}
          name="postForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          preserve={false}
          onFinish={onFinish}
        >
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Post description" name="body">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default PostModal;
