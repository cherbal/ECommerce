import React from "react";
import { Layout } from "antd";
import "./Menu.css"
const Menu = ({ menu }) => {
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
   </Layout.Sider>
   );
};
export default Menu;