import { Menu } from "antd";

interface LeftMenuProps {}

const LeftMenu: React.FC<LeftMenuProps> = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail">Post List</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
