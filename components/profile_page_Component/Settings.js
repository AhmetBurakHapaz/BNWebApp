import { Dropdown, Icon, Menu, Button } from "antd";
import { Inbox, User, Bell, Settings, LogOut } from "react-feather";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        <Bell size="18" /> Bildirimlerim
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        rel="noopener noreferrer"
        href="profile"
      >
        <User size="18" /> Profilim
      </a>
    </Menu.Item>
    <Menu.Item>
      <a  rel="noopener noreferrer" href="http://www.tmall.com/">
      <Settings size="18" /> Ayarlarım
      </a>
    </Menu.Item>
    <Menu.Item>
      <a  rel="noopener noreferrer" href="logout">
      <LogOut size="18" /> Çıkış Yap
      </a>
    </Menu.Item>
  </Menu>
);

const Component = () => (
  <Dropdown overlay={menu}>
    <div className="menu" href="#">
      <Icon type="user" style={{ color: "#599999" }} />
      <a
        style={{
          hover: "#ff99cc",
          textDecoration: "none",
          color: "#599999",
          backgroundColor: "none",
        }}
      >
        {" "}
        Hesabım{" "}
      </a>
      <Icon type="down" size="1" style={{ color: "#599999" }} />
    </div>
  </Dropdown>
);

export default Component;
