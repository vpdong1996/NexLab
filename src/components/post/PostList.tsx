import { Col, Row } from "antd";
import React from "react";
import { Post } from "../../types/Post";
import PostItem from "./PostItem";

interface PostListProps {
  posts: Post[] | undefined;
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <Row gutter={[24, 24]}>
      {posts?.map((post) => (
        <Col key={`${post.id}-${post.title}`} span={24}>
          <PostItem key={post.id} post={post} />
        </Col>
      ))}
    </Row>
  );
};

export default PostList;
