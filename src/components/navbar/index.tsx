import { Button, Drawer } from "antd";
import { useState } from "react";
import { useParams } from "react-router";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

interface NavbarProps {}

type paramType = { userId: string } | {};

export const NavBar: React.FC<NavbarProps> = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const params: paramType = useParams();

  const handleShowMenu = () => setMenuVisible(true);

  const handleCloseMenu = () => setMenuVisible(false);

  return (
    <nav className="menuBar">
      <div className="logo">
        <a href="#">logo</a>
      </div>
      <div className="menuCon">
        <div className="leftMenu" />
        {Object.keys(params).length > 0 && (
          <div className="rightMenu">
            <RightMenu />
          </div>
        )}

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
