import React from "react";
import Styled from "./ConcatComponents.styled";
const ConcatComponents = ({ children }: any) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default ConcatComponents;
