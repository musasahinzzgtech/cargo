import React from "react";
import * as Styled from "./ScrollableContainer.styled";

const ScrollableContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Styled.ScrollableContainer tag="div">
      {children}
    </Styled.ScrollableContainer>
  );
};

export default ScrollableContainer;
