import { useParams } from "react-router";
import { useSWRConfig } from "swr";
import ContentWrapper from "../components/content-wrapper";
import PostContainer from "../components/post/PostContainer";
import useRequest from "../services/useRequest";
import { Post } from "../types/Post";

type paramsType = { userId: string };

const Posts = () => {
  const { userId }: paramsType = useParams();
  const request = {
    url: `/posts?userId=${userId}`,
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
  console.log("-0000", cache.get(JSON.stringify(request)));

  return (
    <ContentWrapper
      classes={["posts"]}
      isLoading={Boolean(!posts && isValidating)}
    >
      <PostContainer
        posts={posts}
        postMutation={postMutation}
        pureAxiosReponse={response}
      />
    </ContentWrapper>
  );
};

export default Posts;
