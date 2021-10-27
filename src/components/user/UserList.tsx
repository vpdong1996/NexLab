import { getFirstName } from "../../helpers/utils";
import UserAvatar from "./UserAvatar";
import { Row, Col } from "antd";
import { User } from "../../types/User";

interface UserListProps {
  users: User[] | undefined;
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <Row gutter={[24, 24]}>
      {users?.map((user) => (
        <Col key={user.id} span={6}>
          <UserAvatar
            key={user.id}
            userId={user.id}
            username={getFirstName(user.name)}
          />
        </Col>
      ))}
      <Col></Col>
    </Row>
  );
};

export default UserList;
