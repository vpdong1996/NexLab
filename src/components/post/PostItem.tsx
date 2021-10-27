import { Card } from "antd";
import React from "react";
import { Post } from "../../types/Post";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <Card hoverable title={post.title} style={{ width: 500, margin: "0 auto" }}>
      <p>{post.body}</p>
    </Card>
  );
};

export default PostItem;
