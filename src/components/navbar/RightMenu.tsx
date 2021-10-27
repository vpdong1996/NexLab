import { Menu } from "antd";
import { useHistory } from "react-router";

interface RightMenuProps {}

const RightMenu: React.FC<RightMenuProps> = () => {
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail" onClick={onClickBack}>
        Back to user list
      </Menu.Item>
    </Menu>
  );
};
export default RightMenu;
