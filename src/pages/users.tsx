import React from "react";
import UserContainer from "../components/user/UserContainer";
import useRequest from "../services/useRequest";
import ContentWrapper from "../components/content-wrapper";
import { User } from "../types/User";
import { USER_URL } from "../commons/constants";

const Users = () => {
  const { data: users, isValidating } = useRequest<User[]>({ url: USER_URL });

  return (
    <ContentWrapper
      classes={["user"]}
      isLoading={Boolean(!users && isValidating)}
    >
      <UserContainer users={users} />
    </ContentWrapper>
  );
};

export default Users;
