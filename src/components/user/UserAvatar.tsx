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
      className="avatar--wrapper"
      style={{ cursor: "pointer", display: "inline-flex" }}
      onClick={onClickAvatar}
    >
      <Avatar
        className="user--avatar"
        style={{
          backgroundColor: randomColorGenerator(username),
          verticalAlign: "center",
        }}
        size={{ xs: 65, sm: 70, md: 80, lg: 100, xl: 150, xxl: 200 }}
      >
        {username}
      </Avatar>
    </div>
  );
};

export default UserAvatar;
