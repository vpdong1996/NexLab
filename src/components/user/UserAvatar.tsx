import { Avatar } from "antd";
import { useHistory } from "react-router";
import { randomColorGenerator } from "../../helpers/utils";

interface UserAvatarProps {
  userId: number;
  username: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ userId, username }) => {
  const history = useHistory();

  const onClickAvatar = () => {
    history.push(`/${userId}/posts`);
  };

  return (
    <div
      style={{ cursor: "pointer", display: "inline-flex" }}
      onClick={onClickAvatar}
    >
      <Avatar
        className="user--avatar"
        style={{
          backgroundColor: randomColorGenerator(username),
          verticalAlign: "center",
        }}
        size={{ sm: 40, md: 60, lg: 80, xl: 120, xxl: 200 }}
      >
        {username}
      </Avatar>
    </div>
  );
};

export default UserAvatar;
