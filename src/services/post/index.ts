import axiosClient from "../globalInterceptorSetup";

export const POST_URL = "/posts";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostDto {
  userId: number;
  title: string;
  body: string;
}

interface PostUpdateDto extends Post {}

export const PostService = {
  // getPosts: () => {
  //   return axiosClient
  //     .get<Post[]>(POST_URL)
  //     .then((response) => response)
  //     .catch((error) => error);
  // },

  // getPostById: (id: number) => {
  //   return axiosClient
  //     .get<Post>(POST_URL, { params: { id } })
  //     .then((response) => response)
  //     .catch((error) => error);
  // },

  createNewPost<T>(post: PostDto) {
    return axiosClient
      .post<T>(POST_URL, post)
      .then((response) => response)
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
