import { Layout } from "antd";
import React from "react";

const ProtectedContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout.Content style={{ height: "100%" }}>
      <div>{children}</div>
    </Layout.Content>
  );
};

export default ProtectedContent;
