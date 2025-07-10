import React, { useState } from "react";
import { Card, Steps } from "antd";
import Header from "./Header";
import Content from "./Content";
import Styled from "./RegisterPage.styled";
const RegisterPage = () => {
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

export default RegisterPage;
