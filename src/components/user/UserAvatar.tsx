import { Avatar } from "antd";
import { randomColorGenerator } from "../../helpers/utils";

interface UserAvatarProps {
  user: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => {
  return (
    <Avatar
      className="user--avatar"
      style={{
        backgroundColor: randomColorGenerator(),
        verticalAlign: "center",
        cursor: "pointer",
      }}
      size={{ sm: 40, md: 60, lg: 80, xl: 120, xxl: 200 }}
    >
      {user}
    </Avatar>
  );
};

export default UserAvatar;
