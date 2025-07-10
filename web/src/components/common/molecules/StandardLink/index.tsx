import React from "react";
import * as Styled from "./StandardLink.styled";
import { useNavigate } from "react-router-dom";

// Convert to type instead of JSDoc
/**
 * StandardLink
 * @package Component
 * @param {string} to path
 * @param {React.FC} children react node
 * @param {"link" | "text"} variant
 */
const StandardLink = ({
  variant,
  children,
  to,
  ...props
}: {
  children: React.ReactNode;
  to: string;
  variant: "link" | "text";
  [key: string]: any;
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(to);

  const decoratedProps = {
    onClick: handleNavigate,
    $variant: variant,
    ...props,
  };

  return (
    <Styled.StandardLinkWrapper {...decoratedProps} type="primary">
      {children}
    </Styled.StandardLinkWrapper>
  );
};

export default StandardLink;
