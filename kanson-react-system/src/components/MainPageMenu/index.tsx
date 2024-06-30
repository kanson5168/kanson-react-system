import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("站点1", "/pageone", <PieChartOutlined />),
  getItem("站点2", "/pagetwo", <DesktopOutlined />),
  getItem("User", "pagethree", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "pagefour", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const Comp: React.FC = () => {
  const [openKeys, setOpenKeys] = useState([""]);
  const navgativeTo = useNavigate();
  const meunClick = (e: { key: string }) => {
    navgativeTo(e.key);
  };
  const onOpenChange = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]]);
  };
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["pageone"]}
      mode="inline"
      items={items}
      onClick={meunClick}
      onOpenChange={onOpenChange}
      openKeys={openKeys}
    />
  );
};

export default Comp;
