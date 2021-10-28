import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Modal } from "antd";
import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { POST_URL } from "../../commons/constants";
import { FormModalContext } from "../../contexts/form-modal";
import { messageNotification } from "../../helpers/utils";
import { PostService } from "../../services/post";
import useRequest from "../../services/useRequest";
import { Params } from "../../types/Param";
import { Post } from "../../types/Post";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const [confirmModalVisible, setConfirmModalVisible] = useState<true | false>(
    false
  );
  const [isLoading, setLoading] = useState<true | false>(false);
  const [_, modalDispatch] = useContext(FormModalContext);
  const params: Params = useParams();
  const {
    data: posts,
    response,
    mutate,
  } = useRequest<Post[]>(
    { url: `${POST_URL}?userId=${params.userId}` },
    { revalidateOnMount: false }
  );

  const onClickEdit = () => modalDispatch({ type: "open", data: post });

  const onClickDelete = () => setConfirmModalVisible(true);

  const onConfirm = async () => {
    if (!posts || !response) return;
    setLoading(true);
    const filteredPosts: Post[] = posts.filter((p) => p.id !== post.id);
    PostService.deletePost(post.id)
      .then((_) => {
        messageNotification("success", "Delete post successful");
        mutate({ ...response, data: filteredPosts }, false);
      })
      .catch((_) => messageNotification("error", "Request failed"))
      .finally(() => {
        setLoading(false);
        setConfirmModalVisible(false);
      });
  };

  return (
    <>
      <Card
        hoverable
        title={post.title}
        style={{ margin: "0 auto" }}
        actions={[
          <EditOutlined onClick={onClickEdit} key="edit" />,
          <DeleteOutlined onClick={onClickDelete} key="delete" />,
        ]}
      >
        <p>{post.body}</p>
      </Card>
      <Modal
        title="Modal"
        visible={confirmModalVisible}
        onCancel={() => setConfirmModalVisible(false)}
        footer={
          <>
            <Button>
              <span>Cancel</span>
            </Button>
            <Button type="primary" onClick={onConfirm} loading={isLoading}>
              Confirm
            </Button>
          </>
        }
      >
        <p>Are you sure you want to delete this post?</p>
      </Modal>
    </>
  );
};

export default PostItem;
