import React from "react";
import { Typography } from "antd";

import StandardLink from "components/common/atoms/StandardLink";
import ConcatComponents from "components/common/atoms/ConcatComponents";

import { registerPathname } from "constants/routes/publicRoutes";

import Styled from "./Header.styled";

const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <Typography.Title level={4}>Login</Typography.Title>
      <ConcatComponents>
        <Typography.Text type="secondary">
          Don't you have an account?
        </Typography.Text>

        <StandardLink pathname={registerPathname} value="Register" />
      </ConcatComponents>
    </Styled.HeaderWrapper>
  );
};

export default Header;
