import { POST_URL } from "../../commons/constants";
import { PostDto, PostUpdateDto } from "../../types/Post";
import axiosClient from "../globalInterceptorSetup";

export const PostService = {
  createNewPost<T>(post: PostDto): Promise<T> {
    return axiosClient
      .post<T>(POST_URL, post)
      .then((response) => response.data)
      .catch((error) => error);
  },

  updatePost<T>(post: PostUpdateDto) {
    return axiosClient
      .put<T>(`${POST_URL}/${post.id}`, post)
      .then((response) => response)
      .catch((error) => error);
  },

  deletePost: (postId: number) => {
    return axiosClient.delete(`${POST_URL}/${postId}`).catch((error) => error);
  },
};
