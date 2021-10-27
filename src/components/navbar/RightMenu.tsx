import { Menu } from "antd";

interface RightMenuProps {}

const RightMenu: React.FC<RightMenuProps> = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail">User List</Menu.Item>
    </Menu>
  );
};
export default RightMenu;
