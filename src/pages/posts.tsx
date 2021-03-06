import { useParams } from "react-router";
import { useSWRConfig } from "swr";
import { POST_URL, USER_URL } from "../commons/constants";
import BackButton from "../components/back-button";
import ContentWrapper from "../components/content-wrapper";
import PostContainer from "../components/post/PostContainer";
import useRequest from "../services/useRequest";
import { Post } from "../types/Post";
import { User } from "../types/User";

type paramsType = { userId: string };

const Posts = () => {
  const { userId }: paramsType = useParams();
  const request = {
    url: `${POST_URL}?userId=${userId}`,
  };
  const { cache } = useSWRConfig();
  const {
    data: posts,
    isValidating,
    response,
    mutate: postMutation,
  } = useRequest<Post[]>(request, {
    revalidateOnMount: !cache.get(JSON.stringify(request)),
  });

  const { data: userInfo } = useRequest<User>({ url: `${USER_URL}/${userId}` });

  return (
    <ContentWrapper
      classes={["posts"]}
      isLoading={Boolean(!posts && isValidating)}
    >
      <BackButton />
      <PostContainer
        userInfo={userInfo || ({} as User)}
        posts={posts}
        postMutation={postMutation}
        pureAxiosReponse={response}
      />
    </ContentWrapper>
  );
};

export default Posts;
