import React from "react";
import { User } from "../../types/User";
import UserList from "./UserList";

interface UserContainerProps {
  users: User[] | undefined;
}

const UserContainer: React.FC<UserContainerProps> = ({ users }) => {
  return (
    <div className="user--container">
      <h2 style={{ textAlign: "center", marginBottom: 40 }}>
        Select one user below to process the post list
      </h2>
      <UserList users={users} />
    </div>
  );
};

export default UserContainer;
