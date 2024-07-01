import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    label: "站点1",
    key: "pageone",
    icon: <PieChartOutlined />,
  },
  {
    label: "站点2",
    key: "pagetwo",
    icon: <DesktopOutlined />,
  },
  {
    label: "站点3",
    key: "pagethree",
    icon: <UserOutlined />,
    children: [
      {
        label: "站点01",
        key: "./pagethree/pagethree01",
      },
      {
        label: "站点02",
        key: "./pagethree/pagethree02",
      },
      {
        label: "站点03",
        key: "./pagethree/pagethree03",
      },
    ],
  },
  {
    label: "站点4",
    key: "pagefour",
    icon: <TeamOutlined />,
    children: [
      {
        label: "站点04",
        key: "pagefourone",
      },
    ],
  },
  {
    label: "站点7",
    key: "pageseven",
    icon: <FileOutlined />,
  },
];
const Comp: React.FC = () => {
  const currentlocation = useLocation();
  let firstOpenKey: string = "";
  // 设置初始化展开项
  const getFirstOpenkey = (array) => {
    for (const item of array) {
      if (item.key && item.key === currentlocation.pathname) {
        if (!item.children) {
          firstOpenKey = item.key;
        } else {
          getFirstOpenkey(item.children);
        }
      }
    }
  };
  getFirstOpenkey(items);
  const [openKeys, setOpenKeys] = useState([firstOpenKey]);
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
      defaultSelectedKeys={[currentlocation.pathname]}
      mode="inline"
      items={items}
      onClick={meunClick}
      onOpenChange={onOpenChange}
      openKeys={openKeys}
    />
  );
};

export default Comp;
