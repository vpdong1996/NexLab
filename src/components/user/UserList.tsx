import { getFirstName } from "../../helpers/utils";
import { User } from "../../services/user";
import UserAvatar from "./UserAvatar";
import { Row, Col, Divider } from "antd";

interface UserListProps {
  users: User[] | undefined;
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <Row gutter={[24, 24]}>
      {users?.map((user) => (
        <Col span={6}>
          <UserAvatar key={user.id} user={getFirstName(user.name)} />
        </Col>
      ))}
      <Col></Col>
    </Row>
  );
};

export default UserList;
