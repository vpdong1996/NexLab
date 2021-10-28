import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { Post, PostDto } from "../../types/Post";
import { useForm } from "antd/lib/form/Form";
import { useParams } from "react-router";
import { Params } from "../../types/Param";
import { PostService } from "../../services/post";
import { messageNotification } from "../../helpers/utils";
import { FormModalContext } from "../../contexts/form-modal";

const { TextArea } = Input;
interface PostModalProps {
  addPostMutate: (data: Post) => void;
  updatePostMutate: (data: Post) => void;
}

const PostModal: React.FC<PostModalProps> = ({
  addPostMutate,
  updatePostMutate,
}) => {
  const [{ isVisible, data }, modalDispatch] = useContext(FormModalContext);
  const [isSubmitting, setIsSubmitting] = useState<true | false>(false);
  const params: Params = useParams();
  const [form] = useForm();
  const successMsg = `${data ? "Update" : "Create"} post successfully`;

  useEffect(() => {
    if (data) {
      form.setFieldsValue({ title: data.title, body: data.body });
    }
  }, [data]);

  const onClickAddNew = () => modalDispatch({ type: "open" });

  const onCancel = () => modalDispatch({ type: "close" });

  const onFinish = (values: PostDto) => {
    setIsSubmitting((prev) => !prev);

    // Update post
    if (data) {
      PostService.updatePost<Post>(data.id, {
        ...values,
        id: data.id,
        userId: data.userId,
      })
        .then((response) => {
          updatePostMutate(response);
          modalDispatch("close");
          messageNotification("success", successMsg);
        })
        .finally(() => setIsSubmitting((prev) => !prev));
      return;
    }

    // Delete Post
    if (params.userId) values = { ...values, userId: parseInt(params.userId) };
    PostService.createNewPost<Post>(values)
      .then((response) => {
        addPostMutate(response);
        modalDispatch("close");
        messageNotification("success", successMsg);
      })
      .finally(() => setIsSubmitting((prev) => !prev));
  };

  return (
    <>
      <Button type="primary" onClick={onClickAddNew}>
        Add new post
      </Button>
      <Modal
        title={data ? "Update Post" : "Create New Post"}
        visible={isVisible}
        onCancel={onCancel}
        destroyOnClose={true}
        focusTriggerAfterClose={false}
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
            <TextArea autoSize />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default PostModal;
