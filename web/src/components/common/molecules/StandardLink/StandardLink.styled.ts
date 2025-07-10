import { Typography } from "antd";
import { styled } from "styled-components";

// TODO: add variant styles and animation
// TODO: generate with styled renderer
const StandardLinkWrapper = styled(Typography.Text)<{ $variant: string }>`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export { StandardLinkWrapper };
