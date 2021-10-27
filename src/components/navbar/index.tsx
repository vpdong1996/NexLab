import { Button, Drawer } from "antd";
import { useState } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

interface NavbarProps {}

export const NavBar: React.FC<NavbarProps> = ({}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleShowMenu = () => setMenuVisible(true);

  const handleCloseMenu = () => setMenuVisible(false);

  return (
    <nav className="menuBar">
      <div className="logo">
        <a href="#">logo</a>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu />
        </div>
        <div className="rightMenu">
          <RightMenu />
        </div>
        <Button className="barsMenu" type="primary" onClick={handleShowMenu}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={handleCloseMenu}
          visible={menuVisible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
};
