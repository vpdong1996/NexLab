import React from "react";
import UserContainer from "../components/user/UserContainer";
import { User, USER_URL } from "../services/user";
import useRequest from "../services/useRequest";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import ContentWrapper from "../components/content-wrapper";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Users = () => {
  const { data: users, isValidating } = useRequest<User[]>({ url: USER_URL });
  return (
    <ContentWrapper>
      <div className="user">
        {!users && isValidating ? (
          <Spin indicator={antIcon} />
        ) : (
          <UserContainer users={users} />
        )}
      </div>
    </ContentWrapper>
  );
};

export default Users;
