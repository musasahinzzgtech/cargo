import React from "react";
import { Card } from "antd";
import Header from "./Header";
import Content from "./Content";
import Styled from "./LoginPage.styled";
const LoginPage = () => {
  return (
    <Styled.CardOuterWrapper>
      <Card bordered={false}>
        <Styled.CardInnerWrapper>
          <Header />
          <Content />
        </Styled.CardInnerWrapper>
      </Card>
    </Styled.CardOuterWrapper>
  );
};

export default LoginPage;
