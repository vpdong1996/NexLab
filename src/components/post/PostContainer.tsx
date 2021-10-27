import { Axios, AxiosResponse } from "axios";
import React from "react";
import { KeyedMutator } from "swr";
import { Post } from "../../types/Post";
import PostList from "./PostList";
import PostModal from "./PostModal";

interface PostContainerInterface {
  posts: Post[] | undefined;
  pureAxiosReponse: AxiosResponse<Post[]> | undefined;
  postMutation: KeyedMutator<AxiosResponse<Post[], any>>;
}

const PostContainer: React.FC<PostContainerInterface> = ({
  posts = [],
  postMutation,
  pureAxiosReponse,
}) => {
  const handlePostMutate = (data: Post) => {
    if (pureAxiosReponse)
      postMutation({ ...pureAxiosReponse, data: [data, ...posts] }, false);
  };

  return (
    <>
      <h2>Welcome, Dong</h2>
      <PostModal handlePostMutate={handlePostMutate} />
      <PostList posts={posts} />
    </>
  );
};

export default PostContainer;
