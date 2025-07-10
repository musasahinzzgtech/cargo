import { Layout, Menu, Dropdown, Space, Flex, Card, Typography } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import React, { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ProtectedLayoutProps } from "./ProtectedLayout.types";
import { items } from "./ProtectedLayout.helpers";
import ProtectedContent from "./ProtectedContent";

const { Header, Content, Footer } = Layout;

const ProtectedLayout = ({
  children,
  dispatchLogout,
}: ProtectedLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Fragment>
      <Layout>
        <div
          style={{
            height: "100dvh",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "250px auto",
          }}
        >
          {/* Header */}
          {/* <Header style={{ padding: 0, background: "white", height: "6dvh" }}>
            <Flex justify="end" style={{ padding: "0 2rem" }}>
              <Dropdown
                menu={{
                  items: [
                    {
                      label: <a href="#">Profil</a>,
                      key: "0",
                    },
                    {
                      label: <a href="#">Ayarlar</a>,
                      key: "1",
                    },
                    { type: "divider" },
                    {
                      label: "Çıkış Yap",
                      key: "3",
                      onClick: () => dispatchLogout(),
                    },
                  ],
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <UserOutlined />
                    <div>Musa Şahin Kundakcı</div>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Flex>
          </Header> */}
          {/* Sidebar Card */}
          <Card
            style={{
              width: 220,
              height: "100%",
              flexShrink: 0,
              border: "none",
              alignItems: "center",
            }}
          >
            <Typography>Ustamsaglam</Typography>
            <Menu
              mode="vertical"
              selectedKeys={[location.pathname]}
              items={items}
              onClick={({ key }) => navigate(key)}
              style={{ border: "none", width: "100%" }}
            />
          </Card>
          {/* Content */}
          <Content
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              gap: 24,
              height: "100vh",
              overflowY: "auto",
              margin: "1rem 0"
            }}
          >
            <ProtectedContent>{children}</ProtectedContent>
          </Content>
        </div>
        {/* Footer */}
        {/* <Footer style={{ textAlign: "center", height: "100%", width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            Benim Param ©{new Date().getFullYear()} Created by Musa Şahin
            Kundakcı
          </div>
        </Footer> */}
      </Layout>
    </Fragment>
  );
};

export default ProtectedLayout;
