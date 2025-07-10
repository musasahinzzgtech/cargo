import { Layout, Menu, Flex, MenuProps } from "antd";
import React from "react";
import { PublicLayoutProps } from "./PublicLayout.types";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Navbar from "./Navbar";
import ScrollableContainer from "components/common/atoms/ScrollableContainer";

const { Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `dev-${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `dev-deneme-${subKey}`,
      };
    }),
  };
});
const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <Layout style={{ overflow: "hidden"}}>
      <Navbar />
      {/* <Layout /> */}
      <Layout style={{ padding: "24px", height: "95dvh"}}>
        <Layout.Content
          style={{
            padding: 24,
          }}
        >
          <ScrollableContainer>
            <div style={{ height: "100%", margin: "auto" }}>{children}</div>
          </ScrollableContainer>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default PublicLayout;
