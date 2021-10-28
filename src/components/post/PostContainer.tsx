import { AxiosResponse } from "axios";
import React from "react";
import { KeyedMutator } from "swr";
import { Post } from "../../types/Post";
import { User } from "../../types/User";
import PostList from "./PostList";
import PostModal from "./PostModal";

interface PostContainerInterface {
  posts: Post[] | undefined;
  userInfo: User;
  pureAxiosReponse: AxiosResponse<Post[]> | undefined;
  postMutation: KeyedMutator<AxiosResponse<Post[], any>>;
}

const PostContainer: React.FC<PostContainerInterface> = ({
  posts = [],
  postMutation,
  pureAxiosReponse,
  userInfo,
}) => {
  const addPostMutate = (data: Post) => {
    if (pureAxiosReponse)
      postMutation({ ...pureAxiosReponse, data: [data, ...posts] }, false);
  };

  const updatePostMutate = (data: Post) => {
    if (pureAxiosReponse) {
      const updatedList = posts.map((p) => {
        return p.id !== data.id ? p : data;
      });
      postMutation({ ...pureAxiosReponse, data: updatedList }, false);
    }
  };

  return (
    <>
      <h2>Welcome, {userInfo.name || ""}</h2>
      <PostModal
        addPostMutate={addPostMutate}
        updatePostMutate={updatePostMutate}
      />
      <PostList posts={posts} />
    </>
  );
};

export default PostContainer;
