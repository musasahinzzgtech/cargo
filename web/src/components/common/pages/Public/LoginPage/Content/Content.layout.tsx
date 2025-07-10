import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import {
  forgotPasswordPathname,
  registerPathname,
} from "constants/routes/publicRoutes";
import StandardLink from "components/common/atoms/StandardLink";
import { ContentProps } from "./Content.types";

const Content = ({
  isLoadingAuth,
  isAuthenticated,
  dispatchLoginUser,
}: ContentProps) => {
  const onFinish = (values: any) => {
    dispatchLoginUser({ email: values.username, password: values.password });
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <StandardLink
          pathname={forgotPasswordPathname}
          value="Forgot password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={isLoadingAuth}
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Content;
